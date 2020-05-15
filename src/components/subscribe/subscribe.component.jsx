import React from "react";

import Button from "../button/button.component";

import {
  SubscribeContainer,
  Heading,
  Title,
  SubscriptionForm,
} from "./subscribe.styles";

const Subscribe = () => (
  <SubscribeContainer>
    <Heading>35,000+ already joined</Heading>
    <Title>Stay up to date with what we're doing</Title>
    <SubscriptionForm>
      <form action="#">
        <input type="email" placeholder="Enter your email address" />
        <Button submit={true} value={"Contact Us"} color="red" />
      </form>
    </SubscriptionForm>
  </SubscribeContainer>
);

export default Subscribe;
