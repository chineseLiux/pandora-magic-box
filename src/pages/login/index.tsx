import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Divider, message, Space, Tabs } from 'antd';
import type { CSSProperties } from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {CurrentUser} from "../../store/types";
import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {setCurrentUser} from "../../store/actions";
import userData from "../../pages/login/userData";

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const Login = ({currentUser, dispatch}: {currentUser: CurrentUser, dispatch: Dispatch}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard/workplace');
    }
  })
  const submit = async ({username, password}: { username: string, password: string }) => {
    await waitTime(1000);
    if (username !== 'admin' || password !== '123123') {
      message.error('账号或密码错误！')
      return;
    }
    dispatch(setCurrentUser(userData));
    message.success('登录成功！');
    navigate('/dashboard/workplace');
  }
  const [loginType, setLoginType] = useState<LoginType>('account');
  return (
      <div style={{ backgroundColor: 'white', height: 'calc(100vh)'}}>
        <LoginFormPage
            backgroundImageUrl="/src/images/login-bg2.jpeg"
            logo="src/images/logo/logo.svg"
            title="Pandora Magic Box"
            subTitle="全球最大的个人自定义平台"
            activityConfig={{
              style: {
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                color: '#d3f261',
                borderRadius: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              title: '潘多拉',
              subTitle: '希腊神话中火神赫淮斯托斯或宙斯用粘土做成的地上的第一个女人，作为对普罗米修斯造人和盗火的惩罚送给人类的第一个女人。众神亦加入使她拥有更诱人的魅力。根据神话，潘多拉打开魔盒，释放出人世间的所有邪恶——贪婪、虚伪、诽谤、嫉妒、痛苦等等，但潘多拉却照众神之王宙斯的旨意趁希望没有来得及释放时，又盖上了盒盖，最后把它永远锁在盒内。',
              action: (
                  <Button
                      type="link"
                      style={{
                        color: '#cbeacd',
                      }}
                  >
                    详细信息
                  </Button>
              ),
            }}
            actions={
              <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
              >
                <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                其他登录方式
              </span>
                </Divider>
                <Space align="center" size={24}>
                  <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 40,
                        width: 40,
                        border: '1px solid #D4D8DD',
                        borderRadius: '50%',
                      }}
                  >
                    <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                  </div>
                  <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 40,
                        width: 40,
                        border: '1px solid #D4D8DD',
                        borderRadius: '50%',
                      }}
                  >
                    <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                  </div>
                  <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: 40,
                        width: 40,
                        border: '1px solid #D4D8DD',
                        borderRadius: '50%',
                      }}
                  >
                    <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
                  </div>
                </Space>
              </div>
            }
            onFinish={async (values) => {
              await submit({
                username: values.username,
                password: values.password
              })
            }}
        >
          <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
            <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
            <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
          </Tabs>
          {loginType === 'account' && (
              <>
                <ProFormText
                    name="username"
                    fieldProps={{
                      size: 'large',
                      prefix: <UserOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={'用户名'}
                    rules={[
                      {
                        required: true,
                        message: '请输入用户名!',
                      },
                    ]}
                />
                <ProFormText.Password
                    name="password"
                    fieldProps={{
                      size: 'large',
                      prefix: <LockOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={'密码'}
                    rules={[
                      {
                        required: true,
                        message: '请输入密码！',
                      },
                    ]}
                />
              </>
          )}
          {loginType === 'phone' && (
              <>
                <ProFormText
                    fieldProps={{
                      size: 'large',
                      prefix: <MobileOutlined className={'prefixIcon'} />,
                    }}
                    name="mobile"
                    placeholder={'手机号'}
                    rules={[
                      {
                        required: true,
                        message: '请输入手机号！',
                      },
                      {
                        pattern: /^1\d{10}$/,
                        message: '手机号格式错误！',
                      },
                    ]}
                />
                <ProFormCaptcha
                    fieldProps={{
                      size: 'large',
                      prefix: <LockOutlined className={'prefixIcon'} />,
                    }}
                    captchaProps={{
                      size: 'large',
                    }}
                    placeholder={'请输入验证码'}
                    captchaTextRender={(timing, count) => {
                      if (timing) {
                        return `${count} ${'获取验证码'}`;
                      }
                      return '获取验证码';
                    }}
                    name="captcha"
                    rules={[
                      {
                        required: true,
                        message: '请输入验证码！',
                      },
                    ]}
                    onGetCaptcha={async () => {
                      message.success('获取验证码成功！验证码为：1234');
                    }}
                />
              </>
          )}
          <div
              style={{
                marginBottom: 24,
              }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
                style={{
                  float: 'right',
                }}
            >
              忘记密码
            </a>
          </div>
        </LoginFormPage>
      </div>
  );
}
const mapStateToProps = (state: { currentUser: CurrentUser }) => ({
  currentUser: state.currentUser
})
export default connect(mapStateToProps)(Login);


