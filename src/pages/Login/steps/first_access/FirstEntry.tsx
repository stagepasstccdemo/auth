import { DefaultLayout, Center, Flex, Logo, TextBadge } from "@stagepass/osiris-ui"
import { useEffect } from "react";

import LogoImg from "../../../../assets/logo.png";

export const FirstEntry = ({page, setPage}) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(page + 1);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [page, setPage]);

  return (
    <DefaultLayout>
      <Center h="90vh">
        <Logo src={LogoImg} borderRadius="60px" boxSize="320px" />
      </Center>
    </DefaultLayout>
  )
}