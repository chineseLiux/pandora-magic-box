import styles from './index.module.less';
import React from "react";
import { List, Tag } from 'antd';
import {ListItemDataType} from "@/redux/store/typings";
import fakeListData from "@/pages/account/Center/components/Applications/fakeListData";
import {LikeOutlined, MessageFilled, StarTwoTone} from "@ant-design/icons";
import ArticleListContent from "@/pages/account/Center/components/ArticleListContent";

const Articles = () => {
  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
      <span>
      {icon} {text}
    </span>
  );
  // 获取tab列表数据
  let listData: ListItemDataType[] = [];
  listData = fakeListData(30);
  return (
      <>
        <List<ListItemDataType>
            size="large"
            className={styles.articleList}
            rowKey="id"
            itemLayout="vertical"
            dataSource={listData || []}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                    actions={[
                      <IconText key="star" icon={<StarTwoTone />} text={item.star} />,
                      <IconText key="like" icon={<LikeOutlined />} text={item.like} />,
                      <IconText key="message" icon={<MessageFilled />} text={item.message} />,
                    ]}
                >
                  <List.Item.Meta
                      title={
                        <a className={styles.listItemMetaTitle} href={item.href}>
                          {item.title}
                        </a>
                      }
                      description={
                        <span>
                <Tag>Ant Design</Tag>
                <Tag>设计语言</Tag>
                <Tag>蚂蚁金服</Tag>
              </span>
                      }
                  />
                  <ArticleListContent data={item} />
                </List.Item>
            )}
        />
      </>
  )
}

export default Articles
