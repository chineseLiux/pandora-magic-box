import {Button, Col, Dropdown, Menu, Row, Space} from "antd";
import {RedoOutlined} from "@ant-design/icons";
import React from "react";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import {ItemType} from "antd/lib/menu/hooks/useItems";
import ColumnSetting from "@/components/DefaultTableToolBar/ColumnSetting";
import {ColumnsType} from "antd/es/table";

const DefaultTableToolBar = (
    {
      columns,
      buttons,
      buttonOpenNum = 3,
      buttonSize = 'middle',
      searchMethod,
      changeColumnsTitle,
      defaultShowColumns,
    }: {
      columns: ColumnsType<any>,
      buttons?: {name: string, icon?: string, onClick: (props?: any) => void}[],
      buttonOpenNum?: number,
      buttonSize?: SizeType,
      searchMethod?: (props?: any) => void,
      changeColumnsTitle: (props?: any) => void,
      defaultShowColumns?: Array<string>,
    }
) => {
  const menuButtonItems: ItemType[] = [];
  const buttonList = () => {
    return (
        <>
          {
            buttons?.map((item, index) => {
              if (index >= buttonOpenNum) {
                menuButtonItems.push({
                  label: <Button size={buttonSize} type='text'>{item.name }</Button>,
                  key: item.name,
                  onClick: item.onClick
                })
              }
              return index < buttonOpenNum && <Button size={buttonSize} key={item.name} onClick={item.onClick} type="primary" icon={item.icon && React.createElement(require('@ant-design/icons')[item.icon as string])}>{item.name }</Button>
            })
          }
          {
              menuButtonItems.length > 0 &&
              <Dropdown overlay={<Menu items={menuButtonItems} />} placement="bottomLeft">
                  <Button size={buttonSize} type="primary">...</Button>
              </Dropdown>
          }
        </>
    )
  }
  return (
      <>
        <Row>
          <Col lg={24} md={24}>
            <Row style={{marginBottom: '5px'}}>
              <Col lg={20} md={20}>
                <Space>
                  {buttonList() }
                </Space>
              </Col>
              <Col lg={4} md={4} style={{textAlign: 'right'}}>
                <Space>
                  {
                      searchMethod &&
                      <Button size={buttonSize} type="text" icon={<RedoOutlined />} onClick={searchMethod}>
                      </Button>
                  }
                  <ColumnSetting
                      buttonSize={buttonSize}
                      columns={columns}
                      changeColumnsTitle={changeColumnsTitle}
                      defaultShowColumns={defaultShowColumns}
                  />
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
  )
}

export default DefaultTableToolBar
