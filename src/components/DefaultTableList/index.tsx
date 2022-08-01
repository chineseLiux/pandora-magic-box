import { Card, Col, Row, Table } from "antd";
import React, {useCallback, useState} from "react";
import {ColumnsType} from "antd/es/table";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import {TableRowSelection} from "antd/lib/table/interface";
import DefaultTableToolBar from "@/components/DefaultTableToolBar";

const DefaultTableList = (
    {
      columns,
      data,
      loading = false,
      buttons,
      buttonOpenNum = 3,
      buttonSize = 'middle',
      searchMethod,
      showSelectBox = false,
      defaultShowColumns = [],
    }: {
      columns: ColumnsType<any>,
      data?: any[],
      loading?: boolean,
      buttons?: {name: string, icon?: string, onClick: (props?: any) => void}[],
      buttonOpenNum?: number,
      buttonSize?: SizeType,
      searchMethod?: (props?: any) => void,
      showSelectBox?: boolean,
      defaultShowColumns?: Array<string>,
    }
) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [columnsTitle, setColumnsTitle] = useState<ColumnsType<any>>(columns);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const changeColumnsTitle = useCallback((newTitle: string[]) => {
    let newColumnsTitle = columns.filter(({key}) => {
      if (newTitle.filter(str => str === key).length > 0) {
        return true;
      }
      return false;
    })
    setColumnsTitle(newColumnsTitle);
  }, [columns]);

  let rowSelection: TableRowSelection<any> | undefined = undefined;
  if (showSelectBox) {
    rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
      ],
    };
  }
  return (
      <>
        <Row>
          <Col lg={24} md={24}>
            <Card >
              <Row>
                <Col lg={24} md={24}>
                  <DefaultTableToolBar
                      columns={columns}
                      buttons={buttons}
                      buttonOpenNum={buttonOpenNum}
                      buttonSize={buttonSize}
                      searchMethod={searchMethod}
                      changeColumnsTitle={changeColumnsTitle}
                      defaultShowColumns={defaultShowColumns}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={24} md={24}>
                  <Table
                      loading={loading}
                      columns={columnsTitle}
                      dataSource={data}
                      rowSelection={rowSelection}
                      pagination={{
                        showTotal: total => `共 ${total} 条`,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTitle: true
                      }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
  );
}

export default DefaultTableList
