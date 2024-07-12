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
      <YAxis dataKey="amt" />
      <Tooltip />
      <Legend verticalAlign="top" />
      <defs>
        <linearGradient id="color09" x1="0" y1="1" x2="0" y2="0">
          <stop offset="5%" stopColor="#23DFDC" stopOpacity={0.9} />
          <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
        </linearGradient>
      </defs>
      <Bar dataKey="Call_Count" fill="url(#color09)" barSize={30} radius={5} />
    </BarChart>
  </ResponsiveContainer>
);

export default TinyBarChart;
