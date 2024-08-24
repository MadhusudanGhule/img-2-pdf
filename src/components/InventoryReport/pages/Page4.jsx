import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, InputNumber, Row, Typography } from "antd";

const { TextArea } = Input;

const Page4 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Removal and Exclusion
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
              label="Approach to Treat Biogenic CO2 Emissions and Removal in the GHG Inventory"
              name="biogenicCO2Approach"
              rules={[{ required: true, message: 'Please enter the approach' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Biogenic CO2 Emissions (tCO2e)"
              name="biogenicCO2Emissions"
              rules={[{ required: true, message: 'Please enter the biogenic CO2 emissions' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Carbon Removals (tCO2e)"
              name="carbonRemovals"
              rules={[{ required: true, message: 'Please enter the carbon removals' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Explanation of the Exclusion of Any Significant GHG Sources or Sinks"
              name="exclusionExplanation"
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

export default Page4;
