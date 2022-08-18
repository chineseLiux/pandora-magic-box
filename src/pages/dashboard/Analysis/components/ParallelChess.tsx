import React, {useEffect} from "react";
import * as echarts from "echarts";
import ChessList from "@/store/chess";

const ParallelChess = () => {
  const chess_data_list = ChessList;
  useEffect(() => {
    const lineStyle = {
      width: 1,
      opacity: 0.5
    };
    let legend_data: Array<string> = [];
    let series: Array<any> = [];
    let armor_max: any = 0;
    let attackRange_max: any= 0;
    let attackSpeed_max: any= 0;
    let criticalStrikeChance_max: any= 0;
    let initAttackDamage_max: any= 0;
    let magicResist_max: any= 0;
    let maxMP_max: any= 0;
    chess_data_list.forEach(item => {
      armor_max = item.armor > armor_max? item.armor: armor_max;
      attackRange_max = item.attackRange > attackRange_max? item.attackRange: attackRange_max;
      attackSpeed_max = item.attackSpeed > attackSpeed_max? item.attackSpeed: attackSpeed_max;
      criticalStrikeChance_max = item.criticalStrikeChance > criticalStrikeChance_max? item.criticalStrikeChance: criticalStrikeChance_max;
      initAttackDamage_max = Number(item.initAttackDamage) > initAttackDamage_max? item.initAttackDamage: initAttackDamage_max;
      magicResist_max =  Number(item.magicResist) > magicResist_max? item.magicResist: magicResist_max;
      maxMP_max = Number(item.maxMP) > maxMP_max? item.maxMP: maxMP_max;
      legend_data.push(item.name);
      series.push({
        name: item.name,
        type: 'parallel',
        lineStyle: lineStyle,
        data: [
          [item.armor, item.attackRange, item.attackSpeed, item.criticalStrikeChance, item.initAttackDamage, item.magicResist, item.maxMP, item.sellPrice]
        ]
      })
    });
    const schema = [
      { name: 'armor', index: 0, text: '护甲' },
      { name: 'attackRange', index: 1, text: '攻击距离' },
      { name: 'attackSpeed', index: 2, text: '攻速' },
      { name: 'criticalStrikeChance', index: 3, text: '暴击' },
      { name: 'initAttackDamage', index: 4, text: ' 攻击力' },
      { name: 'magicResist', index: 5, text: '魔抗' },
      { name: 'maxMP', index: 6, text: '最大魔法值' },
      { name: 'sellPrice', index: 7, text: '价格' },
    ];
    const option = {
      backgroundColor: '#fff',
      legend: {
        type: 'scroll',
        bottom: 30,
        data: legend_data,
        itemGap: 20,
        textStyle: {
          color: '#000',
          fontSize: 14
        }
      },
      tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1
      },
      parallelAxis: [
        {
          dim: 0,
          name: schema[0].text,
          max: armor_max
        },
        { dim: 1, name: schema[1].text, max: attackRange_max },
        { dim: 2, name: schema[2].text, max: attackSpeed_max },
        { dim: 3, name: schema[3].text, max: criticalStrikeChance_max },
        { dim: 4, name: schema[4].text, max: initAttackDamage_max },
        { dim: 5, name: schema[5].text, max: magicResist_max },
        { dim: 6, name: schema[6].text, max: maxMP_max },
        {
          dim: 7,
          name: schema[7].text,
          type: 'category',
          data: ['1', '2', '3', '5', '8', '10']
        }
      ],
      parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
          type: 'value',
          name: '111',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#000',
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: '#aaa'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#777'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
        }
      },
      series: series
    };
    let myChart = echarts.getInstanceByDom(document.getElementById('ParallelChess') as HTMLElement);
    if (null == myChart) {
      myChart = echarts.init(document.getElementById('ParallelChess') as HTMLElement);
    }
    myChart.setOption(option);
  });
  return (
      <div id="ParallelChess" style={{width: '100%', height: '600px'}}>

      </div>
  )
}

export default ParallelChess;
