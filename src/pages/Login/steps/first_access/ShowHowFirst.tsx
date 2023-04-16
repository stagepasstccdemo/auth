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

import TicketsImg from "@assets/tickets_image.png";
import LogoCursiveImg from "@assets/logo-cursive.png";
import { useSwipeGestures } from "@hooks/useSwipeable";

export function ShowHowFirst({ page, setPage }) {
  const { swipeGestures } = useSwipeGestures({
    handler: {
      left: () => setPage(page + 1),
    },
    swipeDuration: 800,
  });

  const pills = [
    { key: 1, selected: true },
    { key: 2, selected: false, onClick: () => setPage(page + 1) },
    { key: 3, selected: false },
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

        <Box mr="4rem">
          <Image src={TicketsImg} alt="StagePass" />
        </Box>

        <MultiplePills gap={20} pb={22} alignItems="center" pills={pills} />
      </FullFlexWithGestures>
    </DefaultLayout>
  );
}
