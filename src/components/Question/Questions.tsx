import "./Questions.sass";

import { type FC } from "react";

import { Title, Text, Tag } from "@/uikit";
import { Color } from "@/models";

interface QuestionProps {
  questionId: number;
}
const fakeTags = ["javascript", "react"];

const Question: FC<QuestionProps> = (props) => {
  return (
    <div className="Questions">
      <div className="Questions__tags">
        <Tag>{`#${String(props.questionId)}`}</Tag>
        {fakeTags.map((str) => (
          <Tag key={`tag-${str}`}>{str.toUpperCase()}</Tag>
        ))}
      </div>
      <Title center>Question {props.questionId}</Title>
      <Text center>My otvetochka</Text>
    </div>
  );
};

export default Question;
