import React, { useEffect, useMemo, useRef } from "react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  Row,
  Skeleton,
  Typography,
} from "antd";

import {
  useCreateConstantMutation,
  useGetConstantsQuery,
} from "../redux/services/constants";
import Footer from "./Footer";
import TextEditor from "./TextEditor";
import PrimaryWrapper from "./PrimaryWrapper";
// import TextEditor from "./TextEditor";
const res = [
  {
    label: "About Company - Page",
    heading: "About Company",
    description: "Lorem Ipsum",
    page: "3",
  },
  {
    label: "Governance - Page 1",
    heading: "Governance",
    description: "Lorem Ipsum {{company_name}}",
    page: "4",
  },
  {
    label: "Governance - Page 2",
    heading: "Board-level Responsibilities:",
    description: "Lorem Ipsum {{company_name}}",
    page: "5",
  },
  {
    label: "Governance - Page 3",
    heading: "",
    description: "Lorem Ipsum {{company_name}}",
    page: "6",
  },
  {
    label: "Governance - Page 4",
    heading: "Management-level Responsibilities:",
    description: "Lorem Ipsum {{company_name}}",
    page: "7",
  },
  {
    label: "Governance - Page 5",
    heading: "",
    description: "Lorem Ipsum",
    page: "8",
  },

  {
    label: "Strategy - Page 1",
    heading: "Strategy",
    description: "Lorem Ipsum {{company_name}}",
    page: "9",
  },
  {
    label: "Strategy - Page 2",
    heading: "Climate-related Risks",
    description: "Lorem Ipsum {{company_name}}",
    page: "10",
  },
  {
    label: "Strategy - Page 3",
    heading: "",
    description: "Lorem Ipsum {{company_name}}",
    page: "11",
  },
  {
    label: "Strategy - Page 4",
    heading: "Climate-related Opportunities",
    description: "Lorem Ipsum {{company_name}}",
    page: "12",
  },
  {
    label: "Strategy - Page 5",
    heading: "",
    description: "Lorem Ipsum {{company_name}}",
    page: "13",
  },

  {
    label: "Risk Management - Page 1",
    heading: "Risk Management",
    description: "Lorem Ipsum {{company_name}}",
    page: "14",
  },
  {
    label: "Risk Management - Page 2",
    heading: "",
    description: "Lorem Ipsum {{company_name}}",
    page: "15",
  },
  {
    label: "Risk Management - Page 3",
    heading: "",
    description: "Lorem Ipsum {{company_name}}",
    page: "16",
  },

  {
    label: "Metrics & TArgetsRisk Management - Page 1",
    heading: "Metrics & TArgets",
    description: "Lorem Ipsum {{company_name}}",
    page: "17",
  },
];

const PromptAndReports = () => {
  const [form] = Form.useForm();
  const editorRef = useRef();

  const { data, isLoading, isFetching } = useGetConstantsQuery({
    key: "TCFC_TEMPLATE_CONFIG",
  });
  const [updateMetadata, { isLoading: updatingMetadata }] =
    useCreateConstantMutation();

  const pagesArray = useMemo(() => {
    let parsedData;

    try {
      parsedData = JSON.parse(data?.[0]?.value || "[]");
      console.log(parsedData);
      return parsedData;
    } catch (error) {
      return res;
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({ pages: res });
    }
  }, [data, form, pagesArray]);

  const handleFinish = async (values) => {
    const pagesString = JSON?.stringify(values?.pages);
    await updateMetadata([{ key: "TCFC_TEMPLATE_CONFIG", value: pagesString }]);
  };

  return (
    <PrimaryWrapper>
      <Row justify="center" style={{ marginBottom: "50px" }}>
        <Col span={23}>
          <Typography.Title level={2}>
            Reports Page Content Form
          </Typography.Title>
        </Col>
        <Skeleton loading={isLoading || isFetching}>
          <Col span={23}>
            <Form
              name="dynamic_form_nest_item"
              form={form}
              style={{ width: "100%" }}
              autoComplete="off"
              layout="vertical"
              onFinish={handleFinish}
            >
              <Form.List name="pages">
                {(fields, { add, remove }) => (
                  <>
                    <Collapse
                      items={fields.map(({ key, name, ...restField }) => {
                        const label = pagesArray?.[name]?.label;
                        const initialValue = pagesArray?.[name]?.description;

                        return {
                          key: key,
                          label: label,
                          children: (
                            <Row justify="start">
                              <Col span={24}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "heading"]}
                                  label="Heading"
                                >
                                  <Input size="large" />
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  {...restField}
                                  name={[name, "description"]}
                                  label="Description"
                                >
                                  <TextEditor
                                    data={initialValue}
                                    onChange={(event, editor) => {
                                      const data = editor.getData();

                                      form.setFieldValue(
                                        ["pages", name, "description"],
                                        data
                                      );
                                    }}
                                  />
                                </Form.Item>
                              </Col>
                            </Row>
                          ),
                        };
                      })}
                      accordion
                      defaultActiveKey={["0"]}
                    ></Collapse>
                  </>
                )}
              </Form.List>
              <Form.Item>
                <Footer>
                  <Row>
                    <Col span={12}></Col>
                    <Col>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={updatingMetadata}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Footer>
              </Form.Item>
            </Form>
          </Col>
        </Skeleton>
      </Row>
    </PrimaryWrapper>
  );
};

export default PromptAndReports;
