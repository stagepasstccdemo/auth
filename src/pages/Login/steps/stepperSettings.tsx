import {
  ChoiceSelection,
  SplashScreen,
  ShowHowFirst,
  ShowHowSecond,
  ShowHowThird,
  SignIn,
  SignUp,
  ResetPassword,
} from "./index";

interface StepperProps {
  setPage?: (page: string) => void;
}

export const isFirstAccessComponents = ({ setPage }: StepperProps) => {
  return [
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
  ];
};

export const getStepperComponents = ({ setPage }: StepperProps) => [
  {
    name: "SplashScreen",
    component: <SplashScreen setPage={setPage} />,
  },
  ...isFirstAccessComponents({ setPage }),
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
