import React, { useState } from "react";
import { Card, Col, Radio, Row } from "antd";

import Widget from "components/Widget/index";
import {
  allNews,
  bitCoinNews,
  lightCoinNews,
  rippleNews,
} from "../../../routes/main/dashboard/Crypto/data";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Select } from "antd";
// const newsData = [allNews, bitCoinNews, lightCoinNews, rippleNews];
const Option = Select.Option;
const CryptoNews = () => {
  const data = [
    { name: "", balance: 200 },
    { name: "JAN", balance: 400 },
    { name: "FEB", balance: 150 },
    { name: "MAR", balance: 400 },
    { name: "APR", balance: 1000 },
    { name: "MAY", balance: 400 },
    { name: "JUN", balance: 1200 },
    { name: "JUL", balance: 1000 },
    { name: "AUG", balance: 800 },
    { name: "SEP", balance: 750 },
    { name: "OCT", balance: 1500 },
    { name: "NOV", balance: 1000 },
    { name: "DEC", balance: 1500 },
    { name: "", balance: 500 },
  ];

  return (
    <Widget>
      <div className="ant-row-flex gx-justify-content-between gx-mb-3 gx-dash-search">
        <h2 className="h4 gx-mb-3 gx-mb-sm-1 gx-mr-2">
          Call Volume Prediction
        </h2>
        {/* <div className="gx-mx-sm-2">
          <Radio.Group
            className="gx-radio-group-link gx-radio-group-link-news"
            defaultValue={0}
            onChange={handleChange}
          >
            <Radio.Button value={0} className="gx-mb-1">
              All
            </Radio.Button>
            <Radio.Button value={1} className="gx-mb-1">
              Bitcoin
            </Radio.Button>
            <Radio.Button value={2} className="gx-mb-1">
              Ripple
            </Radio.Button>
            <Radio.Button value={3} className="gx-mb-1">
              Litecoin
            </Radio.Button>
          </Radio.Group>
        </div>
        <span className="gx-ml-2 gx-search-icon">
          <i className="icon icon-search-new gx-text-primary gx-fs-xxl gx-pointer" />
        </span> */}
        {/* <Row>
          <Col span={24}> */}
        {/* <Card className="gx-card" title="Smoothed Line Chart"> */}
        {/* <div className="gx-ml-auto">
          <Select
            className="gx-mb-2 gx-select-sm"
            defaultValue="10"
          // onChange={handleChange}
          >
            <Option value="10">Last 10 days</Option>
            <Option value="20">Last 20 days</Option>
            <Option value="30">Last 30 days</Option>
          </Select>
        </div> */}
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip />
            <XAxis dataKey="name" />
            <defs>
              <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38AAE5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F5FCFD" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Area
              dataKey="balance"
              strokeWidth={2}
              stackId="2"
              stroke="#10316B"
              fill="url(#color15)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
        {/* </Card> */}
        {/* </Col>
        </Row> */}
        {/* <SmoothedLineChart /> */}
      </div>

      {/* {loader ? (
        <CircularProgress className="gx-loader-400" />
      ) : (
        news.map((data, index) => <CryptoNewsItem key={index} data={data} />)
      )} */}
    </Widget>
  );
};

export default CryptoNews;
