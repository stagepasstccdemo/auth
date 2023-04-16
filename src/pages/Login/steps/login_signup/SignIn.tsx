// @ts-nocheck
import { DefaultLayout, Flex, Heading, Box } from "@stagepass/osiris-ui";

export function SignIn({ page, setPage }) {
  return (
    <DefaultLayout>
      <Flex>
        <Heading as="h1" text="Sign In" />
        <Box>
          <button type="button">enter your email</button>
          <button type="button">enter your password</button>
          <p>Forgot Password</p>

          <button type="button">sign in </button>
        </Box>

        <hr />

        <button type="button">sign in with google</button>
      </Flex>
    </DefaultLayout>
  );
}
