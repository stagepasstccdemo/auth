// @ts-nocheck
import {
  DefaultLayout,
  Flex,
  Pills,
  Heading,
  Box,
  Image,
  Text,
} from "@stagepass/osiris-ui";

import { useSwipeable } from "react-swipeable";

import { useEffect } from "react";
import TicketsImg from "../../../../assets/tickets_image.png";
import LogoCursiveImg from "../../../../assets/logo-cursive.png";

export function ShowHowFirst({ page, setPage }) {
  const swipeGestures = useSwipeable({
    onSwipedLeft: () => setPage(page + 1),
    swipeDuration: 800,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(page + 1);
    }, 2);
    return () => clearInterval(interval);
  });

  return (
    <DefaultLayout>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        {...swipeGestures}
      >
        <Box px="20" py="52">
          <Heading as="h1" color="gray.100">
            Welcome to
            <Image
              src={LogoCursiveImg}
              alt="StagePass"
              objectFit="contain"
              width="280px"
            />
          </Heading>
        </Box>

        <Box ml="6rem">
          <Text color="gray.100" fontSize="xl" maxWidth="14rem">
            Get tickets for everything you ll ever need
          </Text>
        </Box>
        <Box mr="4rem">
          <Image src={TicketsImg} alt="StagePass" />
        </Box>

        <Flex gap={20} pb="22">
          <Pills selected />
          <Pills onClick={() => setPage(page + 1)} />
          <Pills />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
