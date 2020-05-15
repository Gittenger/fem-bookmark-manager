import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const SubscribeContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme: { colors } }) => `${colors.softBlue}`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
  padding: 3rem;
`;

export const Heading = styled.div`
  font-size: 1.3rem;
  margin: 3rem 0;
  text-transform: uppercase;
  letter-spacing: 3.5px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  width: 30%;
  text-align: center;
  margin: 0 0 3rem;
`;

export const SubscriptionForm = styled.div`
  ${FlexCenter}
  width: 50%;
  margin-bottom: 2rem;

  form {
    ${FlexCenter}
    width: 100%;
  }

  input:first-child {
    width: 40%;
    padding: 1rem;
    margin-right: 1.5rem;
  }
`;
