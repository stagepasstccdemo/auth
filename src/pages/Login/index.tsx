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

export function Login() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [page, setPage] = useState(0);

  (function checkCookies() {
    const cookies = getCookie("@stagepass:first_access");
    if (!cookies) {
      setCookie("@stagepass:first_access", "true", 365);
      setIsFirstVisit(true);
    }
  })();

  const isFirstAccessComponents = isFirstVisit
    ? [
        <ShowHowFirst page={page} setPage={setPage} />,
        <ShowHowSecond page={page} setPage={setPage} />,
        <ShowHowThird page={page} setPage={setPage} />,
      ]
    : [];

  const componentList = [
    <SplashScreen page={page} setPage={setPage} />,
    ...isFirstAccessComponents,
    <ChoiceSelection page={page} setPage={setPage} />,
    <SignIn page={page} setPage={setPage} />,
    <SignUp page={page} setPage={setPage} />,
  ];

  return <div>{componentList[page]}</div>;
}
