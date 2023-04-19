// @ts-nocheck
import {
  Box,
  DefaultLayout,
  Heading,
  Image,
  FullFlexWithGestures,
  MultiplePills,
} from "@stagepass/osiris-ui";

import EventsImage from "@assets/events-image.png";
import { useSwipeGestures } from "@hooks/useSwipeable";
import { useEffect } from "react";
import { setPageProps } from "../types";

const pills = [
  {
    key: 1,
    selected: false,
    onClick: (setPage: setPageProps) => setPage("ShowHowFirst"),
  },
  {
    key: 2,
    selected: false,
    onClick: (setPage: setPageProps) => setPage("ShowHowSecond"),
  },
  {
    key: 3,
    selected: true,
    onClick: (setPage: setPageProps) => setPage("ShowHowThird"),
  },
];

export function ShowHowThird({ setPage }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      left: () => setPage("ChoiceSelection"),
      right: () => setPage("ShowHowSecond"),
    },
    swipeDuration: 800,
  });

  useEffect(() => {
    setTimeout(() => {
      setPage("ChoiceSelection");
    }, 6000);

    return () => {
      clearTimeout();
    };
  }, [setPage]);

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
            width="260px"
          />
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
