import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row } from "antd";

import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { increamentData, lineData } from "../../Metrics/data";
import ChartCard from "components/dashboard/Crypto/ChartCard";
import Widget from "../../../../components/Widget";
import Auxiliary from "util/Auxiliary";
import Portfolio from "components/dashboard/Crypto/Portfolio";
import BalanceHistory from "components/dashboard/Crypto/BalanceHistory";
import SendMoney from "components/dashboard/Crypto/SendMoney";
import RewardCard from "components/dashboard/Crypto/RewardCard";
import CurrencyCalculator from "components/dashboard/Crypto/CurrencyCalculator";
import CryptoNews from "components/dashboard/Crypto/CryptoNews";
import DownloadMobileApps from "components/dashboard/Crypto/DownloadMobileApps";
import OrderHistory from "components/dashboard/Crypto/OrderHistory";
import { TopAnomaly } from "./TopAnomaly";
import { BottomAnomaly } from "./BottomAnomaly";
import { TopSplitgroup } from "../../../../components/dashboard/Crypto/TopSplitgroup";
import { Disposition } from "../../../../components/dashboard/Crypto/Disposition";
import Heatmap from "./heatmap";
import Barchart from "./Barchart";
import IconWithTextCard from "../../../../components/Metrics/IconWithTextCard";
import EcommerceStatus from "../../../../components/Metrics/EcommerceStatus";
import GrowthCard from "../../../../components/Metrics/GrowthCard";
// import TopSplitgroup from "../../../../components/dashboard/Crypto/TopSplitgroup";
import { useSelector } from "react-redux";

