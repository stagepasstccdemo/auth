// @ts-nocheck
import {
  DefaultLayout,
  Flex,
  Heading,
  Box,
  IconButton,
  Button,
  Divider,
  Form,
  FormFields,
  Toaster,
  useToast,
} from "@stagepass/osiris-ui";

import { FaGoogle, IoArrowBack } from "@icons";

import { useState } from "react";
import { useAuth } from "@hooks/useAuth";

import { useForm } from "react-hook-form";

import {
  SignInUserFormType,
  signInUserResolver,
} from "@schemas/useCases/signInUserFormSchema";
import { useNavigate } from "react-router-dom";
import {
  resetPasswordResolver,
  ResetPasswordType,
} from "@schemas/useCases/resetPasswordFormSchema";

export function ResetPassword({ setPage }) {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, sendResetPasswordEmail } = useAuth();
  const toast = useToast();

  const navigate = useNavigate();

  const handleSignUp = () => {
    setPage("SignUp");
  };

  const handleGoBack = () => {
    setPage("AuthenticationMethod");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: resetPasswordResolver,
  });

  const signInUser = async (formData: ResetPasswordType) => {
    setLoading(true);
    const { error } = await sendResetPasswordEmail(formData.email);
    setLoading(false);

    if (error) {
      toast.error(`Error while loggin-in - ${error.message}`, {
        position: "top-center",
        duration: 4000,
      });
    }

    if (!error) {
      toast.success(
        "Welcome to StagePass - A confirmation email was sent to you, please confirm your email in order to be able to log in",
        {
          position: "top-center",
          duration: 4000,
        }
      );

      navigate("/signIn");
    }
  };

  return (
    <DefaultLayout>
      <Flex direction="column" px="1.25rem" py="2rem" gap="5">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton
            h="3rem"
            w="3rem"
            rounded="xl"
            bgColor="gray.700"
            icon={<IoArrowBack color="white" size={26} />}
            onClick={handleGoBack}
          />
          <Button
            variant="link"
            color="white"
            fontWeight="regular"
            onClick={handleSignUp}
          >
            SignUp
          </Button>
        </Box>
        <Heading as="h2" text="Forgot your pasword ?" mb="5" color="gray.100" />
      </Flex>

      <Form onSubmit={handleSubmit(signInUser)}>
        <Flex direction="column" gap="20">
          <FormFields.Input
            text="Enter your email"
            placeholder="john-doe@mail.com"
            name="email"
            register={register}
            error={errors.email}
          />
        </Flex>

        <Flex flexDirection="column">
          <FormFields.Submit isLoading={loading}>
            send reset code
          </FormFields.Submit>
          <Divider />
          <Button
            bgColor="gray.700"
            color="gray.100"
            rounded="xl"
            width="100%"
            mt="10"
            justifyContent="center"
            gap="5"
            py={6}
            leftIcon={<FaGoogle />}
            onClick={signInWithGoogle}
          >
            sign in with google
          </Button>
        </Flex>
      </Form>
      <Toaster />
    </DefaultLayout>
  );
}
