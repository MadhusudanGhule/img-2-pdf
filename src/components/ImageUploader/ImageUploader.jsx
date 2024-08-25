import React, { useState, useRef } from "react";
import {
  Upload,
  Button,
  Row,
  Col,
  Card,
  Typography,
  Input,
  Modal,
  message,
} from "antd";
import { InboxOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import { ResizableBox } from "react-resizable";
import "antd/dist/reset.css"; // Ant Design's CSS
import "react-resizable/css/styles.css"; // ResizableBox CSS
import "./ImageUploader.css"; // Custom CSS for print styles

const { Dragger } = Upload;
const { TextArea } = Input;

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [imageSizes, setImageSizes] = useState({});
  const [descriptions, setDescriptions] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const printRef = useRef();

  const handleImageUpload = (info) => {
    const { fileList } = info;
    const newImages = fileList.map((file) => file.originFileObj);
    setImages(newImages);

    // Set default size and empty descriptions for each new image
    const newImageSizes = newImages.reduce((acc, img, index) => {
      acc[index] = { width: 200, height: 200 }; // Default size
      return acc;
    }, {});
    setImageSizes(newImageSizes);

    const newDescriptions = newImages.reduce((acc, img, index) => {
      acc[index] = ""; // Empty description
      return acc;
    }, {});
    setDescriptions(newDescriptions);
  };

  const handleDownloadPDF = () => {
    if (images.length === 0) {
      message.error(
        "Please upload at least one image before generating the PDF."
      );
      return;
    }

    const doc = new jsPDF("p", "mm", "a4");
    let yOffset = 10;
    let xOffset = 10;
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let rowHeight = 0;

    images.forEach((image, index) => {
      const img = new Image();
      img.src = URL.createObjectURL(image);
      img.onload = () => {
        const imgWidth =
          (imageSizes[index].width / 200) * (pageWidth / 2 - margin * 2);
        const imgHeight = (img.height * imgWidth) / img.width;

        if (xOffset + imgWidth > pageWidth - margin) {
          // Move to the next row if the image exceeds the page width
          xOffset = 10;
          yOffset += rowHeight + margin;
          rowHeight = 0;
        }

        if (yOffset + imgHeight > pageHeight - margin) {
          // Add a new page if the image exceeds the page height
          doc.addPage();
          yOffset = 10;
          rowHeight = 0;
        }

        doc.addImage(img, "JPEG", xOffset, yOffset, imgWidth, imgHeight);
        yOffset += imgHeight + 5;

        // Add description below the image
        if (descriptions[index]) {
          doc.text(descriptions[index], xOffset, yOffset);
          yOffset += margin; // Space between description and next image
        }

        xOffset += imgWidth + margin;
        rowHeight = Math.max(rowHeight, imgHeight);

        if (index === images.length - 1) {
          doc.save("images.pdf");
        }
      };
    });
  };

  const handleEditDescription = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);

    const newImageSizes = { ...imageSizes };
    delete newImageSizes[index];
    setImageSizes(newImageSizes);

    const newDescriptions = { ...descriptions };
    delete newDescriptions[index];
    setDescriptions(newDescriptions);
  };

  const handleDescriptionChange = (index, value) => {
    setDescriptions({
      ...descriptions,
      [index]: value,
    });
  };

  const handleResize = (index, width, height) => {
    setImageSizes({
      ...imageSizes,
      [index]: { width, height },
    });
  };

  const handlePreviewImage = (image) => {
    setPreviewImage(URL.createObjectURL(image));
    setPreviewVisible(true);
  };

  const handleCancelPreview = () => {
    setPreviewVisible(false);
    setPreviewImage(null);
  };

  const props = {
    multiple: true,
    beforeUpload: () => false, // Prevent automatic upload
    onChange: handleImageUpload,
    showUploadList: false, // Hide the file list
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Typography.Title level={3}>Upload Images</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
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
          <Button
            onClick={handleDownloadPDF}
            type="primary"
            block
            disabled={images.length === 0}
          >
            Generate PDF
          </Button>
        </Col>
      </Row>
      <Row justify="center" ref={printRef} gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col xs={24} sm={16} md={12} lg={8} xl={6} key={index}>
            <Card
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => handleEditDescription(index)}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDeleteImage(index)}
                />,
              ]}
              style={{ width: "100%" }}
            >
              <ResizableBox
                width={imageSizes[index]?.width || 200}
                height={imageSizes[index]?.height || 200}
                lockAspectRatio={true}
                onResizeStop={(e, data) =>
                  handleResize(index, data.size.width, data.size.height)
                }
              >
                <img
                  onClick={() => handlePreviewImage(image)}
                  src={URL.createObjectURL(image)}
                  alt={`upload-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </ResizableBox>
              {editingIndex === index ? (
                <TextArea
                  rows={2}
                  value={descriptions[index]}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                  placeholder="Enter description..."
                  autoSize
                />
              ) : (
                <Typography.Paragraph>
                  {descriptions[index]}
                </Typography.Paragraph>
              )}
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={handleCancelPreview}
      >
        <img alt="Preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default ImageUploader;
