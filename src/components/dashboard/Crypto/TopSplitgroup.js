import { Card } from "antd";
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
export const TopSplitgroup = () => {
  const data = [
    { name: "Page A", uv: 4000, Call_Count: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, Call_Count: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, Call_Count: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, Call_Count: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, Call_Count: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, Call_Count: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, Call_Count: 4300, amt: 2100 },
  ];
  return (
    <Card className="gx-card" title="Top 10 Split Group">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
        >
          <XAxis dataKey="Call_Count" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="Call_Count" fill="#003366" />
          {/* <Bar dataKey="uv" fill="#FE9E15" /> */}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
