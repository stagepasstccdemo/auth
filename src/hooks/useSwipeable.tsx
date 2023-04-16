import { useSwipeable } from "react-swipeable";

type SwipeHandlerProps = {
  handler: {
    left?: () => void;
    right?: () => void;
  };
  swipeDuration: number;
};

export const useSwipeGestures = ({
  handler,
  swipeDuration = 800,
}: SwipeHandlerProps) => {
  const swipeGestures = useSwipeable({
    onSwipedLeft: () => handler.left(),
    onSwipedRight: () => handler.right(),
    swipeDuration,
    trackMouse: true,
  });

  return { swipeGestures };
};
