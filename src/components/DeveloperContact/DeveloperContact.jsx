// src/components/DeveloperContact/DeveloperContact.js
import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Content } = Layout;
const { Title, Paragraph, Link } = Typography;

const DeveloperContact = () => {
  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Row justify="center">
          <Col xs={24} sm={16} md={12} lg={8} xl={6}>
            <Title level={2}>Contact the Developer</Title>
            <Paragraph>
              If you have any questions, feedback, or need support, feel free to reach out to the developer.
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> <Link href="madhusudanghule1@gmail.com">madhusudanghule1@gmail.com</Link>
            </Paragraph>
            <Paragraph>
              <strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/madhusudan-ghule-544581230/" target="_blank">https://www.linkedin.com/in/madhusudan</Link>
            </Paragraph>
            <Paragraph>
              <strong>GitHub:</strong> <Link href="https://github.com/MadhusudanGhule" target="_blank">https://github.com/MadhusudanGhule</Link>
            </Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DeveloperContact;
