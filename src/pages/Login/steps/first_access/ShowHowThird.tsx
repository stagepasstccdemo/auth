// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Pills,
  Image,
} from "@stagepass/osiris-ui";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import EventsImage from "../../../../assets/events-image.png";

export function ShowHowThird({ setPage, page }) {
  const swipeGestures = useSwipeable({
    onSwipedLeft: () => setPage(page + 1),
    onSwipedRight: () => setPage(page - 1),
    swipeDuration: 800,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => setPage(page + 1), 1);
    return () => clearTimeout(timer);
  });

  return (
    <DefaultLayout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        {...swipeGestures}
      >
        <Box px="40" py="52" pb="0">
          <Heading as="h1" color="gray.100">
            Without even getting out of your chair
          </Heading>
        </Box>

        <Box mr="6rem">
          <Image
            src={EventsImage}
            alt="StagePass"
            objectFit="contain"
            width="280px"
          />
        </Box>
        <Flex gap={20} pb="22">
          <Pills />
          <Pills onClick={() => setPage(page - 1)} />
          <Pills selected onClick={() => setPage(page + 1)} />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
