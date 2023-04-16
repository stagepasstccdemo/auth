// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Button,
  Text,
} from "@stagepass/osiris-ui";

import { IoTicketOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function ChoiceSelection({ page, setPage }) {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <DefaultLayout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
      >
        <Box px="40" py="52" pb="0">
          <Heading as="h1" color="gray.100" text="Let`s Start our journey" />
        </Box>

        <IoTicketOutline size={320} />

        <Flex direction="column" gap="20" pb="22" width="100vw" px="28">
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
            bgColor="gray.400"
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
          mb="22"
        />
      </Flex>
    </DefaultLayout>
  );
}
