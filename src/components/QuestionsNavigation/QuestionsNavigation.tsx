import "./QuestionsNavigation.sass";

import { type FC } from "react";

import { Button, Text } from "@/uikit";

interface QuestionsNavigationProps {
  questionId: number;
}

const QuestionsNavigation: FC<QuestionsNavigationProps> = (props) => {
  return (
    <div className="QuestionsNavigation">
      <Button stretched>
        <Text>Следующий</Text>
      </Button>
      <Button stretched mode="gray">
        <Text>Предыдущий</Text>
      </Button>
    </div>
  );
};

export default QuestionsNavigation;
