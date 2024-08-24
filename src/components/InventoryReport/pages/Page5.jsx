import { Table, Form, Row, Col, Typography } from "antd";
import ReportCard from "../ReportCard";



const Page5 = ({ form, setInitialValues, initialValues }) => {

  return (
    <ReportCard>
      <Row justify={"center"} align={"middle"} gutter={[0, 160]}>
        <Col span={20}>
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            Indirect GHG emissions
          </Typography.Title>
          <Form
            form={form}
            initialValues={initialValues}
            layout="vertical"
            onValuesChange={(changedValues, allValues) => {
              setInitialValues((prev) => ({
                ...prev,
                allValues,
              }));
            }}
          >
            <Form.Item
              name="indirectGHGEmissions"
              rules={[
                {
                  required: true,
                  message: "Please enter values",
                },
              ]}
            >
              <Table
               
                pagination={false}
                bordered
                sticky={{ offsetHeader: 72 }}
                rowKey="id"
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ReportCard>
  );
};

export default Page5;
