import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, Row, Typography } from "antd";

const { TextArea } = Input;

const Page8 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            GHG Report - Part 8
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
              label="Reference to, or Documentation of, GHG Emission or Removal Factors Used"
              name="emissionFactors"
              rules={[{ required: true, message: 'Please enter the reference' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
             <Form.Item
              label="Description of the Impact of Uncertainties on the Accuracy of the GHG Emissions and Removals Data per Category"
              name="uncertaintyImpact"
              rules={[{ required: true, message: 'Please enter the description' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page8;
