import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, Row, Typography } from "antd";

const { TextArea } = Input;

const Page2 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
       
        <Col span={20}>
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
        Organizational Boundaries
          </Typography.Title>
          <Form
            form={form}
            initialValues={initialValues}
            layout="vertical"
            onValuesChange={(changedValues, allValues) => {
              setInitialValues((prev) => ({
                ...prev,
                ...allValues
              }));
            }}
          >
            <Form.Item
              label="Documentation of Organizational Boundaries"
              name="organizationalBoundaries"
              rules={[{ required: true, message: 'Please enter the documentation of organizational boundaries' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Documentation of Reporting Boundaries, Including Criteria Determined by the Organization to Define Significant Emissions"
              name="reportingBoundaries"
              rules={[{ required: true, message: 'Please enter the documentation of reporting boundaries' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page2;
