import React from "react";

const Buttons = (prop) => {
  return (
    <div>
      <button style={{ fontWeight: prop.font }}>{prop.text}</button>
    </div>
  );
};
export default Buttons;
