// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Button,
} from "@stagepass/osiris-ui";

import { IoTicketOutline } from "@icons";
import { navigateToUrl } from "single-spa";

export function AuthenticationMethod({ setPage }) {
  const handleSignIn = () => {
    return setPage ? setPage("SignIn") : navigateToUrl("/signIn");
  };

  const handleSignUp = () => {
    return setPage ? setPage("SignUp") : navigateToUrl("/signUp");
  };

  const handleExplore = () => {
    navigateToUrl("/events");
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
        <Button bgColor="transparent" color="gray.100" onClick={handleExplore}>
          I just wanna explore
        </Button>
      </Flex>
    </DefaultLayout>
  );
}
