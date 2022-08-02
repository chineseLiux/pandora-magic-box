import styles from '../index.module.less';
import {Avatar, Menu} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import HeaderDropdown from "@/components/HeaderDropdown";
import {connect} from "react-redux";
import {CurrentUser} from "@/store/types";
import {setCurrentUser} from "@/store/actions";
import {Dispatch} from "@reduxjs/toolkit";
import {useCallback} from "react";
import type { MenuInfo } from 'rc-menu/lib/interface';
import {useNavigate} from "react-router-dom";


const AvatarDropdown = ({menu, currentUser, dispatch}: {menu: boolean, currentUser: CurrentUser, dispatch: Dispatch}) => {

  const navigate = useNavigate();
  const onMenuClick = useCallback(
      (event: MenuInfo) => {
        const { key } = event;
        if (key === 'logout') {
          dispatch(setCurrentUser(null));
          navigate('/login');
          return;
        }
        navigate(`/account/${key}`);
      },
      [dispatch, navigate]
  )
  const menuItem: any = [];

  if (menu) {
    menuItem.push({
      key: 'center',
      label: (
          <>
            <UserOutlined />
            个人中心
          </>
      )
    },{
      key: 'settings',
      label: (
          <>
            <SettingOutlined />
            个人设置
          </>
      )
    },{
      type: 'divider'
    });
  }

  menuItem.push({
    key: 'logout',
    label: (
        <>
          <LogoutOutlined />
          退出登录
        </>
    )
  })
  const menuHeaderDropdown = (
      <Menu
          className={styles.menu}
          selectedKeys={[]}
          onClick={onMenuClick}
          items={menuItem}
      />
  );
  return (
      <>
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={currentUser?.avatar} alt="avatar" />
            <span className={`${styles.name} anticon`}>{currentUser?.userName}</span>
          </span>
        </HeaderDropdown>
      </>
  )
}

const mapStateToProps = ({currentUser}: {currentUser: CurrentUser}) => ({
  currentUser: currentUser
})
export default connect(mapStateToProps)(AvatarDropdown)
