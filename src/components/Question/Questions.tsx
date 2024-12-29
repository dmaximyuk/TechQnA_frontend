import "./Questions.sass";

import { type FC } from "react";
import { useSelector } from "react-redux";

import { Title, Text, Tag } from "@/uikit";

import { questionsSelector } from "@/store/questions";

interface QuestionProps {}

const fakeTags = ["javascript", "react"];

const Question: FC<QuestionProps> = (props) => {
  const { question } = useSelector(questionsSelector);

  return (
    <div className="Questions">
      <div className="Questions__tags">
        <Tag>{`#${String(question)}`}</Tag>
        {fakeTags.map((str) => (
          <Tag key={`tag-${str}`}>{str.toUpperCase()}</Tag>
        ))}
      </div>
      <Title center>Question {question}</Title>
      <Text center>My otvetochka</Text>
    </div>
  );
};

export default Question;
