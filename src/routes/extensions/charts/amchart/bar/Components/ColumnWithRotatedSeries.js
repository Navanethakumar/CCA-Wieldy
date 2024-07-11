import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const ColumnWithRotatedSeries = () => {
  const config = {
    type: "serial",
    theme: "light",
    marginRight: 70,
    dataProvider: [
      {
        country: "USA",
        visits: 3025,
        color: "#FF0F00",
      },
      {
        country: "China",
        visits: 1882,
        color: "#FF6600",
      },
      {
        country: "Japan",
        visits: 1809,
        color: "#FF9E01",
      },
      {
        country: "Germany",
        visits: 1322,
        color: "#FCD202",
      },
      {
        country: "UK",
        visits: 1122,
        color: "#F8FF01",
      },
      {
        country: "France",
        visits: 1114,
        color: "#B0DE09",
      },
      {
        country: "India",
        visits: 984,
        color: "#04D215",
      },
      {
        country: "Spain",
        visits: 711,
        color: "#0D8ECF",
      },
      {
        country: "Netherlands",
        visits: 665,
        color: "#0D52D1",
      },
      {
        country: "Russia",
        visits: 580,
        color: "#2A0CD0",
      },
      {
        country: "South Korea",
        visits: 443,
        color: "#8A0CCF",
      },
      {
        country: "Canada",
        visits: 441,
        color: "#CD0D74",
      },
    ],
    valueAxes: [
      {
        axisAlpha: 0,
        position: "left",
        title: "",
      },
    ],
    startDuration: 1,
    graphs: [
      {
        balloonText: "<b>[[category]]: [[value]]</b>",
        fillColorsField: "color",
        fillAlphas: 0.9,
        lineAlpha: 0.2,
        type: "column",
        valueField: "visits",
      },
    ],
    chartCursor: {
      categoryBalloonEnabled: false,
      cursorAlpha: 0,
      zoomable: false,
    },
    categoryField: "country",
    categoryAxis: {
      gridPosition: "start",
      labelRotation: 45,
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

export default ColumnWithRotatedSeries;
