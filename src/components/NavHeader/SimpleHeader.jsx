// src/components/SimpleHeader.js
import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const SimpleHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
      <Title level={2} style={{ margin: 0, padding: '20px 0' }}>
        Image to PDF Converter
      </Title>
    </Header>
  );
};

export default SimpleHeader;
