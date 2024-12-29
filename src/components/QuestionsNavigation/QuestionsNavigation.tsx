import "./QuestionsNavigation.sass";

import { type FC } from "react";
import { useDispatch } from "react-redux";

import { Button, Text } from "@/uikit";

import { questionsActions } from "@/store/questions";

interface QuestionsNavigationProps {}

const QuestionsNavigation: FC<QuestionsNavigationProps> = (props) => {
  const d = useDispatch();

  const handleNextQuestion = () => {
    return d(questionsActions.navigateQuestion("next"));
  };

  const handlePrevQuestion = () => {
    return d(questionsActions.navigateQuestion("back"));
  };

  return (
    <div className="QuestionsNavigation">
      <Button stretched onClick={handleNextQuestion}>
        <Text>Следующий</Text>
      </Button>
      <Button stretched mode="gray" onClick={handlePrevQuestion}>
        <Text>Предыдущий</Text>
      </Button>
    </div>
  );
};

export default QuestionsNavigation;
