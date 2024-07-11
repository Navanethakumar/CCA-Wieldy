import React from "react";
import Widget from "components/Widget/index";
import BubbleMap from "../CRM/BubbleMap";
import { Card, Col, Row } from "antd";
import MapDirections from "../../../routes/extensions/map/googlemap/directions/Components/MapDirections";
import AnimationsAlongLines from "../../../routes/extensions/map/ammap/animationsLines/Components/AnimationsAlongLines";

const BalanceHistory = () => {
  return (
    <Widget>
      <h2 className="h4 gx-mb-3">Service Level/Ring Time</h2>
      <Row>
        <Col lg={24} md={12} sm={12} xs={24}>
          <AnimationsAlongLines />
        </Col>
      </Row>
    </Widget>
  );
};

export default BalanceHistory;
