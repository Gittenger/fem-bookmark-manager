import React from "react";

import { InfoBoxContainer } from "./info-box.styles";

const InfoBox = ({ desc, priority, alignment }) => (
  <InfoBoxContainer alignment={alignment}>
    {priority === "h1" ? <h1>{desc.title}</h1> : <h2>{desc.title}</h2>}

    <p>{desc.content}</p>
  </InfoBoxContainer>
);

export default InfoBox;
