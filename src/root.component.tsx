import {
  DefaultLayout,
  Flex,
  Logo,
  Center,
  TextBadge,
} from "@stagepass/osiris-ui";

import LogoImg from "./assets/logo.png";

export default function Root(props) {
  return (
    <DefaultLayout>
      <Center h="90vh">
        <Logo src={LogoImg} borderRadius="60px" boxSize="320px" />
      </Center>

      <Flex gap="48" alignItems="center" justify="center" mt="20">
        <TextBadge color="primary">testando</TextBadge>
      </Flex>
    </DefaultLayout>
  );
}
