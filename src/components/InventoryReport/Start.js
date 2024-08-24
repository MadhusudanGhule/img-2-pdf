import {
    Breadcrumb,
    Button,
    Card,
    Col,
    Row,
    Space,
    Steps,
    Typography,
  } from "antd";
  import React from "react";
  import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
  
  // import { reportsAssets } from "../../../assets/reports";
  // import PrimaryWrapper from "../../PrimaryWrapper";
  
  const Start = () => {
    const navigate = useNavigate();
    return (
      // <PrimaryWrapper>
        <Row gutter={[0, 20]}>
          <Col span={24} style={{width:'60%'}}>
            <Breadcrumb
              separator="<"
              items={[
                {
                  title: <Link to={"/report"}>{`< Reports`}</Link>,
                },
                {
                  title: "start",
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <Row
              justify={"center"}
              align={"stretch"}
              style={{
                // backgroundImage: `url(${reportsAssets.ppnBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "598px",
                borderRadius: "6px",
              }}
            >
              <Col span={24}></Col>
              <Col span={10}>
                <Row align={"top"} gutter={[0, 25]}>
                  <Col span={24}></Col>
                  <Col span={24}>
                    <Space direction="vertical" size={[0, 30]}>
                      <Space direction="vertical">
                        <Typography.Text> GHG</Typography.Text>
                        <Typography.Title level={2}>
                          {/* Procurement <br /> Policy Note{" "} */}
                        </Typography.Title>
                        <Typography.Text>
                          {/* Taking Account of Carbon Reduction <br /> Plans in the
                          procurement of major <br /> government contracts */}
                        </Typography.Text>
                      </Space>
                      {/* <NavLink to={`/reports/GHG/policy`}>
                        <Typography.Text
                          style={{
                            textDecoration: "underline",
                            textUnderlineOffset: "5px",
                            textDecorationColor: "#000",
                            alignContent: "center",
                          }}
                          // style={{ fontSize: "12px" }}
                        >
                          Read Carbon Reduction Plan Guidance{" "}
                          <Typography.Text strong>{`>`}</Typography.Text>
                        </Typography.Text>
                        <reportsAssets.rightArrow />
                      </NavLink> */}
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={9}>
                <Card bordered={false}>
                  <Row gutter={[0, 25]}>
                    <Col span={24}>
                      <Row align="" justify={"space-between"}>
                        <Col>
                          <Typography.Title level={2}>
                            Get started
                          </Typography.Title>
                        </Col>
                        <Typography.Text type="warning" level={2}>
                          {/* <reportsAssets.alert /> */}
                           Data Not Synced
                        </Typography.Text>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Steps
                        direction="vertical"
                        current={null}
                        progressDot
                        items={[
                          {
                            title: "Carbon Reduction Plan",
  
                            status:"finish",
                          },
                          {
                            title: "Declaration & Sign",
                            description: (
                              <Typography.Text style={{ fontSize: "10px" }}>
                                Generate Report
                              </Typography.Text>
                            ),
                            status: "finish",
                          },
                          {
                            title: "Ready to Download",
                            description: "Reporting Year",
                            status: "finish",
                          },
                        ]}
                      />
                    </Col>
                    <Col span={24}>
                      <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => {
                          navigate(`/report/start/edit`);
                        }}
                      >
                        Begin
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      // </PrimaryWrapper>
    );
  };
  
  export default Start;
  