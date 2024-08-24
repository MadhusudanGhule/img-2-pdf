import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, Row, Typography } from "antd";

const { TextArea } = Input;

const Page7 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            GHG Report - page 7
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
              label="Reference to, or Description of, Quantification Approaches"
              name="quantificationApproaches"
              rules={[{ required: true, message: 'Please enter the description' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Explanation of Any Change to Quantification Approaches Previously Used"
              name="quantificationChanges"
              rules={[{ required: true, message: 'Please enter the explanation' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            
           
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page7;
