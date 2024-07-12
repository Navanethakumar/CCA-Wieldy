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
export const TopSplitgroup = () => {
  const data = [
    { name: "BSD_OH_DATACNTEX", uv: 4000, Call_Count: 1100, amt: 1100 },
    { name: "BSD_TN_WINBACK", uv: 3000, Call_Count: 1000, amt: 1000 },
    { name: "BSD_TN_ACCOACH_1", uv: 2000, Call_Count: 800, amt: 800 },
    { name: "BSD_OH_GENCARE", uv: 2780, Call_Count: 300, amt: 300 },
    { name: "BSD_INQ_ORDER", uv: 1890, Call_Count: 350, amt: 350 },
    { name: "BSD_WHS_LONDGHAUL", uv: 2390, Call_Count: 500, amt: 500 },
    { name: "SB_ENS_IB", uv: 3490, Call_Count: 700, amt: 700 },
    { name: "BSD_OH_INQUIRY", uv: 1890, Call_Count: 671, amt: 671 },
    { name: "BSD_OH_QCC", uv: 2390, Call_Count: 800, amt: 800 },
    { name: "BSD_INQ_BILL", uv: 3490, Call_Count: 560, amt: 560 },
  ];
  return (
    <Card className="gx-card" title="Top 10 Split Group">
      <ResponsiveContainer width="100%" height={300}>
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
    </Card>
  );
};
