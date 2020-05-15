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
      <input type="email" placeholder="Enter your email address" />
      <Button color="red">Contact us</Button>
    </SubscriptionForm>
  </SubscribeContainer>
);

export default Subscribe;
