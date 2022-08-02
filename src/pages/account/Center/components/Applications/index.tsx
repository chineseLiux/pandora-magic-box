import stylesApplications from './index.module.less';
import {Avatar, Card, Dropdown, List, Menu, Tooltip} from "antd";
import {ListItemDataType} from "@/store/types";
import {DownloadOutlined, EditOutlined, EllipsisOutlined, ShareAltOutlined} from "@ant-design/icons";
import numeral from 'numeral';
import fakeListData from "@/pages/account/Center/components/Applications/fakeListData";
import React from "react";
export function formatWan(val: number) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result: React.ReactNode = val;
  if (val > 10000) {
    result = (
        <span>
        {Math.floor(val / 10000)}
          <span
              style={{
                position: 'relative',
                top: -2,
                fontSize: 14,
                fontStyle: 'normal',
                marginLeft: 2,
              }}
          >
          万
        </span>
      </span>
    );
  }
  return result;
}

const Applications = () => {
  // 获取tab列表数据
  let listData: ListItemDataType[] = [];
  listData = fakeListData(30);
  let menuItems = [
    {
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
            1st menu item
          </a>
      ),
      key: 'alipay',
    },{
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
            2nd menu item
          </a>
      ),
      key: 'taobao',
    },{
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
            3d menu item
          </a>
      ),
      key: 'tmall',
    },
  ]
  const itemMenu = (
      <Menu
        items={menuItems}
      />
  );
  const CardInfo: React.FC<{
    activeUser: React.ReactNode;
    newUser: React.ReactNode;
  }> = ({ activeUser, newUser }) => (
      <div className={stylesApplications.cardInfo}>
        <div>
          <p>活跃用户</p>
          <p>{activeUser}</p>
        </div>
        <div>
          <p>新增用户</p>
          <p>{newUser}</p>
        </div>
      </div>
  );
  return (
      <>

        <List<ListItemDataType>
            loading={false}
            rowKey="id"
            className={stylesApplications.filterCardList}
            grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
            dataSource={listData || []}
            renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card
                      hoverable
                      bodyStyle={{ paddingBottom: 20 }}
                      actions={[
                        <Tooltip key="download" title="下载">
                          <DownloadOutlined />
                        </Tooltip>,
                        <Tooltip title="编辑" key="edit">
                          <EditOutlined />
                        </Tooltip>,
                        <Tooltip title="分享" key="share">
                          <ShareAltOutlined />
                        </Tooltip>,
                        <Dropdown overlay={itemMenu} key="ellipsis">
                          <EllipsisOutlined />
                        </Dropdown>,
                      ]}
                  >
                    <Card.Meta avatar={<Avatar size="small" src={item.avatar} />} title={item.title} />
                    <div className={stylesApplications.cardItemContent}>
                      <CardInfo
                          activeUser={formatWan(item.activeUser)}
                          newUser={numeral(item.newUser).format('0,0')}
                      />
                    </div>
                  </Card>
                </List.Item>
            )}

        />
      </>
  )
}

export default Applications
