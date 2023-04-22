// @ts-nocheck
import {
  DefaultLayout,
  Flex,
  Heading,
  Box,
  IconButton,
  Button,
  InputWithLabel,
  Divider,
} from "@stagepass/osiris-ui";

import { IoArrowBack } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "@hooks/useAuth";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

type SignInUserForm = z.infer<z.ZodRequired<typeof signInUserFormSchema>>;

export function SignIn({ setPage }) {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signInWithPassword } = useAuth();

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
  } = useForm<SignInUserForm>({
    resolver: zodResolver(signInUserFormSchema),
  });

  const signInUser = async (formData: SignInUserForm) => {
    setLoading(true);
    await signInWithPassword(formData.email, formData.password);
    setLoading(false);
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

      <form onSubmit={handleSubmit(signInUser)}>
        <Box
          height="77vh"
          bgColor="white"
          borderTopRadius={40}
          p={20}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Flex direction="column" gap="20">
            <InputWithLabel
              text="Enter your email"
              placeholder="john-doe@mail.com"
              gap="5"
              bgColor="gray.700"
              color="gray.100"
              rounded="xl"
              focusBorderColor="os-primary.100"
              py={6}
              maxWidth="100%"
              name="email"
              _hover={{
                borderColor: "os-primary.100",
                transition: "0.1s ease-all",
              }}
              register={register}
              error={errors.email}
            />

            <InputWithLabel
              text="Enter your password"
              gap="5"
              placeholder="password"
              bgColor="gray.700"
              color="gray.100"
              rounded="xl"
              focusBorderColor="os-primary.100"
              type="password"
              py={6}
              name="password"
              _hover={{
                borderColor: "os-primary.100",
                transition: "0.1s ease-all",
              }}
              register={register}
              error={errors.password}
            />

            <Button
              variant="link"
              fontSize="sm"
              fontWeight="regular"
              alignSelf="flex-end"
              mt={errors.password ? "5" : "1"}
              onClick={handleResetPassword}
            >
              Forgot Password
            </Button>
          </Flex>

          <Flex flexDirection="column">
            <Button
              isLoading={loading}
              bgColor="gray.700"
              color="gray.100"
              rounded="xl"
              width="100%"
              mb="10"
              py={6}
              type="submit"
            >
              sign in
            </Button>
            <Divider
              text="or"
              border="1"
              distance="6"
              borderColor="gray.700"
              borderWidth="2px"
              rounded="full"
            />

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
        </Box>
      </form>
    </DefaultLayout>
  );
}
