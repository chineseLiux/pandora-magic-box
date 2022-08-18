import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from "antd";
import App from './App'
import './utils/axios/index'
import './index.less'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persist} from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        <ConfigProvider
            componentSize="small"
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
