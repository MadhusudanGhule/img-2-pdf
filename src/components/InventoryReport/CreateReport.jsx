import React, { useEffect, useState, useContext } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Card,
  Form,
  Row,
  Flex,
  Typography,
  Select,
  Input,
} from "antd";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import dayjs from "dayjs";
// import { useInventoryReportMutation, useGrireportMutation } from "../../../redux/services/grireport";
import { toUpper } from "lodash";
// import Footer from "../../Footer";
import { DownOutlined } from "@ant-design/icons"; // Import DownOutlined from ant-design/icons
// import { useGetSessionQuery } from "../../../redux/services/auth";

const CreateActivity = () => {
  const { reportType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [yearForm] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [datevalidation, setdatevelidation] = useState("");

  // const [
  //   postTypeAndFY,
  //   { isLoading: posting, isSuccess: postSuccess, data: newReport },
  // ] = useInventoryReportMutation();
  // const { data: sessionData } = useGetSessionQuery();
  // useEffect(() => {
  //   if (postSuccess && newReport?.id) {
  //     navigate(`/reports/type/GHG/${newReport.id}`, {
  //       replace: true,
  //     });
  //   }
  // }, [postSuccess, navigate, newReport]);

  const onSubmit = async () => {
    try {
      if (location.pathname.includes("/report")) {
          navigate(`/report/start`)
      }
    } catch (error) {
      const errorMessage = error.errorFields[0].errors[0];
      setdatevelidation(errorMessage);
    }
  };

  const handleDateChange = (date) => {
    if (date) {
      setdatevelidation("");
    }
  };

  return (
    <Row gutter={[0, 40]}>
      <Col span={24}>
        <Breadcrumb
          separator="<"
          items={[
            {
              title: <Link to={"/report"}>{`< Reports`}</Link>,
            },
          ]}
        />
        <>
          <Typography.Title className="text-large">Reporting</Typography.Title>
          <Typography.Text>{toUpper(reportType)}</Typography.Text>
        </>
      </Col>

      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          setFormValues((prev) => ({ ...prev, ...values }));
        }}
      >
        <>
          {/* <YearAndQuarter
              handleDateChange={handleDateChange}
              datevalidation={datevalidation}
              formValues={formValues}
              form={yearForm}
            /> */}
        </>
        <div>
          <Row justify={"center"} align={"middle"} style={{ height: 48 }}>
            <Col style={{ width: 850 }}>
              <Flex justify="end" align="center">
                <Button
                  type="primary"
                  // loading={posting}
                  onClick={() => onSubmit()}
                >
                  Next
                </Button>
              </Flex>
            </Col>
            <Col style={{ width: 120 }}></Col>
          </Row>
        </div>
      </Form.Provider>
    </Row>
  );
};

export default CreateActivity;
