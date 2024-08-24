import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Affix, Button, Card, Col, message, Row, Space, Steps, Typography } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import Footer from '../Footer/Footer'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from "./pages/Page11";
const ReportSteps = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [current, setCurrent] = useState(0);
  const [assignModel, setAssignModel] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const pages = [
    <Page1 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page2 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page3 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page4 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page5 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page6 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page7 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page8 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page9 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page10 setInitialValues={setInitialValues} initialValues={initialValues} />,
    <Page11
      setInitialValues={setInitialValues}
      initialValues={initialValues}
    />,
  ]?.filter(Boolean);

  const handleSaveNext = useCallback(async () => {
    const { ...body } = initialValues;
    let payload = new FormData();
    payload.append(body, JSON.stringify(body)); // Assuming `body` is an object
    payload.append(currentStep);
    const updatedValues = {
      ...initialValues,
      lastStepIndex: +currentStep,
    };

   
    if (+current < +pages?.length - 1) {
      setCurrent((prev) => +prev + 1);
    }
    if (+current < +pages?.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (+current < +pages?.length - 1 && +currentStep >= 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    } else {
      message.success(
        "is Complete"
      );
      window.history.back();
    }
  }, [current, initialValues, pages]);
  const handleSkip = useCallback(() => {
    if (+current < +pages?.length - 1) {
      setCurrent((prev) => +prev + 1);
    }
  }, [current, pages]);

  return (
    // <PrimaryWrapper>
    <div>
      <Row justify={"center"} gutter={[0, 40]}>
        <Col span={24} style={{ width: '60%' }}>
          <Affix offsetTop={72}>
            <Card
              bodyStyle={{
                padding: "0px",
                marginTop: "-10px",
                height: 44,
                borderRadius: "0px 0px 6px 6px",
              }}
              bordered={false}
            >
              <Row justify={"space-between"} align={"middle"}>
                <Space size={"middle"} align="center">
                  {/* <reportsAssets.NavHomeIcon /> */}
                  <Typography.Title level={5} style={{ fontWeight: 400 }}>
                    Your Brand Details
                  </Typography.Title>
                </Space>
                <Steps
                  style={{
                    marginTop: 8,
                  }}
                  progressDot
                  onChange={(value) => setCurrent(value)}
                  type="inline"
                  current={current}
                  // status={item.status}
                  items={pages?.map((item) => ({ title: "" })) || 0}
                />
              </Row>
            </Card>
          </Affix>
        </Col>
        <Col span={24}>
          {pages[current]}

          <Footer>
          <Row justify={"center"} align={"middle"} style={{ height: 48 }}>
            <Col span={17}>
              <Row justify={"space-between"}>
                <Space size={[20, 0]}>
                  <Button
                    onClick={() =>
                      !(+current <= 0) && setCurrent((prev) => +prev - 1)
                    }
                  >
                    Previous
                  </Button>
                  <Space>
                    <Button
                      icon={<HistoryOutlined />}
                      onClick={() => setOpen(true)}
                    ></Button>
                    <Button onClick={() => setAssignModel(true)}>
                      Assign
                    </Button>
                  </Space>
                </Space>
                <Space>
                  <Button onClick={handleSkip}>Skip For Now</Button>
                  <Button
                    type="primary"
                    // loading={generating}
                    onClick={handleSaveNext}
                  >
                    Save & Next
                  </Button>
                </Space>
              </Row>
            </Col>
            <Col span={1}></Col>
          </Row>
          </Footer>
        </Col>
      </Row>
      
    </div>
    // </PrimaryWrapper>
  );
};

export default ReportSteps;