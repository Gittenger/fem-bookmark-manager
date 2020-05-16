import React from "react";

import { ReactComponent as Arrow } from "../../assets/icon-arrow.svg";
import {
  QuestionContainer,
  QuestionBox,
  AnswerBox,
} from "./faq-question.styles";

const FaqQuestion = ({ question, answer }) => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <QuestionContainer onClick={handleClick}>
      <QuestionBox>
        <p>{question}</p>
        <Arrow />
      </QuestionBox>
      <AnswerBox>
        <p id="faq-answer">{answer}</p>
      </AnswerBox>
    </QuestionContainer>
  );
};
export default FaqQuestion;
