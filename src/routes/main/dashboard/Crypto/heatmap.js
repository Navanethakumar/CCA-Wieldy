import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";

const data = [
  { name: "schedule appointment", value: 100, fill: "#5c6bc0" },
  { name: "local branch hours", value: 80, fill: "#26a69a" },
  { name: "need new checkbook", value: 70, fill: "#ffb74d" },
  { name: "transfer money accounts", value: 60, fill: "#29b6f6" },
  { name: "check account balance", value: 50, fill: "#ef5350" },
  { name: "pay bill", value: 40, fill: "#ab47bc" },
  { name: "reset password", value: 30, fill: "#ec407a" },
  { name: "lost credit card", value: 20, fill: "#9ccc65" },
  { name: "lost debit card", value: 10, fill: "#ff4081" },
];

const CustomizedContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  payload,
}) => {
  if (!payload) return null; // Check if payload is defined

  const { fill, name } = payload;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: fill, stroke: "#fff", strokeWidth: 1 }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={12}
        fontWeight="normal"
      >
        {name}
      </text>
    </g>
  );
};

const SimpleTreemap = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <Treemap data={data} dataKey="value" stroke="#fff">
        <CustomizedContent />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default SimpleTreemap;
