import React from "react";

import { useColorContext } from "./utils";

const Button = (props) => {
  const { updateColor } = useColorContext();
  return (
    <div>
      <button
        style={{ color: "red" }}
        onClick={() => {
          updateColor("red");
        }}
      >
        Red
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          updateColor("blue");
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default Button;
