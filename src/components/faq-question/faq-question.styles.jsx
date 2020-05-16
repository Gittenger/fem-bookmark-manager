import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobile } = device;

export const QuestionContainer = styled.div`
  width: 100%;
  border-bottom: lightgrey 1px solid;
  cursor: pointer;
  overflow: hidden;

  &:first-child {
    border-top: lightgrey 1px solid;
  }

  #faq-answer {
    ${FlexCenter}
    align-items: flex-start;
    width: 95%;
    max-height: 0;
    transition: max-height 0.3s;
  }

  svg {
    transform: rotate(0deg);
  }

  svg,
  svg > path {
    transition: all 0.3s;
  }

  &.active {
    #faq-answer {
      max-height: 400px;
    }

    svg,
    svg > path {
      transition: all 0.3s;
    }

    svg > path {
      stroke: ${({ theme: { colors } }) => colors.softRed};
    }

    svg {
      transform: rotate(180deg);
    }
  }
`;

export const QuestionBox = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;

  & > p:first-child {
    color: ${({ theme: { colors } }) => colors.darkBlue};
    transition: all 0.3s;
  }

  &:hover > p:first-child {
    color: ${({ theme: { colors } }) => colors.softRed};
  }

  @media ${mobile} {
    &:hover > p:first-child {
      color: unset;
    }
  }
`;

export const AnswerBox = styled.div`
  ${FlexCenter}
  justify-content: flex-start;
  width: 100%;
`;
