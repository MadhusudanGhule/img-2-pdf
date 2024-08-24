import React from "react";
import ReportCard from "../ReportCard";
import { Col, Form, Input, Row, Typography, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;
const Page6 = ({ form, setInitialValues, initialValues }) => {
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            Base Year Information
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
              label="Historical Base Year Selected"
              name="historicalBaseYear"
              rules={[
                {
                  required: true,
                  message: "Please select the historical base year",
                },
              ]}
            >
              <Input placeholder="Enter historical base year"/>
              
            </Form.Item>

            {/* <Form.Item
              label="Base-Year GHG Inventory"
              name="baseYearInventoryReport"
              rules={[
                {
                  required: true,
                  message: "Please select the base-year GHG inventory",
                },
              ]}
            >
              <Select placeholder="Select base-year GHG inventory">
                <Option value="Inventory1">Inventory 1</Option>
                <Option value="Inventory2">Inventory 2</Option>
                <Option value="Inventory3">Inventory 3</Option>
              </Select>
            </Form.Item> */}

            <Form.Item
              label="Explanation of Any Change to the Base Year or Other Historical GHG Data"
              name="baseYearChange"
            >
              <TextArea rows={4} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page6;
