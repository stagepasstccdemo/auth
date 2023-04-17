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
  { key: 1, selected: false, onClick: () => setPage("ShowHowFirst") },
  { key: 2, selected: true, onClick: () => setPage("ShowHowSecond") },
  { key: 3, selected: false, onClick: () => setPage("ShowHowThird") },
];

export function ShowHowSecond({ setPage }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      left: () => setPage("ShowHowThird"),
      right: () => setPage("ShowHowFirst"),
    },
    swipeDuration: 800,
  });

  return (
    <DefaultLayout>
      <FullFlexWithGestures
        justifyContent="space-between"
        swipe={swipeGestures}
      >
        <Box px="40" py="52" pb="0">
          <Heading
            as="h1"
            color="gray.100"
            text="Have Fun In every way possible"
          />

          <MultipleBadges
            direction="column"
            alignItems="start"
            pt="20"
            gap="20"
            badges={badges}
          />
          <Flex alignItems="center" pt="40" pl="20" textAlign="flex-start">
            <Heading as="h2" color="gray.100" text="and a whole lot more..." />
          </Flex>
        </Box>

        <MultiplePills gap={20} pb={22} alignItems="center" pills={pills} />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
