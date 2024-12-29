import "./Home.sass";

import { type AllHTMLAttributes, type FC } from "react";

import { QuestionsNavigation, Questions } from "@/components";
import { Divider } from "@/uikit";

export interface HomeProps extends Omit<AllHTMLAttributes<HTMLElement>, ""> {}

const Home: FC<HomeProps> = () => {
  const questionId = 1;

  return (
    <div className="Home">
      <Questions questionId={questionId} />
      <Divider />
      <QuestionsNavigation questionId={questionId} />
    </div>
  );
};

export default Home;
