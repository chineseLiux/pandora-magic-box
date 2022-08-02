import {Card, Col, message, Row, Space, Tag} from 'antd';
import React from 'react';
import {ColumnsType} from "antd/es/table";
import DefaultTableList from "@/components/DefaultTableList";
import {GridContent} from "@ant-design/pro-layout";
import DefaultSearchForm from "@/components/DefaultSearchForm";
interface DataType {
  key: string;
  account: string;
  userName: string;
  createTime: string;
  tags: string[];
}
const columns: ColumnsType<DataType> = [
  {
    title: '账号',
    dataIndex: 'account',
    key: 'account',
    render: text => <a>{text}</a>,
  },
  {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '部门',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
            );
          })}
        </>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.userName}</a>
          <a>Delete</a>
        </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    userName: 'John Brown',
    account: 'jb_001',
    createTime: '2022-02-31 12:03:11',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    userName: 'Jim Green',
    account: 'jG_002',
    createTime: '2022-02-31 12:03:11',
    tags: ['loser'],
  },
  {
    key: '3',
    userName: 'Joe Black',
    account: 'jB_003',
    createTime: '2022-02-31 12:03:11',
    tags: ['cool', 'teacher'],
  },
];

const toolBar = [
  {
    name: '新增',
    onClick: () => {
      message.warn('add button!')
    }
  },{
    name: '修改',
    onClick: () => {
      message.warn('update button!')
    }
  },{
    name: '删除',
    onClick: () => {
      message.warn('delete button!')
    }
  },{
    name: '查看',
    onClick: () => {
      message.warn('select button!')
    }
  },{
    name: '导出',
    onClick: () => {
      message.warn('export button!')
    }
  }
]
const UserManager = () => {
  const searchMethod = () => {
    message.info('search data');
  }
  return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <Card>
              <DefaultSearchForm

              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <DefaultTableList
                columns={columns}
                data={data}
                buttons={toolBar}
                buttonSize='small'
                searchMethod={searchMethod}
                showSelectBox={true}
            />
          </Col>
        </Row>
      </GridContent>
  );
}

export default UserManager
