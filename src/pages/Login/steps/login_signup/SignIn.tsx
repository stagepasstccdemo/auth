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

export function SignIn({ setPage }) {
  const { signInWithGoogle } = useAuth();

  const handleSignUp = () => {
    setPage("SignUp");
  };

  const handleGoBack = () => {
    setPage("ChoiceSelection");
  };

  const handleResetPassword = () => {
    setPage("ResetPassword");
  };

  return (
    <DefaultLayout>
      <Flex direction="column" px="20" py="32" gap="5">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton
            rounded="xl"
            icon={<IoArrowBack color="white" size={26} />}
            bgColor="gray.700"
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
            placeholder="john_doe@example.com"
            bgColor="gray.700"
            rounded="xl"
            py={6}
          />
          <InputWithLabel
            text="Enter your password"
            gap="5"
            placeholder="password"
            bgColor="gray.700"
            rounded="xl"
            py={6}
          />
          <Button
            variant="link"
            fontSize="sm"
            fontWeight="regular"
            alignSelf="flex-end"
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
    </DefaultLayout>
  );
}
