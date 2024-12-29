import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { useLaunchParams } from "@telegram-apps/sdk-react";

import { Outlet } from "react-router-dom";

import { questionsActions } from "@/store/questions";
import { getBrightness } from "@/utils";

const App: FC = () => {
  const d = useDispatch();
  const lp = useLaunchParams();

  useEffect(() => {
    d(questionsActions.prepare());
  }, []);

  useEffect(() => {
    const bgColor = lp.themeParams["bgColor"];

    if (bgColor) {
      document.documentElement.setAttribute(
        "data-theme",
        getBrightness(bgColor || "#ffffff"),
      );
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
