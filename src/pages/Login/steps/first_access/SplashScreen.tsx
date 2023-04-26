import {
  DefaultLayout,
  Center,
  Logo,
  Flex,
  Spinner,
} from "@stagepass/osiris-ui";

import LogoImg from "@assets/logo.png";

import { useEffect } from "react";
import { useCookies } from "@hooks/useCookies";
import { useAuth } from "@hooks/useAuth";
import { navigateToUrl } from "single-spa";

export function SplashScreen({ setPage }) {
  const { checkCookie, setCookie } = useCookies();
  const { userSession } = useAuth();

  useEffect(() => {
    const hasCookies = checkCookie("@stagepass:not-first-access");
    setTimeout(() => {
      if (userSession) {
        navigateToUrl("/events");
      }

      return !hasCookies
        ? setPage("ShowHowFirst")
        : setPage("AuthenticationMethod");
    }, 2000);
  }, [checkCookie, setCookie, setPage, userSession]);

  return (
    <DefaultLayout>
      <Center h="90vh">
        <Flex
          flexDirection="column"
          gap="20"
          alignItems="center"
          justifyContent="center"
        >
          <Logo src={LogoImg} borderRadius="60px" boxSize="20rem" />
          <Spinner boxSize={20} thickness="6px" speed="0.60s" color="white" />
        </Flex>
      </Center>
    </DefaultLayout>
  );
}
