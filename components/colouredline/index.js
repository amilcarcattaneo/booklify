import React from "react";

const ColouredLine = ({ colour }) => (
  <hr
    style={{
      width: 130,
      borderTop: `1px solid ${colour}`,
    }}
  />
);

export default ColouredLine;
