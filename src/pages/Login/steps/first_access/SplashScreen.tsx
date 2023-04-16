// @ts-nocheck
import {
  DefaultLayout,
  Center,
  Logo,
  Flex,
  Spinner,
} from "@stagepass/osiris-ui";

import { useEffect } from "react";

import LogoImg from "@assets/logo.png";

export function SplashScreen({ setPage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage("ShowHowFirst");
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [setPage]);

  return (
    <DefaultLayout>
      <Center h="90vh">
        <Flex
          flexDirection="column"
          gap="60"
          alignItems="center"
          justifyContent="center"
        >
          <Logo src={LogoImg} borderRadius="60px" boxSize="320px" />
          <Spinner boxSize={40} thickness="4px" speed="0.60s" color="white" />
        </Flex>
      </Center>
    </DefaultLayout>
  );
}
