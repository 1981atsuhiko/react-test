import React from "react";

export const ColorMes = (props) => {
  const { color, Size, children } = props;
  const contentStyle = {
    color: color,
    fontSize: Size
  };
  return <p style={contentStyle}>{children}</p>;
};
