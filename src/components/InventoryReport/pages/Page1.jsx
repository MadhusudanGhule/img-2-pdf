import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, DatePicker, Row, Typography } from "antd";

const { TextArea } = Input;

const Page1 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            inventory Report
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
              label="Description of the Reporting Organization"
              name="description"
              rules={[
                { required: true, message: "Please enter the description" },
              ]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item
              label="Person or Entity Responsible for the Report"
              name="responsiblePerson"
              rules={[
                {
                  required: true,
                  message: "Please enter the responsible person or entity",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Reporting Period Covered"
              name="reportingPeriod"
              rules={[
                {
                  required: true,
                  message: "Please select the reporting period",
                },
              ]}
            >
              <DatePicker.RangePicker />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page1;
