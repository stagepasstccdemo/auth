// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Button,
} from "@stagepass/osiris-ui";

import { IoTicketOutline } from "react-icons/io5";

export function ChoiceSelection({ page, setPage }) {
  return (
    <DefaultLayout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
      >
        <Box px="40" py="52" pb="0">
          <Heading as="h1" color="gray.100">
            Let`s Start our journey
          </Heading>
        </Box>
        <IoTicketOutline size={320} />

        <Flex direction="column" gap="20" pb="22">
          <Button>login</Button>
          <Button>signup</Button>
          <p style={{ color: "white" }}>just wanna explore</p>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
