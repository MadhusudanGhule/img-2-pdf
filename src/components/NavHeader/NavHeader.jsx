// src/components/NavHeader.js
import React from 'react';
import { Image, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import pdficon from '../../Imges/pdf.png'
const { Header } = Layout;

const NavHeader = () => {
  return (
    <Header style={{ background: '#001529' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
      <Menu.Item key="0">
          <Image src={pdficon} preview={false} width={30}/>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/">Upload</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/report">Report</Link>
        </Menu.Item>
        
      </Menu>
    </Header>
  );
};

export default NavHeader;
