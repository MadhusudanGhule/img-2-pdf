// src/components/About.js
import React from "react";
import { Card, Carousel, Layout, Typography } from "antd";
import "./index.css";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const testimonialsData = [
  {
    name: "John Doe",
    img: "https://via.placeholder.com/150", // Replace with your image URL or path
    content:
      "This app is fantastic! It made creating PDFs from images so easy.",
  },
  {
    name: "Jane Smith",
    img: "https://via.placeholder.com/150", // Replace with your image URL or path
    content: "A great tool for quickly converting images to PDFs on my phone.",
  },
  {
    name: "Sam Wilson",
    img: "https://via.placeholder.com/150", // Replace with your image URL or path
    content: "Highly recommend this app for its simplicity and effectiveness.",
  },
];
const About = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <Title level={2}>About Image to PDF Converter</Title>
        <Paragraph>
          This application allows you to upload multiple images and generate a
          PDF from them. It is designed to be simple and easy to use.
        </Paragraph>
        <Paragraph>
          Features:
          <ul>
            <li>Upload multiple images at once</li>
            <li>Preview images before generating PDF</li>
            <li>Generate PDF with a single click</li>
          </ul>
        </Paragraph>
       
        <Title level={2} style={{ textAlign: "center" }}>
          Testimonials
        </Title>
        <Carousel autoplay>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
                 
                    <Card style={{ maxWidth: "400px", margin: "0 auto",}}>
                <img
                  src={testimonial.img}
                  alt={`testimonial-${index}`}
                  style={{
                    width: "30%",
                    height: "auto",
                    marginBottom: "15px",
                  }}
                />
                <Paragraph>"{testimonial.content}"</Paragraph>
                <Title level={5}>- {testimonial.name}</Title>
              </Card>
            </div>
          ))}
        </Carousel>
        <Paragraph>
          ©2024 Image to PDF Converter. All rights reserved.
        </Paragraph>
      </Content>
    </Layout>
  );
};

export default About;
