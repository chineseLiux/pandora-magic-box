import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import {ProList} from '@ant-design/pro-components';
import {Row, Tag} from 'antd';
import React, {ReactNode} from 'react';
import ChessList, {ChessTyping} from "@/store/chess";
import JobDataList, {JobTyping} from "@/store/job";
import RaceDataList, {RaceTyping} from "@/store/race";

const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
  </span>
);

const ChessProList = () => {
  let dataSource: Array<any> = [];
  let chess_data_list: Array<ChessTyping> = ChessList;
  let job_data_list: Array<JobTyping> = JobDataList;
  let race_data_list: Array<RaceTyping> = RaceDataList;
  chess_data_list.forEach(item => {
    let chess_class = item.class.split('|');
    let chess_species = item.species.split('|');
    let chess_tag: Array<string> = [];
    chess_class.map(item => chess_tag.push(job_data_list.filter(job => job.id == item)[0].name));
    chess_species.map(item => chess_tag.push(race_data_list.filter(race => race.id == item)[0].name));
    dataSource.push({
      title: item.name,
      description: chess_tag.map(item => item),
      actions: {
        star: 156,
        like: 156,
        message: 3
      },
      extra: "/src/images/s7/jkimg/" + item.heroPaint.replace("s7_", "") + ".jpg",
      content: item.skillDesc
    })
  })

  return (
      <ProList<{ title: string }>
          itemLayout="vertical"
          rowKey="id"
          headerTitle=""
          dataSource={dataSource}
          metas={{
            title: {},
            description: {
              render: (values: ReactNode) => {
                let a = values as Array<string>;
                return (
                    <>
                      <Row>
                        {a.map(item => (
                            <Tag key={item}>{item}</Tag>
                        ))}
                      </Row>
                    </>
                )
              },
            },
            actions: {
              render: (values: any) => {
                return [
                  <IconText icon={StarOutlined} text={values.props.text.star} key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text={values.props.text.like} key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text={values.props.text.message} key="list-vertical-message" />,
                ]
              },
            },
            extra: {
              render: (values: string) => {
                return (
                    <img
                        width={272}
                        alt="logo"
                        src={values}
                    />
                );
              },
            },
            content: {
              render: (values) => {
                return (
                    <Row>
                      {values}
                    </Row>
                );
              },
            },
          }}
      />
  );
}

export default ChessProList;
