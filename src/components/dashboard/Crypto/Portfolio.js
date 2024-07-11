import React from "react";
import Widget from "components/Widget/index";
import { Button, Divider, Card, Col, Row, Table } from "antd";
import Icon from "@ant-design/icons";

const Portfolio = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="gx-link">{text}</span>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Within 10 Seconds",
      age: 5049,
      address: "7d:21h:8m",
      action: "48.33",
    },
    {
      key: "2",
      name: "Within 11 to 20 Seconds",
      age: 544,
      address: "1d:0h:50m",
      action: "5.21",
    },
    {
      key: "3",
      name: "Within 21 to 40 Seconds",
      age: 919,
      address: "1d:15h:25m",
      action: "8.8",
    },
    ,
    {
      key: "3",
      name: "More Than 40 Seconds",
      age: 3933,
      address: "7d:7h:30m",
      action: ".33",
    },
  ];
  return (
    <Widget>
      <h2 className="h4 gx-mb-3">Service Level/Ring Time</h2>
      <Row>
        <Col lg={24} md={12} sm={12} xs={24}>
          {/* <Card title="Simple Table"> */}
          <Table
            className="gx-table-responsive"
            columns={columns}
            dataSource={data}
          />
          {/* </Card> */}
        </Col>
      </Row>
    </Widget>
  );
};

export default Portfolio;
