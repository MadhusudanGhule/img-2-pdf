// src/components/Services/Services.jsx
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const servicesData = [
  {
    title: 'Image Upload',
    description: 'Easily upload multiple images for conversion to PDF.',
  },
  {
    title: 'PDF Generation',
    description: 'Generate PDFs from your uploaded images with a single click.',
  },
  {
    title: 'Mobile Compatibility',
    description: 'Our app works seamlessly on mobile devices.',
  },
  {
    title: 'Developer Contact',
    description: 'Get in touch with the developer for any queries or support.',
  },
];

const Services = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Title level={2}>Our Services</Title>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {servicesData.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable>
              <Title level={4}>{service.title}</Title>
              <Paragraph>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
