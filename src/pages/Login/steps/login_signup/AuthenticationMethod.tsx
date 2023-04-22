// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Button,
  Text,
} from "@stagepass/osiris-ui";

import { IoTicketOutline } from "@icons";

export function AuthenticationMethod({ setPage }) {
  const handleSignIn = () => {
    setPage("SignIn");
  };

  const handleSignUp = () => {
    setPage("SignUp");
  };

  return (
    <DefaultLayout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
      >
        <Box px="2.5rem" py="3.25rem" pb="0">
          <Heading as="h1" color="gray.100" text="Let`s Start our journey" />
        </Box>

        <IoTicketOutline size={320} />

        <Flex
          direction="column"
          gap="2.5rem"
          pb="1.375rem"
          width="100vw"
          px="1.75rem"
        >
          <Button
            rounded="2xl"
            bgColor="gray.700"
            color="gray.100"
            py={6}
            onClick={handleSignIn}
          >
            login
          </Button>

          <Button
            rounded="2xl"
            bgColor="os-secondary.300"
            color="gray.100"
            py={6}
            onClick={handleSignUp}
          >
            signup
          </Button>
        </Flex>
        <Text
          text="I just wanna explore"
          color="gray.100"
          textAlign="center"
          mb="1.375rem"
        />
      </Flex>
    </DefaultLayout>
  );
}
