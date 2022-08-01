import styles from './index.module.less';
import {connect} from "react-redux";
import {CurrentUser, Settings} from "src/store/types";
import { Space } from 'antd';
import SelectLang from "@/components/SelectLang";
import Avatar from './AvatarDropdown';
import NoticeIconView from "src/pages/layout/RightContent/NoticeIconView";
const RightContent = ({_currentUser, settings}: {_currentUser: CurrentUser, settings: Settings}) => {
  const { navTheme, layout } = settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
      <>
        <Space className={className}>
          <NoticeIconView />
          <Avatar menu />
          <SelectLang className={styles.action} />
        </Space>
      </>
  )
}


const mapStateToProps = (state: any) => ({
  currentUser: state.currentUser,
  settings: state.settings
})
export default connect(mapStateToProps)(RightContent)

