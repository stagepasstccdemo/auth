// @ts-nocheck
import {
  DefaultLayout,
  Box,
  Image,
  Text,
  FullFlexWithGestures,
  TextWithImage,
  MultiplePills,
} from "@stagepass/osiris-ui";

import { useSwipeGestures } from "@hooks/useSwipeable";

import TicketsImg from "@assets/tickets_image.png";
import LogoCursiveImg from "@assets/logo-cursive.png";

export function ShowHowFirst({ setPage }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      right: () => setPage("ShowHowFirst"),
      left: () => setPage("ShowHowSecond"),
    },
    swipeDuration: 800,
  });

  const pills = [
    { key: 1, selected: true, onClick: () => setPage("ShowHowFirst") },
    { key: 2, selected: false, onClick: () => setPage("ShowHowSecond") },
    { key: 3, selected: false, onClick: () => setPage("ShowHowThird") },
  ];

  return (
    <DefaultLayout>
      <FullFlexWithGestures swipe={swipeGestures}>
        <Box px="20" py="52">
          <TextWithImage
            as="h1"
            color="gray.100"
            text="Welcome to"
            alt="StagePass"
            width="280px"
            src={LogoCursiveImg}
          />
        </Box>

        <Box ml="6rem">
          <Text
            color="gray.100"
            fontSize="xl"
            maxWidth="14rem"
            text="Get tickets for everything you ll ever need"
          />
        </Box>

        <Box position="relative" width="100vw" height="100vh">
          <Box
            position="absolute"
            top="48%"
            right="15%"
            transform="translate(0, -50%)"
            width="85%"
          >
            <Image src={TicketsImg} alt="StagePass" objectFit="cover" />
          </Box>
        </Box>
        <MultiplePills
          gap={20}
          pb={22}
          alignItems="center"
          pills={pills}
          zIndex={1}
        />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
