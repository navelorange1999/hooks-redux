import React from "react";
import { useColorContext } from "./utils";

const Text = (props) => {
  const { color } = useColorContext();
  return <div style={{ color: color }}>字体颜色为：{color}</div>;
};

export default Text;
