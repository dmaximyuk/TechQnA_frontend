import "./Questions.sass";

import { type FC } from "react";
import { useSelector } from "react-redux";

import { Title, Text, Tag } from "@/uikit";

import { questionsSelector } from "@/store/questions";

interface QuestionProps {}

const Question: FC<QuestionProps> = (props) => {
  const { question, items } = useSelector(questionsSelector);

  const getItem = () => {
    if (!!question || Object.keys(items)?.length >= 1) {
      return items[question as number];
    }

    return null;
  };

  if (!getItem()) {
    return "Error";
  }

  return (
    <div className="Questions">
      <div className="Questions__tags">
        <Tag>{`#${String(question)}`}</Tag>
        {getItem()?.tags?.map((str) => (
          <Tag key={`tag-${str}`}>{str.toUpperCase()}</Tag>
        ))}
      </div>
      <Title className="Questions__text" weight="1">
        {getItem()?.title}
      </Title>
      <Text className="Questions__text">{getItem()?.text}</Text>
    </div>
  );
};

export default Question;
