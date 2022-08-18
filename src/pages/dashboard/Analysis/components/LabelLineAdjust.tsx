import React, {useEffect} from "react";
import * as echarts from "echarts";
import ChessList from "@/store/chess";
import EquipDataList from "@/store/equip";
import HexDataList from "@/store/hex";

const LabelLineAdjust = () => {
  const chess_data_list = ChessList;
  const equip_data_list = EquipDataList;
  const hex_data_list = HexDataList;
  const datas = [
    ////////////////////////////////////////
    [
      { name: '1费', value: chess_data_list.filter(item => item.sellPrice == "1").length },
      { name: '2费', value: chess_data_list.filter(item => item.sellPrice == "2").length },
      { name: '3费', value: chess_data_list.filter(item => item.sellPrice == "3").length },
      { name: '4费', value: chess_data_list.filter(item => item.sellPrice == "4").length },
      { name: '5费', value: chess_data_list.filter(item => item.sellPrice == "5").length },
      { name: '8费', value: chess_data_list.filter(item => item.sellPrice == "8").length },
      { name: '10费', value: chess_data_list.filter(item => item.sellPrice == "10").length }
    ],
    // ////////////////////////////////////////
    [
      { name: '1级羁绊', value: hex_data_list.filter(item => item.level == "1").length },
      { name: '2级羁绊', value: hex_data_list.filter(item => item.level == "2").length },
      { name: '3级羁绊', value: hex_data_list.filter(item => item.level == "3").length },
    ],
    ////////////////////////////////////////
    [
      { name: '基础装备', value: equip_data_list.filter(item => item.type == "基础装备").length },
      { name: '成型装备', value: equip_data_list.filter(item => item.type == "成型装备").length },
      { name: '特殊装备', value: equip_data_list.filter(item => item.type == "特殊装备").length },
    ]
  ];
  useEffect(() => {
    let data_list: Array<any> = [];

    let option = {
      title: {
        left: 'center',
        textStyle: {
          color: '#999',
          fontWeight: 'normal',
          fontSize: 14
        }
      },
      graphic: {
        show: false,
        type: 'text',
        left: 'center',
        style: {
          text: ''
        }
      },
      series: datas.map(function (data, idx) {
        var top = idx * 33.3;
        return {
          type: 'pie',
          radius: [80, 120],
          top: top + '%',
          height: '33.33%',
          left: 'center',
          width: '100%',
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} 个}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80
          },
          labelLayout: function (params: any) {
            const isLeft = params.labelRect.x < myChart?.getWidth() / 2;
            const points = params.labelLinePoints;
            // Update the end point.
            points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
            return {
              labelLinePoints: points
            };
          },
          data: data
        };
      })
    };
    let myChart: any = echarts.getInstanceByDom(document.getElementById('LabelLineAdjust') as HTMLElement);
    if (null == myChart) {
      myChart = echarts.init(document.getElementById('LabelLineAdjust') as HTMLElement);
    }
    myChart.setOption(option);
  });
  return (
      <div id="LabelLineAdjust" style={{width: '100%', height: '800px'}}>
      </div>
  );
};

export default LabelLineAdjust;
