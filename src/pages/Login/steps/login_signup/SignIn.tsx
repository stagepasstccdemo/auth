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
import { useAuth } from "@services/auth";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const { signInWithGoogle, signInWithPassword, userSession } = useAuth();

  const handleSignUp = () => {
    setPage("SignUp");
  };

  const handleGoBack = () => {
    setPage("ChoiceSelection");
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
    await signInWithPassword(formData.email, formData.password);
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(signInUser)}>
        <Flex direction="column" px="20" py="32" gap="5">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
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
        <Box
          height="78vh"
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
              gap="5"
              placeholder="john-doe@mail.com"
              bgColor="gray.700"
              color="gray.100"
              rounded="xl"
              focusBorderColor="os-primary.100"
              py={6}
              name="email"
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

          <Box>
            <Button
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
          </Box>
        </Box>
      </form>
    </DefaultLayout>
  );
}
