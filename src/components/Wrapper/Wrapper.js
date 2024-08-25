import { Col, Row } from 'antd'
import React from 'react'

function Wrapper({ children }) {
    return (
        <>
            <Row justify="center">
                <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                    {children}
                </Col>
            </Row>
        </>

    )
}

export default Wrapper