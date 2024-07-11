import React from "react";
import { Table } from "antd";
import Widget from "components/Widget/index";

const columns = [
  {
    title: "Agent Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span className="gx-link">{text}</span>,
  },
  {
    title: "Total Call",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Duration",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Service Level%",
    key: "action",
    dataIndex: "action",
  },
  {
    title: "FCR%",
    key: "fcr",
    dataIndex: "fcr",
  },
  {
    title: "Avg Sentiment Score",
    key: "Avg Sentiment Score",
    dataIndex: "Avg Sentiment Score",
  },
];

const data = [
  {
    key: "1",
    name: "Grojovin, Heather",
    age: 1493,
    address: "2d:3h:18m",
    action: "7.33",
    fcr: "85.65",
  },
  {
    key: "2",
    name: "Stevens, Clint	",
    age: 8982,
    address: "15d:17h:35m",
    action: "46.22",
    fcr: "92",
  },
];

const SendMoney = () => {
  return (
    <Widget
      title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          Bottom 10 agent by FCR
        </h2>
      }
    >
      <Table
        className="gx-table-responsive"
        columns={columns}
        dataSource={data}
      />
    </Widget>
  );
};

export default SendMoney;
