import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  MultipleBadges,
  FullFlexWithGestures,
  MultiplePills,
  TextBadge,
} from "@stagepass/osiris-ui";

import { useSwipeGestures } from "@hooks/useSwipeable";
import { setPageProps } from "../types";

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
  {
    key: 1,
    selected: false,
    onClick: (setPage: setPageProps) => setPage("ShowHowFirst"),
  },
  {
    key: 2,
    selected: true,
    onClick: (setPage: setPageProps) => setPage("ShowHowSecond"),
  },
  {
    key: 3,
    selected: false,
    onClick: (setPage: setPageProps) => setPage("ShowHowThird"),
  },
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
        // @ts-ignore
        swipe={swipeGestures}
        justifyContent="space-between"
      >
        <Box px="2.5rem" py="3.25rem" pb="0">
          <Heading
            as="h1"
            color="gray.100"
            text="Have Fun In every way possible"
          />

          <MultipleBadges
            maxWidth={{ base: "100%", lg: "40%" }}
            direction="column"
            alignItems="start"
            pt="1.25rem"
            gap="1.25rem"
            badges={badges}
          />

          <Flex alignItems="center" pt="3.25rem" pl="2.5rem">
            <Heading as="h2" color="gray.100" text="and a whole lot more..." />
          </Flex>
        </Box>

        <MultiplePills
          gap={20}
          pb={22}
          alignItems="center"
          pills={pills}
          setPage={setPage}
        />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