const Crypto = () => {
  const userval = useSelector((state) => state.Userval);
  console.log(userval, "uv");
  const data = [
    { name: "Page A", pv: 240 },
    { name: "B", pv: 2210 },
    { name: "C", pv: 2300 },
    { name: "Page D", pv: 2000 },
    { name: "Zero", pv: 0 },
    { name: "Hi", pv: 123 },
    { name: "Bye", pv: 2091 },
  ];
  const lineData2 = [
    { name: "Page A", traffic: 200 },
    { name: "Page B", traffic: 1100 },
    { name: "Page C", traffic: 800 },
    { name: "Page D", traffic: 1700 },
    { name: "Page D", traffic: 600 },
    { name: "Page D", traffic: 1800 },
    { name: "Page D", traffic: 600 },
  ];
  const datas = [
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="10445"
            title="23"
            icon="bitcoin"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#FE9E15"
                        stopOpacity={0.9}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#4D95F3"
                    fill="url(#color3)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="up"
            desc="Calls"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="90.25%"
            title="07"
            icon="etherium"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#06BB8A"
                        stopOpacity={0.9}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    type="monotone"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#4D95F3"
                    fill="url(#color4)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="up"
            desc="FCR"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="32.95%"
            title="08"
            icon="ripple"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#FEEADA"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#FEEADA"
                    fill="url(#color5)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="down"
            desc="Transfer/Cold"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="33.9%"
            title="47"
            icon="litcoin"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <LineChart
                  data={lineData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <Tooltip />
                  <Line
                    dataKey="price"
                    stroke="#038FDE"
                    dot={{ stroke: "#FEA931", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            }
            styleName="down"
            desc="Satisfaction Score"
          />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          {/* <Portfolio /> */}
          <Row>
            <Col span={12}>
              <ChartCard
                prize="72%"
                title="09"
                icon="ripple"
                children={
                  <ResponsiveContainer width="100%" height={75}>
                    <AreaChart
                      data={increamentData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Tooltip />
                      <defs>
                        <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                          <stop
                            offset="5%"
                            stopColor="#FF55AA"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="#E81D27"
                            stopOpacity={0.9}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="price"
                        type="monotone"
                        strokeWidth={0}
                        stackId="2"
                        stroke="#4D95F3"
                        fill="url(#color1)"
                        fillOpacity={1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                }
                styleName="up"
                desc="Service Level"
              />
            </Col>
            <Col span={12}>
              <ChartCard
                prize="90.25%"
                title="07"
                icon="litcoin"
                children={
                  <ResponsiveContainer width="100%" height={75}>
                    <AreaChart
                      data={increamentData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Tooltip />
                      <defs>
                        <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                          <stop
                            offset="5%"
                            stopColor="#61B1E4"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="#867AE5"
                            stopOpacity={0.9}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="price"
                        type="monotone"
                        strokeWidth={0}
                        stackId="2"
                        stroke="#006400"
                        fill="url(#color2)"
                        fillOpacity={1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                }
                styleName="up"
                desc="Queue Time"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card style={{ height: "300px" }} className="gx-card">
                <h2 className="h4 gx-mb-3">Key Call Topics</h2>
                {userval === "JM" ? <Barchart /> : <Heatmap />}

                {/* <Heatmap /> */}
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <BalanceHistory />
        </Col>
        {userval === "JM" ? (
          <></>
        ) : (
          <>
            {" "}
            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="gx-col-full">
              <EcommerceStatus
                color="orange"
                icon="orders"
                title="501"
                colorTitle="geekblue"
                subTitle="Connected Non ACD Call"
                colorSubTitle="geekblue"
              />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <EcommerceStatus
                color="geekblue"
                icon="revenue-new"
                title="301.9"
                colorTitle="primary"
                subTitle="Abandoned Call"
                colorSubTitle="grey"
              />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <EcommerceStatus
                icon="visits"
                title="201.1"
                colorTitle="primary"
                subTitle="Forced Disconnect Call"
                colorSubTitle="grey"
              />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <EcommerceStatus
                color="geekblue"
                icon="revenue-new"
                title="165.8"
                colorTitle="primary"
                subTitle="Interflowed Call"
                colorSubTitle="grey"
              />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <EcommerceStatus
                color="orange"
                icon="orders"
                title="139.9"
                colorTitle="geekblue"
                subTitle="Orders"
                colorSubTitle="geekblue"
              />
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              {/* <ChartCard
            title="44"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <LineChart
                  data={datas}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <Tooltip />
                  <Line
                    dataKey="uv"
                    stroke="#038FDE"
                    dot={{ stroke: "#FEA931", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            }
            styleName="up"
            desc="Traffic raise from past year"
          /> */}
              <GrowthCard
                bgColor="white"
                // title="Top 10 Spli Group"
                children={
                  <ResponsiveContainer
                    width="100%"
                    height={160}
                    style={{ cursor: "pointer" }}
                  >
                    <AreaChart
                      data={datas}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Tooltip />
                      <defs>
                        <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                          <stop
                            offset="5%"
                            stopColor="#06BC8D"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="#05C9D0"
                            stopOpacity={0.9}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        onClick={showModal}
                        strokeWidth={0}
                        dataKey="uv"
                        stackId="2"
                        stroke="#4D95F3"
                        fill="url(#color2)"
                        fillOpacity={1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                }
                styleName="up"
                desc="Top 10 Split Group"
              />
            </Col>
          </>
        )}

        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {" "}
          <CurrencyCalculator />
        </Col>
        {/* <Col xl={6} lg={12} md={12} sm={24} xs={24}>
          <RewardCard/>
        </Col> */}
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <SendMoney />
        </Col>

        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          {/* <CryptoNews /> */}
        </Col>
        {/* <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <DownloadMobileApps />
          <OrderHistory />
        </Col> */}
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <TopAnomaly />
        </Col>
        {/* <Col xl={6} lg={12} md={12} sm={24} xs={24}>
          <RewardCard/>
        </Col> */}
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <BottomAnomaly />
        </Col>
        {userval === "JM" ? (
          <>
            {" "}
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              {" "}
              <Card
                className="gx-card"
                style={{ marginBottom: "50px" }}
                title="Top 10 Split Group"
              >
                {" "}
                <TopSplitgroup />
              </Card>
            </Col>
            {/* <Col xl={6} lg={12} md={12} sm={24} xs={24}>
        <RewardCard/>
      </Col> */}
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Disposition />
            </Col>
          </>
        ) : (
          <></>
        )}
        <Modal
          title="Top 10 Split Group"
          open={isModalOpen}
          onOk={handleOk}
          footer={null}
          onCancel={handleCancel}
          width={1200}
          // style={{ height: "900px" }}
        >
          {/* <Top */}
          <TopSplitgroup />
        </Modal>
      </Row>
    </Auxiliary>
  );
};

export default Crypto;
