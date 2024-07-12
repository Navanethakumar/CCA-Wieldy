import React from "react";
// import AmCharts from "@amcharts/amcharts3-react";
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
const datas = [
  { name: "Keiter, Malynne", Call_Count: 4000, price: 2400, amt: 2400 },
  { name: "Todd, Heather", Call_Count: 3000, price: 1398, amt: 2210 },
  { name: "Hanlon, Billi", Call_Count: 2000, price: 9800, amt: 2290 },
  { name: "Kiefer, Amanda", Call_Count: 2780, price: 3908, amt: 2000 },
  { name: "Morlock, Vema", Call_Count: 1890, price: 4800, amt: 2181 },
];

const ColumnWithRotatedSeries = () => {
  return (
    <div className="App">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={datas}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="Call_Count" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <defs>
            <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
              <stop offset="5%" stopColor="#43c48a" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <Bar
            dataKey="Call_Count"
            fill="url(#color08)"
            barSize={30}
            radius={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ColumnWithRotatedSeries;
