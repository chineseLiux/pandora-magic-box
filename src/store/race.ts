
export type RaceTyping = {
  "id": string;
  "name": string;
  "color": string;
  "desc2": string;
  "maxLevel": string;
  "numList": string;
  "picture": string;
  "prefix": string;
  "setid": string;
  "tftSpecId": string;
}

const RaceDataList = [
    {
      "id": "140",
      "name": "星界龙",
      "color": "1|3|4",
      "desc2": "(3)10法术强度|(6)40法术强度；法球价值提升|(9)80法术强度；法球有45%掉落基础装备",
      "maxLevel": "3",
      "numList": "3|6|9",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_astral.png",
      "prefix": "每第5次商店刷新有额外几率出现星界龙英雄们，并且还会提供一个【星界龙法球】。你的队伍获得额外法术强度。",
      "setid": "7",
      "tftSpecId": "7101"
    },
    {
      "id": "141",
      "name": "神龙烈焰",
      "color": "1|2|3|4",
      "desc2": "(2)110魔法伤害|(3)150魔法伤害|(4)210魔法伤害|(5)290魔法伤害",
      "maxLevel": "4",
      "numList": "2|3|4|5",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_revel.png",
      "prefix": "在用一个技能造成伤害后，会发射一个焰火来对一名随机敌人造成魔法伤害。",
      "setid": "7",
      "tftSpecId": "7107"
    },
    {
      "id": "142",
      "name": "驯龙大师",
      "color": "1|3",
      "desc2": "(2)召唤【诺姆希】！|(3)【诺姆希】的技能造成200%额外伤害",
      "maxLevel": "2",
      "numList": "2|3",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_trainer.png",
      "prefix": "每一回合，每个【驯龙大师】会投喂自身星级x1个小点心给【诺姆希】，来增加生命值和法术强度。【诺姆希】的每次升星需要25个小点心！",
      "setid": "7",
      "tftSpecId": "7113"
    },
    {
      "id": "143",
      "name": "金鳞龙",
      "color": "1|2|3|4",
      "desc2": "(3)1件独特装备|(5)2件独特装备|(7)4件独特装备|(9)5件独特装备，包括【群英冠冕】",
      "maxLevel": "4",
      "numList": "3|5|7|9",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_shimmerscale.png",
      "prefix": "提供专属的随机金鳞龙装备，你可以通过将携带者放到备战席来移除其身上的【金鳞龙】装备。",
      "setid": "7",
      "tftSpecId": "7109"
    },
    {
      "id": "144",
      "name": "幽影龙",
      "color": "1|2|3|4",
      "desc2": "(2)+1攻击力和法术强度|(4)+3攻击力和法术强度|(6)+5攻击力和法术强度|(8)+8攻击力和法术强度",
      "maxLevel": "4",
      "numList": "2|4|6|8",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_whispers.png",
      "prefix": "幽影龙的伤害会使敌人们缩小，对目标造成持续6秒的40%护甲和魔抗削减。当幽影龙对一名被缩小的敌人造成伤害时，幽影龙会获得可叠加的加成：",
      "setid": "7",
      "tftSpecId": "7114"
    },
    {
      "id": "145",
      "name": "玉龙",
      "color": "1|2|3|4",
      "desc2": "(3)1座【雕像】，回复2%最大生命值，+15%攻击速度|(6)2座【雕像】，回复4%最大生命值，+40%攻击速度|(9)3座【雕像】，回复8%最大生命值，+70%攻击速度|(12)4座【雕像】，回复25%最大生命值，+200%攻击速度",
      "maxLevel": "4",
      "numList": "3|6|9|12",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_jade.png",
      "prefix": "召唤可移动且强度可成长的【玉猫雕像】。在战斗开始时处在一座雕像邻格的弈子们获得的增益会在他们身上持续存在，【雕像】邻格的友军们就会获得攻击速度，然后每2秒回复一部分最大生命值。当一个【雕像】被摧毁后，它会对附近的敌人们造成它33%最大生命值的魔法伤害。",
      "setid": "7",
      "tftSpecId": "7104"
    },
    {
      "id": "146",
      "name": "幻镜龙",
      "color": "1|2|3|4",
      "desc2": "(2)6法术强度|(4)10法术强度|(6)14法术强度|(8)18法术强度",
      "maxLevel": "4",
      "numList": "2|4|6|8",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_mirage.png",
      "prefix": "【幻镜龙】的效果在每场对局都会变化。【法术之剑的符咒】：在与玩家的战斗环节中，每次攻击提供法术强度。",
      "setid": "7",
      "tftSpecId": "7105"
    },
    {
      "id": "147",
      "name": "屠龙勇士",
      "color": "1|3|4",
      "desc2": "(2)15%魔法伤害|(4)50%魔法伤害|(6)125%魔法伤害",
      "maxLevel": "3",
      "numList": "2|4|6",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_scalescorn.png",
      "prefix": "如果你的队伍没有任何【龙神】，那么屠龙勇士们就会造成额外魔法伤害。并且2200生命值以上的敌人们对屠龙勇士们造成的伤害降低20%。",
      "setid": "7",
      "tftSpecId": "7108"
    },
    {
      "id": "148",
      "name": "冒险家",
      "color": "1|1|2|2|3|4|4",
      "desc2": "(1)100%【冒险家】加成|(2)120%【冒险家】加成|(3)140%【冒险家】加成|(4)160%【冒险家】加成|(5)180%【冒险家】加成|(6)200%【冒险家】加成|(7)250%【冒险家】加成",
      "maxLevel": "6",
      "numList": "1|2|3|4|5|6|7",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_guild.png",
      "prefix": "提供一个独特加成给你的队伍；冒险家们获得双倍数额的加成。场上的每个冒险家都会提升这个加成！【瑟庄妮】：+100生命上限，【图奇】：+10%攻速，【瑞兹】：+10法强，【泰隆】：+8攻击力，【巴德】：+2点普攻法力回复，【纹章】：+3%全能吸血(基于已造成伤害值提供治疗效果)",
      "setid": "7",
      "tftSpecId": "7103"
    },
    {
      "id": "149",
      "name": "风暴龙",
      "color": "1|2|3|4",
      "desc2": "(2)5%最大生命值的真实伤害，20%攻击速度|(4)20%最大生命值的真实伤害，50%攻击速度|(6)35%最大生命值的真实伤害，100%攻击速度|(8)50%最大生命值的真实伤害，200%攻击速度",
      "maxLevel": "4",
      "numList": "2|4|6|8",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_tempest.png",
      "prefix": "在8秒后，闪电会打击战场。敌人们会被晕眩1秒并受到他们一部分最大生命值的真实伤害。然后，【风暴龙】们获得攻击速度。",
      "setid": "7",
      "tftSpecId": "7112"
    },
    {
      "id": "150",
      "name": "窃法巧手",
      "color": "3",
      "desc2": "(1)佐伊在每次施放技能后和每个回合开始时获得一个新技能。",
      "maxLevel": "1",
      "numList": "1",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_spellthief.png",
      "prefix": "佐伊在每次施放技能后和每个回合开始时获得一个新技能。",
      "setid": "7",
      "tftSpecId": "7110"
    },
    {
      "id": "152",
      "name": "怒翼龙",
      "color": "1|2|3",
      "desc2": "(3)+50%攻击速度和+25%全能吸血(基于已造成伤害值获得治疗效果)|(6)+135%攻击速度和+50%全能吸血|(9)+250%攻击速度和+75%全能吸血",
      "maxLevel": "3",
      "numList": "3|6|9",
      "picture": "https://game.gtimg.cn/images/lol/act/jkzlk/s5/trait/s7_trait_icon_ragewing.png",
      "prefix": "固有能力：将法力值转化为怒气值；每次攻击生成15怒气。在施放一个技能后，获得持续4秒的狂怒状态：+25%攻击速度但无法获得怒气。在狂怒状态下获得属性加成：",
      "setid": "7",
      "tftSpecId": "7106"
    }
  ];

export default RaceDataList;
