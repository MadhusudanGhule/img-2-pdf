import React, { useEffect } from "react";
import ReportCard from "../ReportCard";
import { Col, Row, Table, Typography } from "antd";

const Page3 = ({ form, setInitialValues, initialValues }) => {
  
  

  
  
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={24}>
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            xyz
          </Typography.Title>
          <Table
            pagination={false}
            bordered
          />
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page3;
