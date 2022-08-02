import {Card, List} from "antd";
import {ListItemDataType} from "@/redux/store/typings";
import moment from 'moment';
import fakeListData from "@/pages/account/Center/components/Applications/fakeListData";
import styles from './index.moudle.less';

const Projects = () => {
  // 获取tab列表数据
  let listData: ListItemDataType[] = [];
  listData = fakeListData(30);
  return (
      <>
        <List<ListItemDataType>
            className={styles.coverCardList}
            rowKey="id"
            grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
            dataSource={listData || []}
            renderItem={(item) => (
                <List.Item>
                  <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
                    <Card.Meta title={<a>{item.title}</a>} description={item.subDescription} />
                    <div className={styles.cardItemContent}>
                      <span>{moment(item.updatedAt).fromNow()}</span>
                    </div>
                  </Card>
                </List.Item>
            )}

        />
      </>
  )
}

export default Projects
