// src/components/SocialFooter.js
import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import './index.css'
const { Footer } = Layout;
const { Text } = Typography;

const SocialFooter = () => {
  return (
    <div className="social-footer">
      <Footer className="social-footer">
      <Row justify="center" gutter={[16, 16]} style={{ textAlign: "center" }}>
        <Col>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
        <Col>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
      </Row>
      <Text style={{color:'white'}}>©2024 Image to PDF Converter. All rights reserved.</Text>
    </Footer>
    </div>
  );
};

export default SocialFooter;
