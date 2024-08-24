import { Col, Row } from "antd";
import React from "react";

const PrimaryWrapper = ({ children }) => {
  return (
    <Row justify={"center"}>
      <Col style={{ width: '60%' }}>
        {children}
      </Col>
    </Row>
  );
};

export default PrimaryWrapper;

