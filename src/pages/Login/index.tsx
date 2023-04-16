import { useState } from "react";
import { getCookie, setCookie } from "@constants/cookies";

import {
  ChoiceSelection,
  SplashScreen,
  ShowHowFirst,
  ShowHowSecond,
  ShowHowThird,
  SignIn,
  SignUp,
} from "./steps";
import { ResetPassword } from "./steps/login_signup/ResetPassword";

export function Login() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [page, setPage] = useState("SplashScreen");

  (function checkCookies() {
    const cookies = getCookie("@stagepass:first_access");
    if (!cookies) {
      setCookie("@stagepass:first_access", "true", 365);
      setIsFirstVisit(true);
    }
  })();

  const isFirstAccessComponents = isFirstVisit
    ? [
        {
          name: "ShowHowFirst",
          component: <ShowHowFirst setPage={setPage} />,
        },
        {
          name: "ShowHowSecond",
          component: <ShowHowSecond setPage={setPage} />,
        },
        {
          name: "ShowHowThird",
          component: <ShowHowThird setPage={setPage} />,
        },
      ]
    : [];

  const componentList = [
    {
      name: "SplashScreen",
      component: <SplashScreen setPage={setPage} />,
    },
    ...isFirstAccessComponents,
    {
      name: "ChoiceSelection",
      component: <ChoiceSelection setPage={setPage} />,
    },
    { name: "SignIn", component: <SignIn setPage={setPage} /> },
    { name: "SignUp", component: <SignUp setPage={setPage} /> },
    {
      name: "ResetPassword",
      component: <ResetPassword setPage={setPage} />,
    },
  ];

  const componentIndex = componentList.findIndex(
    (component) => component.name === page
  );
  const currentComponent = componentList[componentIndex];

  return <div>{currentComponent.component}</div>;
}
