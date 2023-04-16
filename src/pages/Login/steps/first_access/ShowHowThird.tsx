// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Flex,
  Heading,
  Pills,
  Image,
  FullFlexWithGestures,
  MultiplePills,
} from "@stagepass/osiris-ui";

import EventsImage from "@assets/events-image.png";
import { useSwipeGestures } from "@hooks/useSwipeable";
import { useEffect } from "react";

const pills = [
  { key: 1, selected: false, onClick: () => setPage(page - 2) },
  { key: 2, selected: false, onClick: () => setPage(page - 1) },
  { key: 3, selected: true, onClick: () => setPage(page + 1) },
];

export function ShowHowThird({ setPage, page }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      left: () => setPage(page + 1),
      right: () => setPage(page - 1),
    },
    swipeDuration: 800,
  });

  useEffect(() => {
    setTimeout(() => {
      setPage(page + 1);
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, [page, setPage]);

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
            text="Without even getting out of your chair"
          />
        </Box>

        <Box mr="6rem">
          <Image
            src={EventsImage}
            alt="StagePass"
            objectFit="contain"
            width="280px"
          />
        </Box>

        <MultiplePills gap={20} pb={22} alignItems="center" pills={pills} />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
