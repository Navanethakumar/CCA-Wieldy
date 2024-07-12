import React from "react";
import { Card } from "antd";
import ColumnWithRotatedSeries from "../../../extensions/charts/amchart/bar/Components/ColumnWithRotatedSeries";

export const TopAnomaly = () => {
  return (
    <Card
      className="gx-card"
      title="Top 5 Talk Duration Anomaly"
    >
      <ColumnWithRotatedSeries />
    </Card>
  );
};
