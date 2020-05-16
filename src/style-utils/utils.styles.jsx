import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// MEDIA QUERIES

const sizes = {
  mobile: "375px",
  mobileL: "425px",
  tablet: "800px",
  laptop: "1024px",
  laptopL: "1440px",
};

export const device = {
  mobile: `screen and (max-width: ${sizes.mobile})`,
  mobileL: `screen and (max-width: ${sizes.mobileL})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
  laptop: `screen and (max-width: ${sizes.laptop})`,
  laptopL: `screen and (max-width: ${sizes.laptopL})`,
};

export default device;
