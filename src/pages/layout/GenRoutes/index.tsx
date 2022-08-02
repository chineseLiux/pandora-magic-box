import {RouteInfo} from "@/store/types";
import {Outlet, Route} from "react-router-dom";
import React from "react";

const GenRoutes = ({routeInfo}: {routeInfo: RouteInfo}) => {
  if (routeInfo.element) {
    // let Element = React.lazy(() => import(`${routeInfo.element}`))
    let Element = React.lazy(() => import('@/pages/dashboard/Analysis'))
    return (
        <Route key={routeInfo.path} path={routeInfo.path} element={<Element />}>
          {
              routeInfo.children && routeInfo.children.map((route) => {
                return GenRoutes({routeInfo: route})
              })
          }
        </Route>
    )
  }
  return (
      <Route key={routeInfo.path} path={routeInfo.path} element={<Outlet />}>
        {
            routeInfo.children && routeInfo.children.map((route) => {
              return GenRoutes({routeInfo: route})
            })
        }
      </Route>
  )
}

export default GenRoutes
