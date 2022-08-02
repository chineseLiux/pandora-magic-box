import {CurrentUser} from "src/store/types";


const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const userData: CurrentUser = {
  userId: '00000001',
  userName: 'Serati Ma',
  userAccount: 'dove__lx',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  email: 'dove__lx@aliyun.com',
  signature: '海纳百川，有容乃大',
  title: '研发工程师',
  group: '平台部',
  tags: [
    {
      key: '0',
      label: 'java',
    },
    {
      key: '1',
      label: 'python',
    },
    {
      key: '2',
      label: 'rust',
    },
    {
      key: '3',
      label: 'vue',
    },
    {
      key: '4',
      label: 'react',
    },
  ],
  notice: [
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      updatedAt: new Date().toString(),
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: new Date('2017-07-24').toString(),
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: new Date().toString(),
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23').toString(),
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23').toString(),
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23').toString(),
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  geographic: {
    province: {
      label: '河北省',
      key: '330000',
    },
    city: {
      label: '邯郸市',
      key: '330100',
    },
  },
  address: '复兴区建设路 77 号',
  phone: '+86-18310200720',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'DashboardOutlined',
      redirect: '/dashboard/workplace',
      children: [
        {
          name: '分析页',
          icon: 'DashboardOutlined',
          path: 'analysis',
          element: 'dashboard/Analysis/index.tsx'
        },
        {
          name: '监控页',
          icon: 'DashboardOutlined',
          path: 'monitor',
          element: 'dashboard/Monitor/index.tsx'
        },
        {
          name: '工作台',
          icon: 'DashboardOutlined',
          path: 'workplace',
          element: 'dashboard/Workplace/index.tsx'
        },
      ],
    },
    {
      path: '/account',
      name: '个人中心',
      icon: 'UserOutlined',
      children: [
        {
          name: '个人信息',
          icon: 'UserOutlined',
          path: 'center',
          element: 'account/Center/index.tsx'
        },
        {
          name: '个人设置',
          icon: 'UserOutlined',
          path: 'settings',
          element: 'account/Settings/index.tsx'
        },
      ],
    },
    {
      path: '/system',
      name: '系统配置',
      icon: 'SettingOutlined',
      children: [
        {
          name: '用户管理',
          icon: 'UserOutlined',
          path: 'userManager',
          element: 'system/UserManager/index.tsx'
        },
      ],
    },
  ]
}

export default userData
