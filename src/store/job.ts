export type JobTyping = {
  "id": string;
  "name": string;
  "color": string;
  "desc2": string;
  "maxLevel": string;
  "numList": string;
  "picture": string;
  "prefix": string;
  "setID": string;
  "tftClassId": string;
}
const JobDataList = [
    {
      "id": "100",
      "name": "神龙尊者",
      "color": "1|3|4",
      "desc2": "(3)+300生命值，+15%法术强度|(6)+750生命值，+50%法术强度|(9)+1400生命值，+100%法术强度",
      "maxLevel": "3",
      "numList": "3|6|9",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_dragonmancer.png",
      "prefix": "使用【神龙尊者赐福】道具来选择一名【英豪】。【英豪】的生命值和法术强度会大幅提升，这些加成还会获得进一步提升，相当于20%x你的【神龙尊者】们的星级总和。",
      "setID": "7",
      "tftClassId": "7006"
    },
    {
      "id": "101",
      "name": "法师",
      "color": "1|2|3|4",
      "desc2": "(3)修正为75%总法术强度|(5)修正为100%总法术强度|(7)修正为125%总法术强度|(9)修正为150%总法术强度",
      "maxLevel": "4",
      "numList": "3|5|7|9",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_mage.png",
      "prefix": "【法师】们可以双重施法并且拥有修正过的总法术强度。",
      "setID": "7",
      "tftClassId": "7010"
    },
    {
      "id": "102",
      "name": "魔导师",
      "color": "1|3|4",
      "desc2": "(2)从每次技能施放中获得3法力值|(4)从每次技能施放中获得7法力值|(6)从每次技能施放中获得12法力值",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_evoker.png",
      "prefix": "每当一名友军或敌人施放一个技能时，魔导师们获得法力值。",
      "setID": "7",
      "tftClassId": "7007"
    },
    {
      "id": "103",
      "name": "刺客",
      "color": "1|3|4",
      "desc2": "(2)+15%暴击几率和+15%暴击伤害|(4)+30%暴击几率和+25%暴击伤害|(6)+45%暴击几率和+45%暴击伤害",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_assassin.png",
      "prefix": "固有能力：战斗开始时跳跃至敌方后排。刺客们的技能可以暴击并且他们会获得额外的暴击几率与暴击伤害加成。",
      "setID": "7",
      "tftClassId": "7001"
    },
    {
      "id": "104",
      "name": "迅捷射手",
      "color": "1|3|4",
      "desc2": "(2)10%攻击速度|(4)20%攻击速度|(6)40%攻击速度",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_swiftshot.png",
      "prefix": "固有：获得2格攻击距离。【迅捷射手】们每与目标相距1格，就会获得一定数额的攻击速度。",
      "setID": "7",
      "tftClassId": "7013"
    },
    {
      "id": "105",
      "name": "强袭炮手",
      "color": "1|2|3|4",
      "desc2": "(2)125%攻击力|(3)225%攻击力|(4)325%攻击力|(5)425%攻击力",
      "maxLevel": "4",
      "numList": "2|3|4|5",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_cannoneer.png",
      "prefix": "每第5次攻击发射一次炮击，爆炸后对目标附近的区域造成物理伤害。",
      "setID": "7",
      "tftClassId": "7004"
    },
    {
      "id": "106",
      "name": "格斗家",
      "color": "1|2|3|4",
      "desc2": "(2)200生命值|(4)325生命值|(6)450生命值|(8)700生命值",
      "maxLevel": "4",
      "numList": "2|4|6|8",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_brawler.png",
      "prefix": "你的队伍获得最大生命值加成。【格斗家】们获得双倍此加成。",
      "setID": "7",
      "tftClassId": "7003"
    },
    {
      "id": "107",
      "name": "护卫",
      "color": "1|3|4",
      "desc2": "(2)30%最大生命值的护盾值|(4)50%最大生命值的护盾值|(6)75%最大生命值的护盾值",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_guardian.png",
      "prefix": "每场战斗仅触发一次：护卫们降至50%生命值时，会为自身和相距最近的那名友军提供基于自身最大生命值的护盾值。这个护盾值可以叠加！",
      "setID": "7",
      "tftClassId": "7008"
    },
    {
      "id": "108",
      "name": "秘术师",
      "color": "1|2|3|4",
      "desc2": "(2)50魔法抗性|(3)100魔法抗性|(4)175魔法抗性|(5)300魔法抗性",
      "maxLevel": "4",
      "numList": "2|3|4|5",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_mystic.png",
      "prefix": "你的队伍获得魔法抗性提升。",
      "setID": "7",
      "tftClassId": "7011"
    },
    {
      "id": "109",
      "name": "唤星者",
      "color": "3",
      "desc2": "(1)小小英雄治疗(2/3/75)生命值，数额基于其星级",
      "maxLevel": "1",
      "numList": "1",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_starcaller.png",
      "prefix": "在与玩家战斗期间，第一个施放技能的【唤星者】会为你的小小英雄治疗(2/3/75)生命值，数额基于其星级。溢出的治疗效果会使一个敌方弈子解体。",
      "setID": "7",
      "tftClassId": "7017"
    },
    {
      "id": "110",
      "name": "换形师",
      "color": "1|2|3",
      "desc2": "(2)40%额外生命值|(4)90%额外生命值|(6)145%额外生命值",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_shapeshifter.png",
      "prefix": "变形时提供额外最大生命值。",
      "setID": "7",
      "tftClassId": "7012"
    },
    {
      "id": "111",
      "name": "狂刃战士",
      "color": "1|3|4",
      "desc2": "(2)+80%伤害|(4)+175%伤害|(6)+325%伤害",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_warrior.png",
      "prefix": "【狂刃战士】们的每次攻击有50%几率提升其下一次攻击的伤害。",
      "setID": "7",
      "tftClassId": "7014"
    },
    {
      "id": "112",
      "name": "重骑兵",
      "color": "1|2|3|4",
      "desc2": "(2)35护甲，35魔法抗性|(3)60护甲，60魔法抗性|(4)85护甲，85魔法抗性|(5)110护甲，110魔法抗性",
      "maxLevel": "4",
      "numList": "2|3|4|5",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_cavalier.png",
      "prefix": "固有能力：在移动时朝着目标快速冲锋。【重骑兵】获得护甲和魔法抗性。在战斗开始时以及每次冲锋后，此加成翻倍，持续4秒。",
      "setID": "7",
      "tftClassId": "7005"
    },
    {
      "id": "113",
      "name": "龙神",
      "color": "3",
      "desc2": "(1)【龙神】提供+3至被标记的羁绊，并获得700额外生命值。这个效果只会在场上恰好有1个【龙神】时才能激活。",
      "maxLevel": "1",
      "numList": "1",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_dragon.png",
      "prefix": "固有能力：需要2个队伍栏位。【龙神】提供+3至被标记的羁绊，并获得750额外生命值。这个效果只会在场上恰好有1个【龙神】时才能激活。",
      "setID": "7",
      "tftClassId": "7015"
    },
    {
      "id": "114",
      "name": "吟游诗人",
      "color": "3",
      "desc2": "(1)友军们有2%几率生成一个【音符】;使你商店的较高阶弈子的出现概率提升1%",
      "maxLevel": "1",
      "numList": "1",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_bard.png",
      "prefix": "在每次与玩家战斗之后，存活下来的友军们有2%几率生成一个【音符】。【巴德】在跳舞时总会生成一个【音符】。你收集的每个【音符】都会使你商店的较高阶弈子的出现概率提升1%。",
      "setID": "7",
      "tftClassId": "7002"
    },
    {
      "id": "115",
      "name": "传奇半神",
      "color": "3",
      "desc2": "(3)这名友军的100%生命值、护甲和魔法抗性，外加这名友军的30%法术强度。",
      "maxLevel": "1",
      "numList": "3",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_legend.png",
      "prefix": "每个战斗环节：一名邻格的友方弈子会将其灵魂献给【传奇半神】，使这个【传奇半神】获得这名友军的100%生命值、护甲和魔法抗性，外加这名友军的30%法术强度。",
      "setID": "7",
      "tftClassId": "7009"
    }
];
export default JobDataList;
