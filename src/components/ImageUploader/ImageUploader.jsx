// src/components/ImageUploader/ImageUploader.js
import React, { useState, useRef } from 'react';
import { Upload, Button, Row, Col, Card, Typography, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import 'antd/dist/reset.css'; // Ant Design's CSS
import './ImageUploader.css'; // Custom CSS for print styles

const { Dragger } = Upload;

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const printRef = useRef();

  const handleImageUpload = (info) => {
    const { fileList } = info;
    setImages(fileList.map((file) => file.originFileObj));
  };

  const handleDownloadPDF = () => {
    if (images.length === 0) {
      message.error('Please upload at least one image before generating the PDF.');
      return;
    }

    const doc = new jsPDF('p', 'mm', 'a4');
    let yOffset = 10;

    images.forEach((image, index) => {
      const img = new Image();
      img.src = URL.createObjectURL(image);
      img.onload = () => {
        const imgWidth = doc.internal.pageSize.getWidth() - 20;
        const imgHeight = (img.height * imgWidth) / img.width;
        doc.addImage(img, 'JPEG', 10, yOffset, imgWidth, imgHeight);
        yOffset += imgHeight + 10;

        if (index < images.length - 1) {
          doc.addPage();
          yOffset = 10;
        }

        if (index === images.length - 1) {
          doc.save('images.pdf');
        }
      };
    });
  };

  const props = {
    multiple: true,
    beforeUpload: () => false, // Prevent automatic upload
    onChange: handleImageUpload,
    fileList: images.map((img, index) => ({
      uid: index,
      name: img.name,
      status: 'done',
      originFileObj: img,
    })),
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Typography.Title level={3}>Upload Images</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
          </Dragger>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Typography.Title level={3}>Download PDF</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Button onClick={handleDownloadPDF} type="primary" block disabled={images.length === 0}>
            Generate PDF
          </Button>
        </Col>
      </Row>
      <Row justify="center" ref={printRef} className="print-container" gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card>
              <img
                src={URL.createObjectURL(image)}
                alt={`upload-${index}`}
                style={{ width: '100%' }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageUploader;
