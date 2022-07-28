import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from "antd";
import App from './App'
import './utils/axios/index'
import 'antd/es/style/default.less'
import './index.less'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      componentSize="small"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
