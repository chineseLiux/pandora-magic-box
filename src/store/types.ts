import {MenuTheme} from "antd";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CHANGE_LOCALES = 'CHANGE_LOCALES';
export type tabKeyType = 'articles' | 'applications' | 'projects';
export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

export type RouteInfo = {
  name?: string,
  icon?: string,
  path?: string,
  redirect?: string,
  element?: string
  showInMenu?:boolean,
  children?: RouteInfo[]
}

export type CurrentUser = {
  token?: string;
  userId?: string;
  userName?: string;
  userAccount?: string;
  avatar?: string;
  email?: string;
  signature?: string;
  title?: string;
  group?: string;
  tags?: { key?: string; label?: string }[];
  notifyCount?: number;
  notice?: NoticeType[];
  unreadCount?: number;
  country?: string;
  access?: string;
  geographic?: {
    province?: { label?: string; key?: string };
    city?: { label?: string; key?: string };
  };
  address?: string;
  phone?: string;
  routes?: RouteInfo[]
} | null

export type Settings = {
  /**
   * @name theme for nav menu
   *
   * @type  "light" | "dark" | "realDark"
   */
  navTheme?: MenuTheme | 'realDark' | undefined;
  locale?: string;
  /**
   * @name layout 的布局方式
   * @type  'side' | 'top' | 'mix'
   *
   * @example 顶部菜单 layout="top"
   * @example 侧边菜单 layout="side"
   * @example 混合布局 既有顶部也有侧边 layout="mix"
   */
  layout?: 'side' | 'top' | 'mix';

}


export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type ListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};

export type NoticeIconItemType = 'notification' | 'message' | 'event';

export type NoticeIconItem = {
  id?: string;
  extra?: string;
  key?: string;
  read?: boolean;
  avatar?: string;
  title?: string;
  status?: string;
  datetime?: string;
  description?: string;
  type?: NoticeIconItemType;
};
