import React from "react";
import { Affix, Card } from "antd";

const Footer = ({ children }) => {
  return (
    <Affix
      style={{
        zIndex: 100,
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: "67px",
      }}
    >
      <Card size="small">{children}</Card>
    </Affix>
  );
};

export default Footer;
