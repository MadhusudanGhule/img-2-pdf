import React, { useRef } from "react";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Page11 = ({ initialValues, setInitialValues }) => {
  const formRef = useRef();

  const convertImagesToDataUrls = async (element) => {
    const images = element.getElementsByTagName("img");
    for (let img of images) {
      const dataUrl = await fetch(img.src)
        .then((response) => response.blob())
        .then(
          (blob) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            })
        );
      img.src = dataUrl;
    }
  };

  const handleDownload = async (filename = "GHG-inventory") => {
    try {
      const preHtml =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      const postHtml = "</body></html>";
      const element = document.getElementById("GHG");
      if (!element) {
        console.error("Element not found", element, "is");
        return;
      }
      await convertImagesToDataUrls(element);
      const html = preHtml + element.innerHTML + postHtml;
      const blob = new Blob(["\ufeff", html], { type: "application/msword" });
      const url =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(html);
      filename = filename ? filename + ".doc" : "document.doc";
      const downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
      }
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const PDGContaint = () => {
    return (
      <>
        <div id="GHG" style={{ fontSize: "12px" }}>
          <div
            style={{ justifyContent: "center", marginBottom: "20px" }}
            justify="center"
            align="middle"
          >
            <h3>GHG Emissions Inventory Report</h3>
          </div>
          <div>
            <h5 style={{ color: "green" }}>Organizational Boundaries</h5>
            <p style={{ fontSize: "12px" }}>
              Documentation of Organizational Boundaries:
              {initialValues && initialValues.organizationalBoundaries}
            </p>
            <p style={{ fontSize: "12px" }}>
              Documentation of Reporting Boundaries, Including Criteria
              Determined by the Organization to Define Significant Emissions:
              {initialValues && initialValues.reportingBoundaries}
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>Removal and Exclusion</h5>
            <p style={{ fontSize: "12px" }}>
              Approach to Treat Biogenic CO2 Emissions and Removal in the GHG
              Inventory: {initialValues && initialValues.biogenicCO2Approach}
            </p>
            <p style={{ fontSize: "12px" }}>
              Biogenic CO2 Emissions (tCO2e):
              {initialValues && initialValues.biogenicCO2Emissions}
            </p>
            <p style={{ fontSize: "12px" }}>
              Carbon Removals (tCO2e):
              {initialValues && initialValues.carbonRemovals}
            </p>
            <p style={{ fontSize: "12px" }}>
              Explanation of the Exclusion of Any Significant GHG Sources or
              Sinks: {initialValues && initialValues.exclusionExplanation}
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>All GHG Emissions</h5>
            <table
              border={"2px"}
              width={"100%"}
              style={{ marginBottom: "100px" }}
            >
              <thead style={{ fontSize: "12px" }}>
                <tr >
                  <th></th>
                  <th>CO2</th>
                  <th>CH4</th>
                  <th>N2O</th>
                  <th>NF3</th>
                  <th>SF6</th>
                  <th>Other GHG Groups (HFCs, PFCs, etc.)</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "12px" }}>
                <tr>
                  <td>Fuel Consumption on site</td>
                </tr>
                <tr>
                  <td>Fugitive Emissions</td>
                </tr>
                <tr>
                  <td>Process Emissions</td>
                </tr>
                <tr>
                  <td>Company Vehicles</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 style={{ color: "green" }}>Indirect GHG emissions</h3>
            <h4>
              Quantified Indirect GHG Emissions Separated by Category (tonnes of
              CO₂e)
            </h4>
            <table border="2" width="100%" style={{marginBottom: '10px'}}>
              <thead style={{ fontSize: "12px" }}>
                <tr>
                  <th style={{ width: "20%" }}>Scope</th>
                  <th style={{ width: "40%" }}>Category</th>
                  <th style={{ width: "40%" }}>CO₂e in Tonnes</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "12px" }}>
                {/* // Replace this section with dynamic data from your application  */}
                <tr>
                  <td>Scope 2</td>
                  <td>Purchased Electricity</td>
                  <td>1000.00</td>
                </tr>
                <tr>
                  <td>Scope 3</td>
                  <td>Business Travel</td>
                  <td>500.00</td>
                </tr>
                {/* //End of dynamic data section  */}
              </tbody>
            </table>
          </div>

          <div>
            <h5 style={{ color: "green" }}>Base Year Information</h5>
            <p style={{ fontSize: "12px" }}>
              Historical Base Year Selected:
              {initialValues && initialValues.historicalBaseYear}
            </p>
            <p style={{ fontSize: "12px" }}>
              Explanation of Any Change to the Base Year or Other Historical GHG
              Data: {initialValues && initialValues.baseYearChange}
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>GHG Report - page 7</h5>
            <p style={{ fontSize: "12px" }}>
              Reference to, or Description of, Quantification Approaches:
              {initialValues && initialValues.quantificationApproaches}
            </p>
            <p style={{ fontSize: "12px" }}>
              Explanation of Any Change to Quantification Approaches Previously
              Used: {initialValues && initialValues.quantificationChanges}
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>GHG Report - Part 8</h5>
            <p style={{ fontSize: "12px" }}>
              Reference to, or Documentation of, GHG Emission or Removal Factors
              Used: {initialValues && initialValues.emissionFactors}
            </p>
            <p style={{ fontSize: "12px" }}>
              Description of the Impact of Uncertainties on the Accuracy of the
              GHG Emissions and Removals Data per Category:
              {initialValues && initialValues.uncertaintyImpact}
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>Uncertainty Analysis</h5>
            <p style={{ fontSize: "12px" }}>
              Rate the Completeness of your dataset from 1-5. Lower is better:
            </p>
            <p style={{ fontSize: "12px" }}>
              Reliability: {initialValues && initialValues.reliability}
            </p>
            <p style={{ fontSize: "12px" }}>
              Completeness: {initialValues && initialValues.completeness}
            </p>
            <p style={{ fontSize: "12px" }}>
              Temporal Correlation:
              {initialValues && initialValues.temporalCorrelation}
            </p>
            <p style={{ fontSize: "12px" }}>
              Geographical Correlation:
              {initialValues && initialValues.geographicalCorrelation}
            </p>
            <p style={{ fontSize: "12px" }}>
              Further Technological Correlation:
              {initialValues && initialValues.furtherTechnologicalCorrelation}
            </p>
            <p style={{ fontSize: "12px" }}>
              <b>
                The Uncertainty of the data accounting for its pedigree is:
                {initialValues && initialValues.result}
              </b>
            </p>
          </div>
          <div>
            <h5 style={{ color: "green" }}>GHG Report - Part 8</h5>
            <p style={{ fontSize: "12px" }}>
              Statement that the GHG Report has been Prepared in Accordance with
              this Document: {initialValues && initialValues.reportStatement}
            </p>
            <p style={{ fontSize: "12px" }}>
              Disclosure Describing Whether the GHG Inventory, Report or
              Statement has been Verified:
              {initialValues && initialValues.verificationDisclosure}
            </p>
            <p style={{ fontSize: "12px" }}>
              The GWP value Used in the Calculation, as well as their Source:
              {initialValues && initialValues.gwpValues}
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <Row
          justify={"center"}
          align={"stretch"}
          style={{
            backgroundImage: `url(${''})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "598px",
            borderRadius: "6px",
          }}
        >
          <Col span={24}></Col>
          <Col span={10}>
            <Row align={"top"} gutter={[0, 25]}>
              <Col span={24}>
                <Space direction="vertical" size={[0, 30]}>
                  <Space direction="vertical">
                    <Typography.Text>GHG</Typography.Text>
                    <Typography.Text>test</Typography.Text>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Card bordered={false}>
              <Row gutter={[0, 25]}>
                <Col span={24}>
                  <Row align="" justify={"space-between"}>
                    <Col>
                      <Typography.Title level={2}>
                        Download GHG report
                      </Typography.Title>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  GHG stage journey concluded. Please edit or download.
                </Col>
                <Col span={12} style={{ padding: "5px" }}>
                  <Link to={"/reports/leed/create"}>
                    <Button type="primary" size="large" block>
                      Edit
                    </Button>
                  </Link>
                </Col>
                <Col span={12} style={{ padding: "5px" }}>
                  <Button size="large" block onClick={() => handleDownload()}>
                    Download
                    <DownOutlined />
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <PDGContaint />
      </Col>

      <iframe
        name="downloadFrame"
        style={{ display: "none" }}
        onLoad={() => {
          window.close();
        }}
      ></iframe>

      <form
        ref={formRef}
        action="/path-to-your-download-endpoint"
        method="GET"
        target="downloadFrame"
        style={{ display: "none" }}
      >
        <input type="hidden" name="reportType" value="GHG" />
      </form>
    </Row>
  );
};

export default Page11;
