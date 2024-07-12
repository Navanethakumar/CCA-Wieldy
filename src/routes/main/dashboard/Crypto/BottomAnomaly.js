import { Card } from "antd";
import React from "react";
import TinyBarChart from "../../../extensions/charts/recharts/bar/Components/TinyBarChart";

export const BottomAnomaly = () => {
  return (
    <Card className="gx-card" title="Top 5 Queue Time Anomaly">
      <TinyBarChart />
    </Card>
  );
};
