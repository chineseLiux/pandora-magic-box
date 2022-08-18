import {GridContent} from "@ant-design/pro-layout";
import {Card, Col, Row} from "antd";
import React from "react";
import ChessSlick from "@/pages/dashboard/Monitor/components/ChessSlick";
import ChessProList from "@/pages/dashboard/Monitor/components/ChessProList";

const Monitor = () => {
  return (
      <>
        <GridContent>
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{ textAlign: 'center' }} loading={false}>
                <ChessSlick />
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{}} loading={false}>
                <ChessProList />
              </Card>
            </Col>
          </Row>
        </GridContent>
      </>
  )
}

export default Monitor
