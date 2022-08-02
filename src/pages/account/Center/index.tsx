import {GridContent} from "@ant-design/pro-layout";
import styles from './index.module.less';
import {Avatar, Card, Col, Divider, Input, InputRef, Row, Tag} from "antd";
import {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import type {CurrentUser, tabKeyType} from "@/store/types";
import {ClusterOutlined, ContactsOutlined, HomeOutlined, PlusOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Projects from "@/pages/account/Center/components/Projects";
import Applications from "@/pages/account/Center/components/Applications";
import Articles from "@/pages/account/Center/components/Articles";

const operationTabList = [
  {
    key: 'articles',
    tab: (
        <span>
        文章 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
        <span>
        应用 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
        <span>
        项目 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
];
const TagList = ({ tags }: { tags: Array<{ key?: string; label?: string }> }) => {
  const ref = useRef<InputRef | null>(null);
  const [newTags, setNewTags] = useState<{
    key: string;
    label: string;
  }[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const showInput = () => {
    setInputVisible(true);
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
      tempsTags = [...tempsTags, { key: `new-${tempsTags.length}`, label: inputValue }];
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };

  return (
      <div className={styles.tags}>
        <div className={styles.tagsTitle}>技能</div>
        {(tags || []).concat(newTags).map((item) => (
            <Tag key={item.key}>{item.label}</Tag>
        ))}
        {inputVisible && (
            <Input
                ref={ref}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
            />
        )}
        {!inputVisible && (
            <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
              <PlusOutlined />
            </Tag>
        )}
      </div>
  );
};
const Center = ({currentUser}: {currentUser: CurrentUser}) => {
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  //  渲染用户信息
  const renderUserInfo = (currentUser: CurrentUser) => {
    return (
        <div className={styles.detail}>
          <p>
            <ContactsOutlined
                style={{
                  marginRight: 8,
                }}
            />
            {currentUser?.title}
          </p>
          <p>
            <ClusterOutlined
                style={{
                  marginRight: 8,
                }}
            />
            {currentUser?.group}
          </p>
          <p>
            <HomeOutlined
                style={{
                  marginRight: 8,
                }}
            />
            {(currentUser?.geographic as any || { province: { label: '' } }).province.label}
            {
              (
                  currentUser?.geographic as any || {
                    city: {
                      label: '',
                    },
                  }
              ).city.label
            }
          </p>
        </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'projects') {
      return <Projects />;
    }
    if (tabValue === 'applications') {
      return <Applications />;
    }
    if (tabValue === 'articles') {
      return <Articles />;
    }
    return null;
  };
  return (
      <>
        <GridContent>
          <Row gutter={24}>
            <Col lg={7} md={24}>
              <Card bordered={false} style={{ marginBottom: 24 }} loading={loading}>
                {!loading && currentUser && (
                    <div>
                      <div className={styles.avatarHolder}>
                        <img alt="" src={currentUser.avatar} />
                        <div className={styles.name}>{currentUser.userName}</div>
                        <div>{currentUser?.signature}</div>
                      </div>
                      {renderUserInfo(currentUser)}
                      <Divider dashed />
                      <TagList tags={currentUser.tags || []} />
                      <Divider style={{ marginTop: 16 }} dashed />
                      <div className={styles.team}>
                        <div className={styles.teamTitle}>团队</div>
                        <Row gutter={36}>
                          {currentUser.notice &&
                              currentUser.notice.map((item) => (
                                  <Col key={item.id} lg={24} xl={12}>
                                    <Link to={item.href}>
                                      <Avatar size="small" src={item.logo} />
                                      {item.member}
                                    </Link>
                                  </Col>
                              ))}
                        </Row>
                      </div>
                    </div>
                )}
              </Card>
            </Col>
            <Col lg={17} md={24}>
              <Card
                  className={styles.tabsCard}
                  bordered={false}
                  tabList={operationTabList}
                  activeTabKey={tabKey}
                  onTabChange={(_tabKey: string) => {
                    setTabKey(_tabKey as tabKeyType);
                  }}
              >
                {renderChildrenByTabKey(tabKey)}
              </Card>
            </Col>
          </Row>

        </GridContent>
      </>
  )
}

const mapStateToProps = ({currentUser}: {currentUser: CurrentUser}) => ({
  currentUser: currentUser
})
export default connect(mapStateToProps)(Center)
