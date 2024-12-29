import "./QuestionsNavigation.sass";

import { type FC } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Text } from "@/uikit";

import { questionsActions } from "@/store/questions";

interface QuestionsNavigationProps {}

const QuestionsNavigation: FC<QuestionsNavigationProps> = (props) => {
  const d = useDispatch();
  const { t } = useTranslation();

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
        <Text>{t("questions.pagination.buttons.next")}</Text>
      </Button>
      <Button stretched mode="bezeled" onClick={handlePrevQuestion}>
        <Text>{t("questions.pagination.buttons.prev")}</Text>
      </Button>
      <Button stretched mode="bezeled" onClick={handleCopyQuestion}>
        <Text>{t("questions.pagination.buttons.copy")}</Text>
      </Button>
    </div>
  );
};

export default QuestionsNavigation;
