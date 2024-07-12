import { Card } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const TopSplitgroup = () => {
  const data = [
    { name: "5/1/2001", uv: 4000, Call_Count: 1100, amt: 1100 },
    { name: "5/2/2001", uv: 3000, Call_Count: 1000, amt: 1000 },
    { name: "5/3/2001", uv: 2000, Call_Count: 800, amt: 800 },
    { name: "5/4/2001", uv: 2780, Call_Count: 300, amt: 300 },
    { name: "5/5/2001", uv: 1890, Call_Count: 350, amt: 350 },
    { name: "5/6/2001", uv: 2390, Call_Count: 500, amt: 500 },
    { name: "5/7/2001", uv: 3490, Call_Count: 700, amt: 700 },
    { name: "5/8/2001", uv: 1890, Call_Count: 671, amt: 671 },
    { name: "5/9/2001", uv: 2390, Call_Count: 800, amt: 800 },
    { name: "5/10/2001", uv: 3490, Call_Count: 560, amt: 560 },
  ];
  return (
    // <Card className="gx-card" title="Top 10 Split Group">
    <ResponsiveContainer width="100%" height={300} width={800}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 10, bottom: 80, left: 20 }}
      >
        <XAxis dataKey="name" angle={-40} textAnchor="end" />
        <YAxis dataKey="amt" />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Legend verticalAlign="Top" />
        <Line
          dataKey="Call_Count"
          stroke="#038FDE"
          dot={{ stroke: "#FEA931", strokeWidth: 4 }}
        />
        {/* <Bar dataKey="uv" fill="#FE9E15" /> */}
      </LineChart>
    </ResponsiveContainer>
    // </Card>
  );
};

export default TopSplitgroup;
