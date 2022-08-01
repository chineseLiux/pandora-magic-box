import {Col, Row, Input, Select, Tag} from "antd"
import {FilterTwoTone} from "@ant-design/icons";

const DefaultSearchForm = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
      <>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <Input.Group size="small" compact>
              <Select defaultValue="Zhejiang" style={{width: '200px'}}>
                <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                <Select.Option value="Jiangsu">Jiangsu</Select.Option>
              </Select>
              <Search size='small' placeholder="input search text" onSearch={onSearch} style={{ width: 'calc(100% - 200px)' }} />
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={24} style={{marginTop: '10px'}}>
          <Col lg={24} md={24}>
            <FilterTwoTone style={{marginRight: '10px'}} />
            <Tag>Tag 1</Tag>
            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
            </Tag>
            <Tag>
              Tag 2
            </Tag>
            <Tag>
              Prevent Default
            </Tag>
          </Col>
        </Row>
      </>
  )
}

export default DefaultSearchForm
