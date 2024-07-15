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
    <BarChart data={data} margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis dataKey="Talk Duration" />
      <Tooltip />
      <Legend verticalAlign="top" />
      <defs>
        <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
          <stop offset="5%" stopColor="#43c48a" stopOpacity={0.9} />
          <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3D7CAD" stopOpacity="1" />
          <stop offset="95%" stopColor="#4CA6B7" stopOpacity="1" />
        </linearGradient>
      </defs>
      <Bar
        dataKey="Talk Duration"
        fill="url(#color08)"
        barSize={30}
        radius={5}
      />
      <Bar
        dataKey="Queue Time"
        fill="url(#blueGradient)"
        barSize={30}
        radius={5}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default TinyBarChart;
