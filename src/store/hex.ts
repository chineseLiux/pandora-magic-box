export type HexTyping = {
  "id": string;
  "desc": string;
  "icon": string;
  "name": string;
  "level": string;
  "fetterId": string;
  "fetterType": string;
}
const HexDataList = [
    {
      "id": "1002",
      "desc": "在输掉你的战斗环节之后，获得2金币和一次免费的商店刷新。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/calculatedloss2.png",
      "name": "存心失利",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1003",
      "desc": "如果在一个回合结束时，你拥有的金币少于20，就会获得2金币",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/hyperroll2.png",
      "name": "花到上头",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1004",
      "desc": "在你刷新你的商店时，提供2经验值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/wisespending3.png",
      "name": "明智消费",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1005",
      "desc": "提供2个【目标假人】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/phonyfrontline2.png",
      "name": "虚假前线",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1006",
      "desc": "提供1件随机成装。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/itemgrabbag1.png",
      "name": "百宝袋 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1007",
      "desc": "获得一件基础装备。在每个回合开始时，你备战席上的装备会随机变化（【金铲铲冠冕】、【金铲铲】和消耗品除外）",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/pandora1.png",
      "name": "潘朵拉的装备",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1008",
      "desc": "提供一个随机成装，出售英雄时会将其携带的成装拆分为基础装备(【金铲铲冠冕】除外)。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/salvage2.png",
      "name": "打捞桶",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1009",
      "desc": "你的小小英雄移动的更快并会在1个PVP回合后恢复2生命值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/metabolicaccel2.png",
      "name": "代谢增速器",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1010",
      "desc": "提供8金币。你的商店会以比你当前等级高1级的几率来刷新英雄",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/highend3.png",
      "name": "高端购物",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1011",
      "desc": "如果在一个回合结束时，你的备战席上没有任何英雄，就会获得3经验值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/clearmind2.png",
      "name": "清晰头脑",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1012",
      "desc": "在战斗环节开始时，己方邻格内没有友军的弈子会获得相当于其25%最大生命值的护盾值，持续10秒。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/exiles1.png",
      "name": "浪人 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1016",
      "desc": "你的弈子们受到的所有治疗和护盾效果提升25%",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/firstaidkit1.png",
      "name": "急救用具 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1017",
      "desc": "你的弈子们只要不具有任何已激活的羁绊，就会获得250/300/350/400生命值和40/50/60/70%攻击速度，属性加成会随阶段数的增长而提升。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/builtdifferent1.png",
      "name": "卓尔不群 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1018",
      "desc": "你的英雄只要携带了1件装备，就会获得125生命值和8攻击力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cybernetic1.png",
      "name": "源计划植入 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1019",
      "desc": "你的队伍每激活一个羁绊，你的弈子们就会获得1攻击力和法术强度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/standunited1.png",
      "name": "并肩作战 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1020",
      "desc": "你的1阶和2阶弈子们获得25%攻击速度和移动速度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/featherweights1.png",
      "name": "羽量级选手 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1021",
      "desc": "在战斗环节开始15秒后，你的弈子们造成的伤害提升50%。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ascension2.png",
      "name": "飞升",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1022",
      "desc": "你的弈子们获得相当于12%攻击和技能已造成伤害值的治疗效果。溢出的治疗效果会转化为一层护盾，护盾值上限为300。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/celestialblessing1.png",
      "name": "星界赐福 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1023",
      "desc": "己方没有携带任何装备的弈子们，都会获得30护甲和魔法抗性",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/makeshift1.png",
      "name": "应急护甲 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1024",
      "desc": "你的弈子们在击杀时治疗自身400生命值",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/thrillhunt1.png",
      "name": "狩猎律动 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1025",
      "desc": "你的弈子们的攻击会无视目标20%的护甲并使受到的治疗效果降低50%，持续5秒",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/weakspot1.png",
      "name": "直击弱点 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1068",
      "desc": "提供1个【窃贼手套】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bandthieves1.png",
      "name": "窃贼帮派 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1088",
      "desc": "提供20金币",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/windfall3.png",
      "name": "意外之财",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1101",
      "desc": "提供3个随机的3阶英雄。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/three_scompany1.png",
      "name": "三费小组",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1102",
      "desc": "知道你下一回合将要和谁战斗，提供1个【灵风】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/divineintervention2.png",
      "name": "未来视野 I",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1103",
      "desc": "当你的弈子受到暴击时，对周围1格的敌人造成 50/70/90/110（基于当前阶段)魔法伤害。(1秒冷却时间)",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/electrocharge1.png",
      "name": "电火花 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1105",
      "desc": "当你的弈子造成技能伤害时，命中的第一个目标及其附近的一个敌人会受到 40/70/100/130 (基于当前阶段)魔法伤害。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/luden_secho1.png",
      "name": "卢登的回声 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1109",
      "desc": "你的弈子们只要没有携带任何装备，就会每秒回复4法力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/meditation1.png",
      "name": "冥想 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1110",
      "desc": "你的弈子只要携带了1件装备，就会获得125生命值并且每秒回复2法力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticuplink1.png",
      "name": "源计划上行链路 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1111",
      "desc": "你的弈子只要携带了1件装备，就会获得125生命值和20护甲。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticshell1.png",
      "name": "源计划甲壳 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1116",
      "desc": "在战斗环节开始10秒后，你的弈子们回复40%已损失生命值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/secondwind1.png",
      "name": "复苏之风 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1133",
      "desc": "如果你的棋盘上恰好拥有相同英雄的2个弈子，那么他们都会获得22点法术强度、攻击力、护甲、魔法抗性。当你将弈子升到3星时，获得该英雄的1个2星弈子。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/doubletrouble1.png",
      "name": "好事成双 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1135",
      "desc": "你的3费英雄获得133血量上限，13初始蓝量和13%攻击速度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/triforce1.png",
      "name": "三费之力 I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1147",
      "desc": "当你到达9级时，提供40金币。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/lategamespecialist1.png",
      "name": "后期专家",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1148",
      "desc": "提供5金币。每个回合开始时，处在备战席最右侧3个栏位的英雄们变为随机的同费用英雄。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/pandora_sbench2.png",
      "name": "潘朵拉的备战席",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1149",
      "desc": "你在接下来的3回合里无法采取任何行动。在此之后，获得20金币。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/afk1.png",
      "name": "开摆",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1151",
      "desc": "你的弈子们在每次击杀一名敌人后，会永久获得1攻击力。弈子们开始时拥有8额外攻击力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/combattraining2.png",
      "name": "实战训练I",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1152",
      "desc": "在战斗环节开始时，你的两两相邻的弈子们获得10%攻击速度和15护甲。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bestfriends1.png",
      "name": "最佳好友I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1153",
      "desc": "在战斗环节开始时，你的弈子们如果与一个超过2000生命值的友方弈子相邻，则他们的所受伤害减少10%，持续到战斗环节结束为止。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bigfriend1.png",
      "name": "大哥罩我I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1154",
      "desc": "你备战席上的英雄们每回合永久获得6攻击力和法术强度，至多获得24。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/preparation1.png",
      "name": "伺机待发I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1156",
      "desc": "提供一名【凯隐】，你的队伍会被视为拥有1名额外的【刺客】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/assassinheart1.png",
      "name": "刺客之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1157",
      "desc": "提供一名【娜美】，你的队伍会被视为拥有1名额外的【星界龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/astralheart1.png",
      "name": "星界龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1159",
      "desc": "提供一名【慎】，你的队伍会被视为拥有1名额外的【格斗家】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bruiserheart1.png",
      "name": "格斗家之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1160",
      "desc": "在战斗环节结束时，在战斗开始时与【格斗家】们相邻的弈子们会永久获得30生命值，并且如果存活下来，生命值加成会提升20。提供1个【慎】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/personaltraining2.png",
      "name": "私教训练",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1161",
      "desc": "提供一名【崔丝塔娜】，你的队伍会被视为拥有1名额外的【强袭炮手】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/canoneerheart1.png",
      "name": "强袭炮手之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1162",
      "desc": "提供一名【莉莉娅】，你的队伍会被视为拥有1名额外的【重骑兵】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cavalierheart1.png",
      "name": "重骑兵之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1164",
      "desc": "提供一名【璐璐】，你的队伍会被视为拥有1名额外的【魔导师】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/evokerheart1.png",
      "name": "魔导师之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1165",
      "desc": "提供一名【锤石】，你的队伍会被视为拥有1名额外的【护卫】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guardianheart1.png",
      "name": "护卫之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1166",
      "desc": "提供一名【图奇】，你的队伍会被视为拥有1名额外的【冒险家】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guildheart1.png",
      "name": "冒险家之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1167",
      "desc": "提供一名【纳尔】，你的队伍会被视为拥有1名额外的【玉龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/jadeheart1.png",
      "name": "玉龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1168",
      "desc": "敌人们在首次攻击一个【玉猫雕像】或是受到来自【玉猫雕像】爆炸的伤害时，会被缴械2.5秒。提供1个【纳尔】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/penitence1.png",
      "name": "忏悔",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1169",
      "desc": "提供一名【娜美】，你的队伍会被视为拥有1名额外的【法师】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mageheart1.png",
      "name": "法师之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1170",
      "desc": "提供一名【永恩】，你的队伍会被视为拥有1名额外的【幻镜龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mirageheart1.png",
      "name": "幻镜龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1171",
      "desc": "提供一名【娜美】，你的队伍会被视为拥有1名额外的【秘术师】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mysticheart1.png",
      "name": "秘术师之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1172",
      "desc": "提供一名【慎】，你的队伍会被视为拥有1名额外的【怒翼龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ragewingheart1.png",
      "name": "怒翼龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1173",
      "desc": "【怒翼龙】们的每第5段伤害多造成33%伤害并转化为真实伤害。提供1个【凯隐】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/scorch1.png",
      "name": "焦灼",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1174",
      "desc": "提供一名【金克丝】，你的队伍会被视为拥有1名额外的【神龙烈焰】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/revelheart1.png",
      "name": "神龙烈焰之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1176",
      "desc": "提供一名【布隆】，你的队伍会被视为拥有1名额外的【屠龙勇士】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/scalescornheart1.png",
      "name": "屠龙勇士之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1178",
      "desc": "提供一名【纳尔】，你的队伍会被视为拥有1名额外的【换形师】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/shapeshifterheart1.png",
      "name": "换形师之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1179",
      "desc": "提供一名【凯隐】，你的队伍会被视为拥有1名额外的【金鳞龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/shimmerscaleheart1.png",
      "name": "金鳞龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1180",
      "desc": "提供一名【图奇】，你的队伍会被视为拥有1名额外的【迅捷射手】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/swiftshotheart1.png",
      "name": "迅捷射手之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1181",
      "desc": "提供一名【奇亚娜】，你的队伍会被视为拥有1名额外的【风暴龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/tempestheart1.png",
      "name": "风暴龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1182",
      "desc": "提供一名【永恩】，你的队伍会被视为拥有1名额外的【狂刃战士】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/warriorheart.png",
      "name": "狂刃战士之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1183",
      "desc": "提供一名【锤石】，你的队伍会被视为拥有1名额外的【幽影龙】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/whispersheart1.png",
      "name": "幽影龙之心",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "1243",
      "desc": "你的弈子们在击杀时回复20法力值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/axiomarc1.png",
      "name": "公理圆弧I",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2001",
      "desc": "提供10金币。你的最大利息提升至7。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/richgetricher2.png",
      "name": "利滚利",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2012",
      "desc": "在战斗环节开始时，己方邻格内没有友军的弈子会获得相当于其35%最大生命值的护盾值，持续10秒。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/exiles2.png",
      "name": "浪人 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2016",
      "desc": "你的弈子们受到的所有治疗和护盾效果提升35%",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/firstaidkit2.png",
      "name": "急救用具 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2017",
      "desc": "你的弈子们只要不具有任何已激活的羁绊，就会获得一定的300/400/500/600生命值和50/60/70/80%攻击速度，属性加成会随阶段数的增长而提升。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/builtdifferent2.png",
      "name": "卓尔不群 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2018",
      "desc": "你的英雄只要携带了1件装备，就会获得200生命值和15攻击力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cybernetic2.png",
      "name": "源计划植入 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2019",
      "desc": "你的队伍每激活一个羁绊，你的弈子们就会获得2攻击力和法术强度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/standunited2.png",
      "name": "并肩作战 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2020",
      "desc": "你的1阶和2阶弈子们获得35%攻击速度和移动速度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/featherweights2.png",
      "name": "羽量级选手 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2022",
      "desc": "你的弈子们获得相当于20%攻击和技能已造成伤害值的治疗效果。溢出的治疗效果会转化为一层护盾，护盾值上限为450。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/celestialblessing2.png",
      "name": "星界赐福 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2023",
      "desc": "己方没有携带任何装备的弈子们，都会获得45护甲和魔法抗性",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/makeshift2.png",
      "name": "应急护甲 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2024",
      "desc": "你的弈子们在击杀时治疗自身700生命值",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/thrillhunt2.png",
      "name": "狩猎律动 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2068",
      "desc": "每回合提供额外的5经验值。你不再能够用金币购买经验值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/slowandsteady3.png",
      "name": "前进之路",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2069",
      "desc": "每回合提供1次免费的商店刷新。立刻提供8金币。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/trade2.png",
      "name": "DD街区+",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2070",
      "desc": "提供3个【灌铅骰子】和8金币",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/grandgambler3.png",
      "name": "掷骰狂人",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2071",
      "desc": "提供1本【纹章之书】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ancientarchives2.png",
      "name": "古代档案",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2087",
      "desc": "在战斗环节开始时，灼烧所有敌人，在15秒里持续共造成相当于各敌人10%最大生命值的伤害并使受到的治疗效果降低50%",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/sunfireboard2.png",
      "name": "日炎棋盘",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2088",
      "desc": "提供30金币",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/windfall3.png",
      "name": "意外之财+",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2099",
      "desc": "在战斗环节开始时，己方携带了2件装备或基础装备的英雄们会获得1件随机的临时成装。提供一件随机基础装备。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/binaryairdrop3.png",
      "name": "二进制空投",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2103",
      "desc": "当你的弈子受到暴击时，对周围1格的敌人造成85-145（基于当前阶段)魔法伤害。(1秒冷却时间)",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/electrocharge2.png",
      "name": "电火花 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2105",
      "desc": "当你的弈子造成技能伤害时，命中的第一个目标及其附近的一个敌人会受到 55/90/125/160 (基于当前阶段)魔法伤害。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/luden_secho2.png",
      "name": "卢登的回声 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2109",
      "desc": "你的弈子们只要没有携带任何装备，就会每秒回复6法力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/meditation2.png",
      "name": "冥想 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2110",
      "desc": "你的弈子只要携带了1件装备，就会获得200生命值并且每秒回复3法力。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticuplink2.png",
      "name": "源计划上行链路 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2111",
      "desc": "你的弈子只要携带了1件装备，就会获得200生命值和30护甲。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticshell2.png",
      "name": "源计划甲壳 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2114",
      "desc": "你的弈子们在施放技能后会恢复至20点法力值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bluebattery2.png",
      "name": "蓝电池",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2116",
      "desc": "在战斗环节开始10秒后，你的弈子们回复60%已损失生命值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/secondwind2.png",
      "name": "复苏之风 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2127",
      "desc": "你棋盘上(不包含备战区)的弈子们会永久变形为一个费用比自身高1的随机弈子（龙神只能变成龙神，非龙神只能变成非龙神）。提供2个装备拆卸器。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/recombobulator1.png",
      "name": "变形重组器",
      "level": "1",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2128",
      "desc": "来自你的弈子们的技能的魔法伤害和真实伤害可以造成暴击。你的弈子们获得25%暴击几率。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/jeweledlotus2.png",
      "name": "珠光莲花",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2129",
      "desc": "你的弈子们在战斗开始后的最初15秒里免疫控制效果。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/verdantveil3.png",
      "name": "神佑面纱",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2133",
      "desc": "如果你的棋盘上恰好拥有相同英雄的2个弈子，那么他们都会获得33点法术强度、攻击力、护甲、魔法抗性。当你将弈子升到3星时，获得该英雄的1个2星弈子。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/doubletrouble2.png",
      "name": "好事成双 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2135",
      "desc": "你的3费英雄获得233血量上限，23初始蓝量和23%攻击速度",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/triforce2.png",
      "name": "三费之力 II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2138",
      "desc": "提供1个随机的2星1阶弈子和1个随机的2星2阶弈子。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/truetwos2.png",
      "name": "二星成双",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2144",
      "desc": "提供3件随机基础装备。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/componentgrabbag2.png",
      "name": "组件百宝袋",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2152",
      "desc": "在战斗环节开始时，你的两两相邻的弈子们获得20%攻击速度和25护甲。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bestfriends2.png",
      "name": "最佳好友II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2153",
      "desc": "在战斗环节开始时，你的弈子们如果与一个超过2000生命值的友方弈子相邻，则他们的所受伤害减少18%，持续到战斗环节结束为止。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bigfriend2.png",
      "name": "大哥罩我II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2154",
      "desc": "你备战席上的英雄们每回合永久获得8攻击力和法术强度，至多获得32。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/preparation2.png",
      "name": "伺机待发II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2185",
      "desc": "提供1个【金铲铲】和1件随机基础装备。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/urfsgrabbag2.png",
      "name": "阿福的百宝袋I",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2186",
      "desc": "在你第一次要被淘汰或被降到1生命值时，你会依然保持存活。在这个效果触发后，你的弈子们永久获得200生命值、20护甲和魔法抗性、以及20%全能吸血。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/laststand2.png",
      "name": "背水一战",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2187",
      "desc": "商店刷新是免费的，直到这个回合结束为止。羁绊和其它强化不会受益于这些免费刷新。提供8金币。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/thinkfast3.png",
      "name": "快速思考",
      "level": "3",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2188",
      "desc": "直接伤害类装备造成相当于33%伤害的额外真实伤害。提供1个【斯塔缇克电刃】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/gadgetexpert2.png",
      "name": "器械专家",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2189",
      "desc": "如果你的备战区在回合结束时是满的，获得4经验。（只会出现在 2-1回合）",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/dizzy2.png",
      "name": "纷乱头脑",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2191",
      "desc": "提供团队增益的光环类装备的效果增强33%。提供1个【钢铁烈阳之匣】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bettertogether2.png",
      "name": "在一起更好",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2192",
      "desc": "提供一名【凯隐】和一个【刺客纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/assassincrest2.png",
      "name": "刺客之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2193",
      "desc": "【刺客】们会对他们攻击的第一个目标造成【破法】效果，使目标的最大法力值提升50%，持续到目标施放技能为止。【刺客】们对被【破法】的敌人们造成的伤害提升10%。提供1个【奇亚娜】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cutthroat2.png",
      "name": "割喉之战",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2195",
      "desc": "【星界龙法球】有100%几率生成一颗包含额外战利品的次级法球。提供1个【娜美】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/intercosmictreasure2.png",
      "name": "星间赠礼",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2196",
      "desc": "提供一名【慎】和一个【格斗家纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bruiseremblem2.png",
      "name": "格斗家之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2197",
      "desc": "【格斗家】们获得相当于其1.5%生命值的攻击力。提供1个【慎】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/titanicstrength2.png",
      "name": "泰坦之力",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2198",
      "desc": "提供一名【金克丝】和一个【强袭炮手纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/canoneercrest2.png",
      "name": "强袭炮手之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2199",
      "desc": "【强袭炮手】的炮击在命中时会灼烧目标，在2秒里持续造成真实伤害，总额相当于目标8%的最大生命值，并在灼烧期间降低50%治疗效果。提供1个【崔丝塔娜】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/hotshot2.png",
      "name": "热辣炮击",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2201",
      "desc": "提供一名【瑟庄妮】和一个【重骑兵纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cavaliercrest2.png",
      "name": "重骑兵之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2202",
      "desc": "【重骑兵】羁绊会将其加成提供给你的所有弈子。这个效果不会影响【重骑兵】的羁绊人数。提供1个【莉莉娅】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cavalierunity2.png",
      "name": "重骑兵阵线",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2203",
      "desc": "【重骑兵】在冲锋后的第一次攻击造成85魔法伤害，其所拥有的每点护甲和魔法抗性都会使这个伤害提升1%。提供1个【莉莉娅】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/devastatingcharge2.png",
      "name": "毁灭冲锋",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2204",
      "desc": "【龙神】羁绊保持激活状态，无论你登场了多少个【龙神】。【龙神】们获得25护甲和魔法抗性。提供1个4阶【龙神】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/dragonbrood2.png",
      "name": "龙神联盟",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2205",
      "desc": "【龙神】羁绊保持激活状态，无论你登场了多少个【龙神】。【龙神】们获得15攻击力和法术强度。提供1个4阶【龙神】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/dragonsanctuary2.png",
      "name": "龙神部落",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2207",
      "desc": "当【神龙尊者】【英豪】参与一次击杀后，与这个【神龙尊者】【英豪】拥有一个相同羁绊的弈子们都会获得持续4秒的70%攻击速度。提供1个【艾希】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/inspire2.png",
      "name": "鼓舞",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2209",
      "desc": "提供一名【璐璐】和一个【魔导师纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/evokercrest2.png",
      "name": "魔导师之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2210",
      "desc": "【魔导师】的攻击会从目标身上窃取5法力值。提供1个【璐璐】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/essencetheft2.png",
      "name": "摄魂夺魄",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2211",
      "desc": "提供一名【布隆】和一个【护卫纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guardiancrest2.png",
      "name": "护卫之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2212",
      "desc": "每过2秒，【护卫】们就会嘲讽距离内的敌人们。敌人们在攻击一名【护卫】的护盾时，会受到魔法伤害，数额相当于这个带护盾的弈子的7%最大生命值(每秒至多触发1次)。提供1个【锤石】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/heroicpresence2.png",
      "name": "英勇气场",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2213",
      "desc": "提供一名【图奇】和一个【冒险家纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guildcrest2.png",
      "name": "冒险家之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2214",
      "desc": "你的【冒险家】只要携带了1件装备，就会获得35护甲以及该【冒险家】的一个额外的250%基础【冒险家】加成。提供1个【图奇】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guildinvitation2.png",
      "name": "装备升级",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2215",
      "desc": "在你至少激活【(2) 冒险家】时，每与玩家战斗4个回合，就会获得1件随机基础装备。提供1个【图奇】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/lootmaster2.png",
      "name": "战利品大师",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2216",
      "desc": "提供一名【艾希】和一个【玉龙纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/jadecrest2.png",
      "name": "玉龙之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2217",
      "desc": "每当你的一个【玉龙】弈子即将阵亡时，相距最近的【玉猫雕像】就会保护这个弈子，牺牲该【玉猫雕像】的70%最大生命值并将200%的牺牲生命值转移给这个弈子。提供1个【艾希】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/eternalprotection2.png",
      "name": "永恒保护",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2218",
      "desc": "提供一名【弗拉基米尔】和一个【法师纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/magecrest2.png",
      "name": "法师之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2219",
      "desc": "在与一位玩家的战斗之后，一个随机的【法师】将传送到你的备战席。提供1个【莉莉娅】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mageconference2.png",
      "name": "法师学会",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2220",
      "desc": "提供一名【努努】和一个【幻镜龙纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/miragecrest2.png",
      "name": "幻镜龙之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2221",
      "desc": "在战斗环节开始后的最初6秒里，【幻镜龙】们所受伤害降低90%。提供1个【永恩】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/hallucinate2.png",
      "name": "幻像",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2222",
      "desc": "提供一名【璐璐】和一个【秘术师纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mysticcrest2.png",
      "name": "秘术师之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2223",
      "desc": "提供一名【凯隐】和一个【怒翼龙纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ragewingcrest2.png",
      "name": "怒翼龙之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2224",
      "desc": "在【怒翼龙】第一次施放其技能后，该【怒翼龙】回复100%最大怒气值。提供1个【凯隐】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/untamedinferno2.png",
      "name": "勃然大怒",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2226",
      "desc": "在【神龙烈焰】英雄们参与一次击杀后，他们获得持续4秒的80%攻击速度。提供1个【金克丝】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/partytime2.png",
      "name": "派对时间",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2227",
      "desc": "【神龙烈焰】英雄们每场战斗每释放6个焰火，就会提供1金币。此外，在第一次总共释放75个焰火时提供一个特别奖。提供1个【金克丝】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/partyfavors2.png",
      "name": "派对礼品",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2228",
      "desc": "提供一名【布隆】和一个【屠龙勇士徽章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/scalescorncrest2.png",
      "name": "屠龙勇士之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2230",
      "desc": "在战斗环节开始时，你的弈子们如果与2个或以上的友方【换形师】相邻，则会获得35%攻击速度和移动速度。【换形师】们总会获得这个加成。提供1个【纳尔】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/beastsden2.png",
      "name": "猛兽之巢",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2231",
      "desc": "提供一名【凯隐】和一个【金鳞龙纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/shimmerscalecrest2.png",
      "name": "金鳞龙之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2233",
      "desc": "如果你在备战环节既购买了1次商店刷新又购买了1次经验值，那么【金鳞龙】英雄们和携带了金鳞龙装备的英雄会在下一个战斗环节中获得40%伤害加成。提供1个【凯隐】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/recklessspending2.png",
      "name": "肆意消费",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2234",
      "desc": "提供一名【艾希】和一个【迅捷射手纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/swiftshotcrest2.png",
      "name": "迅捷射手之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2235",
      "desc": "你的【迅捷射手】们的攻击会对目标施加一个持续5秒的层数。每第3个层数会造成相当于目标5%最大生命值的真实伤害。提供1个【图奇】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/presstheattack2.png",
      "name": "强攻",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2236",
      "desc": "提供一名【奇亚娜】和一个【风暴龙】纹章",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/tempestcrest2.png",
      "name": "风暴龙之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2237",
      "desc": "棋盘中心的弈子获得45法术强度，这个加成会在【风暴龙】的闪电打击后提升至135。提供1个【奇亚娜】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/eyeofthestorm2.png",
      "name": "风暴之眼",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2238",
      "desc": "在【驯龙大师】们投喂幼龙时，有33%几率秘密投喂一个额外的小点心。提供1个【崔丝塔娜】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/secretsnax2.png",
      "name": "秘密点心",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2239",
      "desc": "提供一名【慎】和一个【狂刃战士纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/warriorcrest.png",
      "name": "狂刃战士之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2240",
      "desc": "【狂刃战士】的强化攻击对目标附近1格半径内的敌人们造成40%伤害。提供1个【永恩】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/tiamat2.png",
      "name": "提亚马特",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2243",
      "desc": "你的弈子们在击杀时回复30法力值。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/axiomarc2.png",
      "name": "公理圆弧II",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2244",
      "desc": "【强袭炮手】的炮击可以弹射一次，造成的伤害降低33%。提供1个【崔丝塔娜】。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ricochet2.png",
      "name": "弹射",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "2252",
      "desc": "提供一名【艾希】和一个【神龙尊者纹章】",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/dragonmancercrest2.png",
      "name": "神龙尊者之徽",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },
    {
      "id": "3001",
      "desc": "提供15金币。你的最大利息提升至7。",
      "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/richgetricher2.png",
      "name": "利滚利加强版",
      "level": "2",
      "fetterId": "",
      "fetterType": "0"
    },

  {
    "id": "3008",
    "desc": "在你购买经验值的时候，提供额外的3经验值。你现在可以升到10级。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/levelup3.png",
    "name": "升级咯！",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3012",
    "desc": "在战斗环节开始时，己方邻格内没有友军的弈子会获得相当于其50%最大生命值的护盾值，持续10秒。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/exiles3.png",
    "name": "浪人 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3017",
    "desc": "你的弈子们只要不具有任何已激活的羁绊，就会获得一定的400/500/600/700生命值和60/70/80/90%攻击速度，属性加成会随阶段数的增长而提升。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/builtdifferent3.png",
    "name": "卓尔不群 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3018",
    "desc": "你的英雄只要携带了1件装备，就会获得300生命值和25攻击力。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cybernetic3.png",
    "name": "源计划植入 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3019",
    "desc": "你的队伍每激活一个羁绊，你的弈子们就会获得3攻击力和法术强度",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/standunited3.png",
    "name": "并肩作战 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3020",
    "desc": "你的1阶和2阶弈子们获得60%攻击速度和移动速度",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/featherweights3.png",
    "name": "羽量级选手 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3022",
    "desc": "你的弈子们获得相当于35%攻击和技能已造成伤害值的治疗效果。溢出的治疗效果会转化为一层护盾，护盾值上限为600。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/celestialblessing3.png",
    "name": "星界赐福 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3023",
    "desc": "己方没有携带任何装备的弈子们，都会获得65护甲和魔法抗性",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/makeshift3.png",
    "name": "应急护甲 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3066",
    "desc": "提供+1最大队伍规模。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/newrecruit3.png",
    "name": "新人入队",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3067",
    "desc": "提供2件随机成装和2个【重铸器】",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/itemgrabbag3.png",
    "name": "百宝袋 II",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3068",
    "desc": "提供2个【窃贼手套】",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bandthieves3.png",
    "name": "窃贼帮派 II",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3071",
    "desc": "获得2本【纹章之书】",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ancientarchives3.png",
    "name": "古代档案 II",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3088",
    "desc": "提供40金币",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/windfall3.png",
    "name": "意外之财++",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3093",
    "desc": "开启一个武器库，并从3件由奥恩打造的独特宝物之中选出1件。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/portableforge2.png",
    "name": "便携锻炉",
    "level": "2",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3102",
    "desc": "知道你下一回合将要和谁战斗，提供1个【寒风】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/divineintervention3.png",
    "name": "未来视野 II",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3103",
    "desc": "当你的弈子受到暴击时，对周围1格的敌人造成 115/155/195/235（基于当前阶段)魔法伤害。(1秒冷却时间)",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/electrocharge3.png",
    "name": "电火花 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3105",
    "desc": "当你的弈子造成技能伤害时，命中的第一个目标及其附近的一个敌人会受到 90/140/190/240 (基于当前阶段)魔法伤害。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/luden_secho3.png",
    "name": "卢登的回声 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3109",
    "desc": "你的弈子们只要没有携带任何装备，就会每秒回复8法力。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/meditation3.png",
    "name": "冥想 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3110",
    "desc": "你的弈子只要携带了1件装备，就会获得300生命值并且每秒回复4法力。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticuplink3.png",
    "name": "源计划上行链路 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3111",
    "desc": "你的弈子只要携带了1件装备，就会获得300生命值和40护甲。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cyberneticshell3.png",
    "name": "源计划甲壳 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3132",
    "desc": "开启一个武器库，并从5件独特光明武器之中选出1件。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/radiantrelics3.png",
    "name": "光明圣物",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3133",
    "desc": "如果你的棋盘上恰好拥有相同英雄的2个弈子，那么他们都会获得44点法术强度、攻击力、护甲、魔法抗性。当你将弈子升到3星时，获得该英雄的1个2星弈子。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/doubletrouble3.png",
    "name": "好事成双 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3135",
    "desc": "你的3费英雄获得333血量上限，33初始蓝量和33%攻击速度",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/triforce3.png",
    "name": "三费之力 III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3136",
    "desc": "你的小小英雄回复30生命值、变得更大并且拥有130最大生命值。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/tinytitans1.png",
    "name": "小巨人",
    "level": "1",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3137",
    "desc": "提供一个大金蛋，需要11个回合来孵化。玩家在战斗回合获胜后会使孵化计时器加速一个额外的回合。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/thegoldenegg3.png",
    "name": "金蛋",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3152",
    "desc": "在战斗环节开始时，你的两两相邻的弈子们获得30%攻击速度和35护甲。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bestfriends3.png",
    "name": "最佳好友III",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3185",
    "desc": "提供1个【金铲铲】和3件随机基础装备。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/urfsgrabbag3.png",
    "name": "阿福的百宝袋II",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3246",
    "desc": "消耗6点小小英雄生命值来购买4点经验值，但你每回合回复3点生命值。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/sacrificialpact3.png",
    "name": "恶魔契约",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3247",
    "desc": "提供1个【刺客纹章】、1个【正义之手】 和1个【黛安娜】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/assassincrown3.png",
    "name": "刺客之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3249",
    "desc": "提供1个【格斗家纹章】、1个【救赎】和1个【塞拉斯】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/bruisersoul3.png",
    "name": "格斗家之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3250",
    "desc": "提供1个【强袭炮手纹章】 、1个【卢安娜的飓风】和1个【崔丝塔娜】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/canoneercrown3.png",
    "name": "强袭炮手之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3251",
    "desc": "提供1个【重骑兵纹章】、1个【救赎】和1个【努努】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cavaliercrown3.png",
    "name": "重骑兵之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3252",
    "desc": "提供1个【神龙尊者纹章】、1个【正义之手】和1个【李青】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/dragonmancersoul3.png",
    "name": "神龙尊者之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3253",
    "desc": "提供1个【魔导师纹章】、1个【朔极之矛】和1个【艾尼维亚】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/evokercrown3.png",
    "name": "魔导师之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3254",
    "desc": "提供1个【护卫纹章】、1个【日炎斗篷】和1个【布隆】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guardiancrown3.png",
    "name": "护卫之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3255",
    "desc": "提供1个【冒险家纹章】 、1个【巨人杀手】和1个【瑞兹】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/guildcrown3.png",
    "name": "冒险家之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3256",
    "desc": "你的队伍会被视为拥有1名额外的【玉龙】。提供1个【泰坦的坚决】和1个【纳尔】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/jadecrown3.png",
    "name": "玉龙之魂",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3257",
    "desc": "提供1个【法师纹章】、1个【朔极之矛】和1个【塞拉斯】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/magecrown3.png",
    "name": "法师之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3258",
    "desc": "提供1个【幻镜龙纹章】、1个【正义之手】和1个【努努】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/miragecrown3.png",
    "name": "幻镜龙之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3259",
    "desc": "你的队伍会被视为拥有1名额外的【秘术师】。提供1个【能量圣杯】和1个【璐璐】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/mysticsoul3.png",
    "name": "秘术师之魂",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3260",
    "desc": "提供1个【怒翼龙纹章】 、1个【鬼索的狂暴之刃】和1个【斯维因】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/ragewingcrown3.png",
    "name": "怒翼龙之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3261",
    "desc": "提供1个【神龙烈焰纹章】 和1个【金克丝】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/revelcrown3.png",
    "name": "神龙烈焰之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3262",
    "desc": "提供1个【屠龙勇士纹章】、1个【正义之手】和1个【黛安娜】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/scalescorncrown3.png",
    "name": "屠龙勇士之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3263",
    "desc": "你的队伍会被视为拥有1名额外的【换形师】。提供1个【日炎斗篷】和1个【伊莉丝】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/shapeshiftersoul3.png",
    "name": "换形师之魂",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3264",
    "desc": "你的队伍会被视为拥有1名额外的【金鳞龙】。提供1个【泰坦的坚决】和1个【沃利贝尔】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/shimmerscalecrown3.png",
    "name": "金鳞龙之魂",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3265",
    "desc": "提供1个【迅捷射手纹章】 、1个【鬼索的狂暴之刃】和1个【韦鲁斯】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/swiftshotcrown3.png",
    "name": "迅捷射手之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3266",
    "desc": "提供1个【风暴龙纹章】、1个【斯塔缇克电刃】和1个【李青】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/tempestcrown3.png",
    "name": "风暴龙之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3267",
    "desc": "提供1个【狂刃战士纹章】、1个【巨人杀手】和1个【永恩】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/warriorcrown.png",
    "name": "狂刃战士之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3268",
    "desc": "提供1个【幽影龙纹章】、1个【泰坦的坚决】和1个【塞拉斯】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/whisperscrown3.png",
    "name": "幽影龙之冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3269",
    "desc": "提供+2最大队伍规模，但玩家所受伤害提升100%。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/cursedcrown3.png",
    "name": "诅咒冠冕",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  },
  {
    "id": "3270",
    "desc": "立刻并且每与玩家战斗10个回合后，提供1个随机的【奥恩神器】。",
    "icon": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/hex/livingforge3.png",
    "name": "活体锻炉",
    "level": "3",
    "fetterId": "",
    "fetterType": "0"
  }
];

const HexDataList_LEVEL_THREE = [

];

export default HexDataList;
