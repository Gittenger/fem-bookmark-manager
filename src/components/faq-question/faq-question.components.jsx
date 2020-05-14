import React from "react";

import Arrow from "../../assets/icon-arrow.svg";
import { Question } from "./faq-question.styles";

const FaqQuestion = ({ content }) => (
  <Question>
    <p>{content}</p>
    <img src={Arrow} alt="" />
  </Question>
);

export default FaqQuestion;
