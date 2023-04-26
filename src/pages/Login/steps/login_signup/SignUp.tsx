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

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { useNavigate } from "react-router-dom";

import {
  signUpUserResolver,
  SignUpUserType,
} from "@schemas/useCases/signUpUserFormSchema";

export function SignUp({ setPage }) {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signUp } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleGoBack = () => {
    return setPage
      ? setPage("AuthenticationMethod")
      : navigate("/authenticationMethod");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserType>({
    resolver: signUpUserResolver,
  });

  const signUpUser = async (formData: SignUpUserType) => {
    setLoading(true);
    const { error } = await signUp(formData.email, formData.password);
    setLoading(false);

    if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        duration: 5000,
      });
    }

    if (!error) {
      toast.success(
        "A confirmation email was sent to you, please confirm your email in order to be able to log in",
        {
          position: "top-center",
          duration: 6000,
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
        </Box>
        <Heading as="h2" text="Sign Up" mb="5" color="gray.100" />
      </Flex>

      <Form onSubmit={handleSubmit(signUpUser)}>
        <FlexContainer direction="column" gap="20">
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

          <FormFields.Input
            text="Confirm your password"
            placeholder="password"
            type="password"
            name="password_confirmation"
            register={register}
            error={errors.password_confirmation}
          />
        </FlexContainer>

        <Flex flexDirection="column">
          <FormFields.Submit isLoading={loading}>sign up</FormFields.Submit>
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
