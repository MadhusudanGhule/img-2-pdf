import React, { useState } from "react";
import ReportCard from "../ReportCard";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
} from "antd";

const { TextArea } = Input;

const Page9 = ({ form, setInitialValues, initialValues }) => {
  const [result, setResult] = useState(null);

  const pedigreeValues = {
    reliability: [0, 0.0006, 0.002, 0.008, 0.04],
    completeness: [0, 0.0001, 0.0006, 0.002, 0.008],
    temporalCorrelation: [0, 0.0002, 0.002, 0.008, 0.04],
    geographicalCorrelation: [0, 2.50005, 0.0001, 0.0006, 0.002],
    furtherTechnologicalCorrelation: [0, 0.0006, 0.008, 0.04, 0.12],
  };
  const onFinish = (values) => {
    const {
      reliability,
      completeness,
      temporalCorrelation,
      geographicalCorrelation,
      furtherTechnologicalCorrelation,
    } = values;

    const result =
      pedigreeValues.reliability[reliability - 1] +
      pedigreeValues.completeness[completeness - 1] +
      pedigreeValues.temporalCorrelation[temporalCorrelation - 1] +
      pedigreeValues.geographicalCorrelation[geographicalCorrelation - 1] +
      pedigreeValues.furtherTechnologicalCorrelation[
        furtherTechnologicalCorrelation - 1
      ];
    setResult(result.toFixed(4));
  };
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };

  const tailLayout = {
    wrapperCol: { offset: 19, span: 20 },
  };
  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={2}>Uncertainty Analysis</Typography.Title>
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
            onFinish={onFinish}
            // {...layout}
          >
            {/* <Form.Item
              label="Uncertainty Assessment Description and Results"
              name="uncertaintyAssessment"
              rules={[{ required: true, message: 'Please enter the assessment description' }]}
            >
              <TextArea rows={2} />
            </Form.Item> */}
            <Typography.Paragraph style={{ marginLeft: "0px" }}>
              {" "}
              Rate the Completeness of your dataset from 1-5. Lower is better{" "}
            </Typography.Paragraph>
            <Form.Item
              name="reliability"
              label="Reliability"
              rules={[
                { required: true, message: "Please input Reliability!" },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                  message: "Input must be a single digit between 1 and 5",
                },
              ]}
            >
              <InputNumber
                min={1}
                max={5}
                style={{ width: "100%" }}
                count={{
                  show: true,
                  max: 1,
                }}
              />
            </Form.Item>
            <Form.Item
              name="completeness"
              label="Completeness"
              rules={[
                { required: true, message: "Please input Completeness!" },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                  message: "Input must be a single digit between 1 and 5",
                },
              ]}
            >
              <InputNumber min={1} max={5} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="temporalCorrelation"
              label="Temporal Correlation"
              rules={[
                {
                  required: true,
                  message: "Please input Temporal Correlation!",
                },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                  message: "Input must be a single digit between 1 and 5",
                },
              ]}
            >
              <InputNumber min={1} max={5} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="geographicalCorrelation"
              label="Geographical Correlation"
              rules={[
                {
                  required: true,
                  message: "Please input Geographical Correlation!",
                },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                  message: "Input must be a single digit between 1 and 5",
                },
              ]}
            >
              <InputNumber min={1} max={5} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="furtherTechnologicalCorrelation"
              label="Further Technological Correlation"
              rules={[
                {
                  required: true,
                  message: "Please input Further Technological Correlation!",
                },
                {
                  type: "number",
                  min: 1,
                  max: 5,
                  message: "Input must be a single digit between 1 and 5",
                },
              ]}
            >
              <InputNumber min={1} max={5} style={{ width: "100%" }} />
            </Form.Item>
            {result && (
              <b style={{ textAlign: "center", text: "bold" }}>
                The Uncertainty of the data accounting for its pedigree is{" "}
                {result}
              </b>
            )}
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "20%", alignItems: "left" }}
              >
                Calculate
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page9;
