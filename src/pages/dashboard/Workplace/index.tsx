import {PageContainer} from "@ant-design/pro-components";
import {Row, Col, Skeleton, Statistic, Avatar} from "antd";
import styles from './index.module.less';
import React from "react";
import {CurrentUser} from "@/store/types";


const PageHeaderContent: React.FC<{ currentUser: Partial<CurrentUser> }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar size="large" src={currentUser.avatar} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            你好，
            {currentUser?.userName}
          </div>
          <div>
            {currentUser.title} |{currentUser.group}
          </div>
        </div>
      </div>
  );
};

const ExtraContent: React.FC<Record<string, any>> = () => (
    <div className={styles.extraContent}>
      <div className={styles.statItem}>
        <Statistic title="项目数" value={56} />
      </div>
      <div className={styles.statItem}>
        <Statistic title="团队内排名" value={8} suffix="/ 24" />
      </div>
      <div className={styles.statItem}>
        <Statistic title="项目访问" value={2223} />
      </div>
    </div>
);
const Workplace = () => {
  return (
      <>
        <PageContainer
            header={{
              title: '工作台',
              ghost: false,
              breadcrumb: {
                routes: [
                ],
              }
            }}
            content={
              <PageHeaderContent
                  currentUser={{
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                    userName: 'Serati Ma',
                    userId: '00000001',
                    email: 'antdesign@alipay.com',
                    signature: '海纳百川，有容乃大',
                    title: '研发工程师',
                    group: '平台部门',
                  }}
              />
            }
            extraContent={<ExtraContent />}
        >
          <Row gutter={24}>
            <Col xl={16} lg={24} md={24} sm={24} xs={24}>
              qweqw
            </Col>
          </Row>
        </PageContainer>
      </>
  )
}

export default Workplace
