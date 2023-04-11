import { DefaultLayout, Center, Logo, Flex } from "@stagepass/osiris-ui"
import { useEffect } from "react";

import LogoImg from "../../../../assets/logo.png";

// @ts-ignore
import { Spinner } from "@stagepass/osiris-ui";

export const FirstEntry = ({page, setPage}) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(page + 1);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [page, setPage]);

  return (
    <DefaultLayout>
      <Center h="90vh">
        <Flex flexDirection="column" gap="60" alignItems="center" justifyContent="center">
            <Logo src={LogoImg} borderRadius="60px" boxSize="320px" />
            <Spinner boxSize={40} thickness="4px" speed="0.60s" color="white"/>      
        </Flex>
      </Center>
    </DefaultLayout>
  )
}