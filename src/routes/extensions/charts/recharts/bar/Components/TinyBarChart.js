import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import data from "./data";

const TinyBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis dataKey="Talk Duration" />
      <Tooltip />
      <Legend verticalAlign="top" />
      <defs>
        <linearGradient id="color09" x1="0" y1="1" x2="0" y2="0">
          <stop offset="5%" stopColor="#23DFDC" stopOpacity={0.9} />
          <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#5cb85c" stopOpacity="1" />
          <stop offset="95%" stopColor="#5bc0de" stopOpacity="1" />
        </linearGradient>
      </defs>
      <Bar dataKey="Talk Duration" fill="url(#color09)" barSize={30} radius={5} />
      <Bar dataKey="Queue Time" fill="url(#greenGradient)" barSize={30} radius={5} />
    </BarChart>
  </ResponsiveContainer>
);

export default TinyBarChart;
