// @ts-nocheck
import {
  DefaultLayout,
  Center,
  Logo,
  Flex,
  Spinner,
} from "@stagepass/osiris-ui";

import { useEffect } from "react";
import { useCookies } from "@hooks/useCookies";
import LogoImg from "@assets/logo.png";

export function SplashScreen({ setPage }) {
  const { checkCookie, setCookie } = useCookies();

  useEffect(() => {
    const hasCookies = checkCookie("@stagepass:not-first-access");

    setTimeout(() => {
      return !hasCookies
        ? setPage("ShowHowFirst")
        : setPage("AuthenticationMethod");
    }, 2000);
  }, [checkCookie, setCookie, setPage]);

  return (
    <DefaultLayout>
      <Center h="90vh">
        <Flex
          flexDirection="column"
          gap="60"
          alignItems="center"
          justifyContent="center"
        >
          <Logo src={LogoImg} fall borderRadius="60px" boxSize="20rem" />
          <Spinner boxSize={40} thickness="4px" speed="0.60s" color="white" />
        </Flex>
      </Center>
    </DefaultLayout>
  );
}
