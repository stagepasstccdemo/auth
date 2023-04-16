// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  MultipleBadges,
  FullFlexWithGestures,
  MultiplePills,
} from "@stagepass/osiris-ui";

import { useSwipeGestures } from "@hooks/useSwipeable";

const badges = [
  { key: 1, text: "concerts", bgColor: "default" },
  { key: 2, text: "festivals", bgColor: "primary", width: "60%" },
  {
    key: 3,
    text: "sports",
    bgColor: "ternary",
    width: "80%",
  },
  { key: 4, text: "talks", bgColor: "secondary", width: "100%" },
];

const pills = [
  { key: 1, selected: false },
  { key: 2, selected: true },
  { key: 3, selected: false, onClick: () => setPage(page + 1) },
];

export function ShowHowSecond({ setPage, page }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      left: () => setPage(page + 1),
      right: () => setPage(page - 1),
    },
    swipeDuration: 800,
  });

  return (
    <DefaultLayout>
      <FullFlexWithGestures
        justifyContent="space-between"
        swipe={swipeGestures}
      >
        <Box px="40" py="52">
          <Heading as="h1" color="gray.100">
            Have Fun In every way possible
          </Heading>

          <MultipleBadges
            direction="column"
            alignItems="start"
            pt="20"
            gap="20"
            badges={badges}
          />
          <Flex alignItems="center" pt="40" pl="20" textAlign="flex-start">
            <Heading as="h2" color="gray.100">
              and a whole lot more...
            </Heading>
          </Flex>
        </Box>

        <MultiplePills gap={20} pb={22} alignItems="center" pills={pills} />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
