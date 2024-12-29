import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { useLaunchParams } from "@telegram-apps/sdk-react";

import { Outlet } from "react-router-dom";

import { questionsActions } from "@/store/questions";

const App: FC = () => {
  const d = useDispatch();
  const lp = useLaunchParams();

  useEffect(() => {
    d(questionsActions.prepare());
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <div>{JSON.stringify(lp.themeParams)}</div>
      <Outlet />
    </>
  );
};

export default App;
