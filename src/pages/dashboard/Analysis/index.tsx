import {ProCard, Statistic, StatisticCard} from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React, {useEffect, useState} from 'react';
import {GridContent} from "@ant-design/pro-layout";
import {Card, Col, Row} from "antd";
const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

const Analysis = () => {
  const [loading, setLoading] = useState(true);
  const [responsive, setResponsive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
      <>
        <GridContent>
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{ marginBottom: 24 }} loading={loading}>
                <RcResizeObserver
                    key="resize-observer"
                    onResize={(offset) => {
                      setResponsive(offset.width < 596);
                    }}
                >
                  <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
                    <StatisticCard
                        statistic={{
                          title: '支付金额',
                          value: 2176,
                          icon: (
                              <img
                                  style={imgStyle}
                                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                  alt="icon"
                              />
                          ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                          title: '访客数',
                          value: 475,
                          icon: (
                              <img
                                  style={imgStyle}
                                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                  alt="icon"
                              />
                          ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                          title: '支付成功订单数',
                          value: 87,
                          icon: (
                              <img
                                  style={imgStyle}
                                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                  alt="icon"
                              />
                          ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                          title: '浏览量',
                          value: 1754,
                          icon: (
                              <img
                                  style={imgStyle}
                                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                                  alt="icon"
                              />
                          ),
                        }}
                    />
                  </StatisticCard.Group>
                </RcResizeObserver>
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{ marginBottom: 24 }} loading={loading}>
                <RcResizeObserver
                    key="resize-observer"
                    onResize={(offset) => {
                      setResponsive(offset.width < 596);
                    }}
                >
                  <ProCard
                      title="数据概览"
                      extra="2019年9月28日 星期五"
                      split={responsive ? 'horizontal' : 'vertical'}
                      headerBordered
                      bordered
                  >
                    <ProCard split="horizontal">
                      <ProCard split="horizontal">
                        <ProCard split="vertical">
                          <StatisticCard
                              statistic={{
                                title: '昨日全部流量',
                                value: 234,
                                description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                              }}
                          />
                          <StatisticCard
                              statistic={{
                                title: '本月累计流量',
                                value: 234,
                                description: <Statistic title="月同比" value="8.04%" trend="up" />,
                              }}
                          />
                        </ProCard>
                        <ProCard split="vertical">
                          <StatisticCard
                              statistic={{
                                title: '运行中实验',
                                value: '12/56',
                                suffix: '个',
                              }}
                          />
                          <StatisticCard
                              statistic={{
                                title: '历史实验总数',
                                value: '134',
                                suffix: '个',
                              }}
                          />
                        </ProCard>
                      </ProCard>
                      <StatisticCard
                          title="流量走势"
                          chart={
                            <img
                                alt={'流量走势'}
                                src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                                width="100%"
                            />
                          }
                      />
                    </ProCard>
                    <StatisticCard
                        title="流量占用情况"
                        chart={
                          <img
                              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                              alt="大盘"
                              width="100%"
                          />
                        }
                    />
                  </ProCard>
                </RcResizeObserver>
              </Card>
            </Col>
          </Row>
        </GridContent>
      </>
  )
}

export default Analysis
