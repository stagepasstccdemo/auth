import { useState } from "react";

import { getStepperComponents } from "./steps/stepperSettings";

export function Login() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [page, setPage] = useState("SplashScreen");

  const componentList = getStepperComponents({ setPage, isFirstVisit });
  const componentIndex = componentList.findIndex(
    (component) => component.name === page
  );
  const currentComponent = componentList[componentIndex];

  return <div>{currentComponent.component}</div>;
}
