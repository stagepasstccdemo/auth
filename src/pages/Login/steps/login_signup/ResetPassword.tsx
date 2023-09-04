// TODO: Fix FormFields.Input and FormFields.Submit props and Redirect;
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
  FlexContainer,
} from "@stagepass/osiris-ui";

import { FaGoogle, IoArrowBack } from "@assets/icons";

import { useState } from "react";
import { useAuth } from "@hooks/useAuth";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import {
  resetPasswordResolver,
  ResetPasswordType,
} from "@schemas/useCases/resetPasswordFormSchema";

export function ResetPassword({ setPage }) {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, sendResetPasswordEmail } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleGoBack = () => {
    return setPage ? setPage("AuthenticationMethod") : navigate("/signIn");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: resetPasswordResolver,
  });

  const resetUserAccountPassword = async (formData: ResetPasswordType) => {
    setLoading(true);
    const { error } = await sendResetPasswordEmail(formData.email);
    setLoading(false);

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        duration: 5000,
      });
    }

    if (!error) {
      toast("A reset password link has been sent to your email address !", {
        position: "top-center",
        duration: 5000,
      });

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
        </Box>
        <Heading as="h2" text="Forgot your pasword ?" mb="5" color="gray.100" />
      </Flex>

      <Form onSubmit={handleSubmit(resetUserAccountPassword)}>
        <FlexContainer direction="column" gap="20">
          <FormFields.Input
            alignSelf="center"
            text="Enter your email"
            placeholder="john-doe@mail.com"
            name="email"
            register={register}
            error={errors.email}
            maxW="40rem"
            width="100%"
          />
          <Flex flexDirection="column" alignItems="center">
            <Flex
              maxW="100rem"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <FormFields.Submit isLoading={loading}>
                send reset code
              </FormFields.Submit>
            </Flex>
            <Divider width="20rem" />
            <Flex
              maxW="100rem"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
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
          </Flex>
        </FlexContainer>
      </Form>
      <Toaster />
    </DefaultLayout>
  );
}
