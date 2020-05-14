import React from "react";

import { InfoBoxContainer } from "./info-box.styles";

const InfoBox = ({ desc, priority, alignment }) => (
  <InfoBoxContainer alignment={alignment}>
    {priority === "h1" ? (
      <h1>{desc.title}</h1>
    ) : priority === "h2" ? (
      <h2>{desc.title}</h2>
    ) : (
      <h3>{desc.title}</h3>
    )}

    <p>{desc.content}</p>
  </InfoBoxContainer>
);

export default InfoBox;
