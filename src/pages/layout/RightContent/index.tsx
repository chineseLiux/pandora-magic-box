import styles from './index.module.less';
import {connect} from "react-redux";
import { Settings } from "@/store/types";
import { Space } from 'antd';
import Avatar from './AvatarDropdown';
import NoticeIconView from "@/pages/layout/RightContent/NoticeIconView";
const RightContent = ({settings}: {settings: Settings}) => {
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
        </Space>
      </>
  )
}


const mapStateToProps = (state: {settings: Settings}) => ({
  settings: state.settings
})
export default connect(mapStateToProps)(RightContent)

