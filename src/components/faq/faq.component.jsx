import React from "react";

import InfoBox from "../info-box/info-box.component";
import Question from "../faq-question/faq-question.components";
import Button from "../button/button.component";

import { FaqContainer, FaqInfoContainer, FaqQuestions } from "./faq.styles";

const questions = [
  { content: "What is Bookmark?" },
  { content: "How can I request a new browser?" },
  { content: "Is there a mobile app?" },
  { content: "What about other Chromium browsers?" },
];

const Faq = () => (
  <FaqContainer>
    <FaqInfoContainer>
      <InfoBox
        desc={{
          priority: "h2",
          title: "Frequently Asked Questions",
          content:
            "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
        }}
        alignment="center"
      />
    </FaqInfoContainer>
    <FaqQuestions>
      {questions.map(({ content }) => (
        <Question content={content} key={content} />
      ))}
    </FaqQuestions>
    <Button color="blue">More info</Button>
  </FaqContainer>
);

export default Faq;
