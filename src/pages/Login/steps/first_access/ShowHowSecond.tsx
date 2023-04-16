// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Pills,
  Heading,
  TextBadge,
} from "@stagepass/osiris-ui";

import { useSwipeable } from "react-swipeable";

import { useEffect } from "react";

export function ShowHowSecond({ setPage, page }) {
  const swipeGestures = useSwipeable({
    onSwipedLeft: () => setPage(page + 1),
    onSwipedRight: () => setPage(page - 1),
    swipeDuration: 800,
    trackMouse: true,
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPage(page + 1);
  //   }, 2);
  //   return () => clearInterval(interval);
  // });

  return (
    <DefaultLayout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        {...swipeGestures}
      >
        <Box px="40" py="52">
          <Heading as="h1" color="gray.100">
            Have Fun In every way possible
          </Heading>
          <Flex direction="column" alignItems="start" pt="20" gap="20">
            <TextBadge bgColor="default">concerts</TextBadge>
            <TextBadge width="60%" bgColor="primary">
              festivals
            </TextBadge>
            <TextBadge width="80%" bgColor="ternary" variant="outline">
              sports
            </TextBadge>
            <TextBadge width="100%" bgColor="secondary">
              talks
            </TextBadge>
          </Flex>
          <Flex alignItems="center" pt="40" pl="20" textAlign="flex-start">
            <Heading as="h2" color="gray.100">
              and a whole lot more...
            </Heading>
          </Flex>
        </Box>

        <Flex gap={20} pb="22">
          <Pills />
          <Pills selected onClick={() => setPage(page + 1)} />
          <Pills />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
