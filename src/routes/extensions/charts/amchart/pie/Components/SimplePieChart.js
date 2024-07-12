import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const SimplePieChart = () => {
  const config = {
    type: "pie",
    theme: "light",
    dataProvider: [
      {
        country: "CONNECTED_NON ACD CALL",
        litres: 501.9,
      },
      {
        country: "ABANDONED CALL",
        litres: 301.9,
      },
      {
        country: "FORCED DISCONNECT CALL",
        litres: 201.1,
      },
      {
        country: "INTERFLOWED CALLS",
        litres: 165.8,
      },
      {
        country: "OTHERS",
        litres: 139.9,
      },
    ],
    valueField: "litres",
    titleField: "country",
    balloon: {
      fixedPosition: true,
    },
    export: {
      enabled: true,
    },
  };

  return (
    <div className="App">
      <AmCharts.React
        style={{ width: "100%", height: "300px" }}
        options={config}
      />
    </div>
  );
};

export default SimplePieChart;
