import {Button, Col, Popover, Row, Tree} from "antd";
import type {TreeDataNode, TreeProps} from "antd";
import React, {useEffect, useState} from "react";
import {SettingOutlined} from "@ant-design/icons";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import {ColumnsType} from "antd/es/table";


const ColumnSetting = (
    {
      columns,
      buttonSize = 'middle',
      changeColumnsTitle,
      defaultShowColumns = []
    }: {
      columns: ColumnsType<any>,
      buttonSize?: SizeType,
      changeColumnsTitle: (props?: any) => void,
      defaultShowColumns?: Array<string>
    }
) => {
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
      changeColumnsTitle(checkedKeys);
  };
  useEffect(() => {
    let showColumnsIsEmpty = false;
    if (defaultShowColumns.length === 0) {
      showColumnsIsEmpty = true;
    }
    const showDefaultColumnsTitle = () => {
      changeColumnsTitle(defaultShowColumns);

    };

    if (!showColumnsIsEmpty) {
      showDefaultColumnsTitle()
    }

    let newTreeData: TreeDataNode[] = [];
    columns.forEach((item: any) => {
      if (showColumnsIsEmpty) {
        defaultShowColumns.push(item.key as string)
      }
      newTreeData.push(
        {
          title: (<>{item.title}</>),
          key: item.key as string
        }
      );
    });
    setTreeData(newTreeData);
  }, [changeColumnsTitle, defaultShowColumns, columns]);

  const content = (
      <>
        <Row>
          <Col lg={24} md={24}>
            <Tree
                checkable
                draggable
                defaultCheckedKeys={defaultShowColumns}
                onCheck={onCheck}
                treeData={treeData}
            />
          </Col>
        </Row>
      </>
  );
  return (
      <>
        <Popover placement="bottomLeft" content={content} trigger="click" overlayStyle={{padding: 0}} overlayInnerStyle={{padding: 0}}>
          <Button size={buttonSize} type="text" icon={<SettingOutlined />} ></Button>
        </Popover>
      </>
  )
}

export default ColumnSetting
