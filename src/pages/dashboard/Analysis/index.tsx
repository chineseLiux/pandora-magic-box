import {ProCard, Statistic, StatisticCard} from '@ant-design/pro-components';
import React, {useEffect, useRef, useState} from 'react';
import {GridContent} from "@ant-design/pro-layout";
import {Card, Col, Row} from "antd";
import HexGrid from "@/pages/dashboard/Analysis/components/HexGrid";
import moment from "moment";
import ChessList, {ChessTyping} from "@/store/chess";
import EquipDataList, {EquipTyping} from "@/store/equip";
import HexDataList, {HexTyping} from "@/store/hex";
import JobDataList, {JobTyping} from "@/store/job";
import ParallelChess from "@/pages/dashboard/Analysis/components/ParallelChess";
import LabelLineAdjust from "@/pages/dashboard/Analysis/components/LabelLineAdjust";

const Analysis = () => {
  const [loading, setLoading] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const testRef: any = useRef<any>();

  let chess_data_list: Array<ChessTyping> = ChessList;
  let equip_data_list: Array<EquipTyping> = EquipDataList;
  let hex_data_list: Array<HexTyping> = HexDataList;
  let job_data_list: Array<JobTyping> = JobDataList;

  return (
      <>
        <GridContent>
          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{ marginBottom: 24, textAlign: 'center' }} loading={loading}>
                <HexGrid />
              </Card>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col lg={24} md={24}>
              <Card bordered={true} style={{ marginBottom: 24 }} loading={loading}>
                  <ProCard
                      title="数据概览"
                      extra={moment().format('YYYY-MM-DD')}
                      // split={responsive ? 'horizontal' : 'vertical'}
                      split={'vertical'}
                      headerBordered
                      bordered
                  >
                    <ProCard split="horizontal">
                      <ProCard split="horizontal">
                        <ProCard split="vertical">
                          <StatisticCard
                              statistic={{
                                title: '英雄数量',
                                value: chess_data_list.length,
                                suffix: '个',
                              }}
                          />
                          <StatisticCard
                              statistic={{
                                title: '装备数量',
                                value: equip_data_list.length,
                                suffix: '个',
                              }}
                          />
                        </ProCard>
                        <ProCard split="vertical">
                          <StatisticCard
                              statistic={{
                                title: '强化符文数量',
                                value: hex_data_list.length,
                                suffix: '个',
                              }}
                          />
                          <StatisticCard
                              statistic={{
                                title: '羁绊数量',
                                value: job_data_list.length,
                                suffix: '个',
                              }}
                          />
                        </ProCard>
                      </ProCard>
                      <StatisticCard
                          title="英雄走势"
                          chart={
                            <ParallelChess />
                          }
                      />
                    </ProCard>
                    <StatisticCard
                        title="分布"
                        chart={
                          <LabelLineAdjust />
                        }
                    />
                  </ProCard>
              </Card>
            </Col>
          </Row>
        </GridContent>
      </>
  )
}

export default Analysis
