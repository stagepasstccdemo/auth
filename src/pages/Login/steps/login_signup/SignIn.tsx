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

export function SignIn({ setPage }) {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signInWithPassword } = useAuth();
  const toast = useToast();

  const handleSignUp = () => {
    setPage("SignUp");
  };

  const handleGoBack = () => {
    setPage("AuthenticationMethod");
  };

  const handleResetPassword = () => {
    setPage("ResetPassword");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserFormType>({
    resolver: signInUserResolver,
  });

  const signInUser = async (formData: SignInUserFormType) => {
    setLoading(true);
    await signInWithPassword(formData.email, formData.password);
    setLoading(false);

    if (errors) {
      toast.error("Invalid email or password", {
        position: "top-center",
        duration: 4000,
      });
    }
  };

  return (
    <DefaultLayout>
      <Flex direction="column" px="1.25rem" py="2rem" gap="5" padding>
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
        <Heading as="h2" text="Sign In" mb="5" color="gray.100" />
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

          <FormFields.Input
            text="Enter your password"
            placeholder="password"
            type="password"
            name="password"
            register={register}
            error={errors.password}
          />

          <FormFields.Redirect onClick={handleResetPassword}>
            Forgot Password
          </FormFields.Redirect>
        </Flex>

        <Flex flexDirection="column">
          <FormFields.Submit isLoading={loading}>sign in</FormFields.Submit>
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
