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

  const handleCopyQuestion = () => {
    return d(questionsActions.copyCurrentQuestion());
  };

  return (
    <div className="QuestionsNavigation">
      <Button stretched onClick={handleNextQuestion}>
        <Text>Следующий</Text>
      </Button>
      <Button stretched mode="bezeled" onClick={handlePrevQuestion}>
        <Text>Предыдущий</Text>
      </Button>
      <Button stretched mode="bezeled" onClick={handleCopyQuestion}>
        <Text>Copy</Text>
      </Button>
    </div>
  );
};

export default QuestionsNavigation;
