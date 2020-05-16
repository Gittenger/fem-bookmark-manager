import React from "react";

import InfoBox from "../info-box/info-box.component";
import Question from "../faq-question/faq-question.components";
import Button from "../button/button.component";

import { FaqContainer, FaqInfoContainer, FaqQuestions } from "./faq.styles";

const questions = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut non laborum culpa facilis rerum, repudiandae provident iure nostrum nulla maxime in odit sapiente.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae, amet laboriosam aut esse quisquam, quis pariatur repellendus, ad veritatis a.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Quasi animi deserunt similique. Lorem ipsum dolor sit.  Quidem iusto beatae? Odit dicta impedit molestiae veniam!",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error excepturi, possimus nam soluta consectetur amet eum obcaecati.",
  },
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
      {questions.map(({ question, answer }) => (
        <Question question={question} answer={answer} key={question} />
      ))}
    </FaqQuestions>
    <Button color="blue">More info</Button>
  </FaqContainer>
);

export default Faq;
