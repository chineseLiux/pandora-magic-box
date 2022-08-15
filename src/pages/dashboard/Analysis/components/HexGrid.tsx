import React, {useEffect} from "react";
import { HexGrid as Hex_Grid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import ChessList from "@/store/chess";
import {ChessTyping} from "@/store/chess";
import {Tooltip} from "antd";

const HexGrid = () => {
  const hexagonSize = { x: 14, y: 14 };
  const chess_data_list: Array<ChessTyping> = ChessList;

  const PatternComp = () => {
    let pattern_list: any = [];
    ChessList.map(item => {
      let img_path = "/src/images/s7/head/" + item.heroPaint.replace("s7_", "") + ".png";
      pattern_list.push(<Pattern key={item.id} id={item.heroPaint} link={img_path} size={hexagonSize} />);
    })
    return pattern_list;
  };

  const HexComp = () => {
    let row_list = [0, -1, -1, -2];
    const HexList: any = [];
    let zero_num = ChessList.length - 1;
    row_list.map((row_index, index) => {
      for(let columns_index = 0; columns_index < 18; columns_index++) {
        let q_num = row_index + columns_index;
        if(zero_num > -1) {
          let zero_info: ChessTyping | undefined = chess_data_list.at(zero_num);
          let heroPaint = zero_info?.heroPaint;
          HexList.push(<Hexagon key={index + '' + columns_index} q={q_num} r={index} s={0} >
            <Tooltip title="prompt text">
            </Tooltip>
          </Hexagon>);
          // HexList.push(<Hexagon key={index + '' + columns_index} q={q_num} r={index} s={0} fill={heroPaint} ></Hexagon>);
          zero_num--;
        } else {
          HexList.push(<Hexagon key={index + '' + columns_index} q={q_num} r={index} s={0} ></Hexagon>);
        }
      }
    });
    return HexList;
  }

  return (
      <Hex_Grid width={'100%'} height={260}>
        <Layout size={hexagonSize} flat={false} spacing={1.1} origin={{ x: -220, y: -32 }}>
          <HexComp />
        </Layout>
        <PatternComp />
      </Hex_Grid>
  )
}

export default HexGrid
