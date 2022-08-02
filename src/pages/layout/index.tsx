import {CurrentUser, RouteInfo} from "@/store/types";
import * as Icons from '@ant-design/icons';
import {connect} from "react-redux";
import type {MenuDataItem, ProSettings} from '@ant-design/pro-components';
import {DefaultFooter, PageContainer, ProLayout, SettingDrawer} from "@ant-design/pro-components";
import React, {useCallback, useState, Suspense, ReactNode, useEffect} from "react";
import {BackTop, Spin} from "antd";
import {NavLink, Outlet, useLocation, useNavigate, useRoutes} from "react-router-dom";
import RightContent from "@/pages/layout/RightContent";
import NoFoundPage from "@/pages/error/NoFoundPage";

const modules = import.meta.glob('@/pages/**/**.tsx');

const Layout = ({currentUser}: {currentUser: CurrentUser}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({});
  const [pathname, setPathname] = useState('/dashboard/workplace');

  const toHomePage = useCallback(() => {
    setPathname('/dashboard/workplace');
    navigate('/dashboard/workplace');
  }, [setPathname, navigate]);
  useEffect(() => {
    if (location.pathname === '/') {
      toHomePage();
    } else {
      setPathname(location.pathname);
    }
  }, [setPathname, location.pathname, toHomePage]);

  const icons: any = Icons;
  const loopMenuItem = (menus: RouteInfo[]): MenuDataItem[] =>
      menus.map(({ icon, routes, ...item }) => ({
        ...item,
        icon: icon && React.createElement(icons[icon]),
        routes: routes && loopMenuItem(routes),
      }))
  const genRoutesFromJson = (routes: RouteInfo[], parentPath: string) => {
    const routesData: any = routes.map(route => {
      if (!route.element) {
        return {
          path: parentPath + '/' + route.path,
          element: route.children && route.children.length > 0?<Outlet />: <NoFoundPage onClick={toHomePage} />,
          children: route.children? genRoutesFromJson(route.children, route?.path?route.path: ''): []
        }
      }
      const Components = React.lazy(modules[`/src/pages/${route.element}`] as any);
      return {
        path: parentPath + '/' + route.path,
        element:
            <React.Suspense
                fallback={<Spin />}
            >
              <Components />
            </React.Suspense>,
        children: route.children? genRoutesFromJson(route.children, route?.path?route.path: ''): []
      }
    })
    return routesData
  }

  const GetRoutes = () => {
    let routesData = genRoutesFromJson(currentUser?.routes? currentUser.routes: [], '');
    routesData.push({
      path: '*',
      element: <NoFoundPage onClick={toHomePage}/>
    })
    const routes = useRoutes(routesData);
    return routes;
  }

  return (
      <>
        <div
            id="layout"
            style={{
              height: '100vh',
            }}
        >
          <ProLayout
              title={'Pandora Box'}
              logo={'/src/images/logo/pandora-white-200x200.svg'}
              menu={{ request: async () => loopMenuItem(currentUser?.routes? currentUser?.routes: []) }}
              location={{
                pathname,
              }}
              waterMarkProps={{
                content: currentUser?.email
              }}
              menuItemRender={
                (menuItemProps: MenuDataItem, defaultDom: ReactNode) => {
                  return (
                      <>
                        {defaultDom}
                        <span
                            onClick={() => {
                              setPathname(menuItemProps.path as string);
                            }}
                        >
                            <NavLink to={menuItemProps.path as string}>
                            </NavLink>
                          </span>
                      </>
                  )
                }
              }
              footerRender={() => (
                  <DefaultFooter
                      copyright="dove__lx@aliyun.com"
                  />
              )}
              rightContentRender={() => <RightContent />}
              {...settings}
          >
            <PageContainer
                header={{
                  ghost: true,
                  style: {
                    display: 'none',
                    minHeight: '100%'
                  }
                }}
            >
              <GetRoutes />
              <BackTop />
            </PageContainer>
          </ProLayout>
          <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={() => document.getElementById('layout')}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
          />
        </div>
      </>
  )
}
const mapStateToProps = ({currentUser}: {currentUser: CurrentUser}) => ({
  currentUser: currentUser
})
export default connect(mapStateToProps)(Layout);
