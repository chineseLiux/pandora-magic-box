import styles from './index.module.less';
import {GridContent} from "@ant-design/pro-layout";
import React, { useRef, useState } from "react";
import {Menu} from "antd";
import BaseView from "@/pages/account/Settings/components/BaseView";
import SecurityView from "@/pages/account/Settings/components/SecurityView";
import BindingView from "@/pages/account/Settings/components/BindingView";
import NotificationView from "@/pages/account/Settings/components/NotificationView";

type SettingsStateKeys = 'base' | 'security' | 'binding' | 'notification';
type SettingsState = {
  mode: 'inline' | 'horizontal';
  selectKey: SettingsStateKeys;
};
const Settings = () => {
  const dom = useRef<HTMLDivElement>();
  const menuMap: Record<string, React.ReactNode> = {
    base: '基本设置',
    security: '安全设置',
    binding: '账号绑定',
    notification: '新消息通知',
  };
  const [initConfig, setInitConfig] = useState<SettingsState>({
    mode: 'inline',
    selectKey: 'base',
  });

  const menuItems = Object.keys(menuMap).map((item) => {
    return {
      key: item,
      label: (
          menuMap[item]
      )
    }
  });
  const renderChildren = () => {
    const { selectKey } = initConfig;
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      default:
        return null;
    }
  };
  return (
      <>
        <GridContent>
          <div
              className={styles.main}
              ref={(ref) => {
                if (ref) {
                  dom.current = ref;
                }
              }}
          >
            <div className={styles.leftMenu}>
              <Menu
                  mode={initConfig.mode}
                  selectedKeys={[initConfig.selectKey]}
                  onClick={({ key }) => {
                    setInitConfig({
                      ...initConfig,
                      selectKey: key as SettingsStateKeys,
                    });
                  }}
                  items={menuItems}
              />
            </div>
            <div className={styles.right}>
              <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
              {renderChildren()}
            </div>
          </div>
        </GridContent>
      </>
  )
}

export default Settings
