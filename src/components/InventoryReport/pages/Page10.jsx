import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, Row, Typography } from "antd";

const { TextArea } = Input;

const Page10 = ({ form, setInitialValues, initialValues }) => {
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
              label="Statement that the GHG Report has been Prepared in Accordance with this Document"
              name="reportStatement"
              rules={[{ required: true, message: 'Please enter the statement' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Disclosure Describing Whether the GHG Inventory, Report or Statement has been Verified"
              name="verificationDisclosure"
              rules={[{ required: true, message: 'Please enter the disclosure' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="The GWP Values Used in the Calculation, as well as their Source"
              name="gwpValues"
              rules={[{ required: true, message: 'Please enter the GWP values and their source' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page10;
