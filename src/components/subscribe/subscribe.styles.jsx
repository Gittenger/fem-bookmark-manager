import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const SubscribeContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  height: 20rem;
  width: 100%;
  background-color: ${({ theme: { colors } }) => `${colors.softBlue}`};
  color: ${({ theme: { colors } }) => `${colors.white}`};
`;

export const Heading = styled.div`
  font-size: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const SubscriptionForm = styled.div``;
