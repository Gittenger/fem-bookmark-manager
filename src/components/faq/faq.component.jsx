import React from "react";

import InfoBox from "../info-box/info-box.component";
import Question from "../faq-question/faq-question.components";

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
    <button>More info</button>
  </FaqContainer>
);

export default Faq;
