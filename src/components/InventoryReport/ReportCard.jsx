import React from "react";
import { Card, Col, Row } from "antd";

const ReportCard = ({ children, loading }) => {
  return (
    <Row style={{ paddingBottom: 72 }}>
      <Col span={24}>
        <Card bodyStyle={{ minHeight: "515px" }} loading={loading}>
          {children}
        </Card>
      </Col>
    </Row>
  );
};

export default ReportCard;
