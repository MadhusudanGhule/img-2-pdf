import { Col, Row } from 'antd'
import React from 'react'

function SecondaryWrapper({ children }) {
  return (
    <Row justify={"center"}>
      <Col style={{ width: '60%' }}>
        {children}
      </Col>
    </Row>
  )
}

export default SecondaryWrapper