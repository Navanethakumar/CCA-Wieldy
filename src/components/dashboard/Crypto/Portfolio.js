import React from "react";
import Widget from "components/Widget/index";
import { Button, Divider, Card, Col, Row, Table } from "antd";
import Icon from '@ant-design/icons';

const Portfolio = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span className="gx-link">{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <span className="gx-link">Action 一 {record.name}</span>
          <Divider type="vertical" />
          <span className="gx-link">Delete</span>
          <Divider type="vertical" />
          <span className="gx-link ant-dropdown-link">
            More actions <Icon type="down" />
          </span>
        </span>
      ),
    }
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];
  return (
    <Widget>
      <h2 className="h4 gx-mb-3">Service Level/Ring Time</h2>
      <Row>
        <Col lg={24} md={12} sm={12} xs={24}>
          {/* <Card title="Simple Table"> */}
          <Table className="gx-table-responsive" columns={columns} dataSource={data} />
          {/* </Card> */}
        </Col>
      </Row>
    </Widget>
  );
};

export default Portfolio;
