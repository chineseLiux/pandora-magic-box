import {connect} from "react-redux";
import { Button, Input, Upload, message } from 'antd';
import {CurrentUser} from "@/redux/store/typings";
import ProForm, {
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import styles from './index.module.less';
import {UploadOutlined} from "@ant-design/icons";
const AvatarView = ({ avatar }: { avatar: string }) => (
    <>
      <div className={styles.avatar_title}>头像</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
);
const BaseView = ({currentUser}: {currentUser: CurrentUser}) => {
  let loading = false;
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };
  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };
  return (
      <>
        <div className={styles.baseView}>
          {loading ? null : (
              <>
                <div className={styles.left}>
                  <ProForm
                      layout="vertical"
                      onFinish={handleFinish}
                      submitter={{
                        resetButtonProps: {
                          style: {
                            display: 'none',
                          },
                        },
                        submitButtonProps: {
                          children: '更新基本信息',
                        },
                      }}
                      initialValues={{
                        ...currentUser,
                        phone: currentUser?.phone?.split('-'),
                      }}
                      hideRequiredMark
                  >
                    <ProFormText
                        width="md"
                        name="email"
                        label="邮箱"
                        rules={[
                          {
                            required: true,
                            message: '请输入您的邮箱!',
                          },
                        ]}
                    />
                    <ProFormText
                        width="md"
                        name="name"
                        label="昵称"
                        rules={[
                          {
                            required: true,
                            message: '请输入您的昵称!',
                          },
                        ]}
                    />
                    <ProFormTextArea
                        name="profile"
                        label="个人简介"
                        rules={[
                          {
                            required: true,
                            message: '请输入个人简介!',
                          },
                        ]}
                        placeholder="个人简介"
                    />
                    <ProFormSelect
                        width="sm"
                        name="country"
                        label="国家/地区"
                        rules={[
                          {
                            required: true,
                            message: '请输入您的国家或地区!',
                          },
                        ]}
                        options={[
                          {
                            label: '中国',
                            value: 'China',
                          },
                        ]}
                    />
                    <ProFormText
                        width="md"
                        name="address"
                        label="街道地址"
                        rules={[
                          {
                            required: true,
                            message: '请输入您的街道地址!',
                          },
                        ]}
                    />
                    <ProFormFieldSet
                        name="phone"
                        label="联系电话"
                        rules={[
                          {
                            required: true,
                            message: '请输入您的联系电话!',
                          },
                        ]}
                    >
                      <Input className={styles.area_code} />
                      <Input className={styles.phone_number} />
                    </ProFormFieldSet>
                  </ProForm>
                </div>
                <div className={styles.right}>
                  <AvatarView avatar={getAvatarURL()} />
                </div>
              </>
          )}
        </div>
      </>
  )
}
const mapStateToProps = ({currentUser}: {currentUser: CurrentUser}) => ({
  currentUser: currentUser
})
export default connect(mapStateToProps)(BaseView)
