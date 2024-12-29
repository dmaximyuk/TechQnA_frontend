import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";

import { questionsActions } from "@/store/questions";

const App: FC = () => {
  const d = useDispatch();

  useEffect(() => {
    d(questionsActions.prepare());
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
