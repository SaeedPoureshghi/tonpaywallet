import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import WebApp from '@twa-dev/sdk'
import { ConfigProvider } from 'antd';

WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
     theme={
      {
        token: {
          fontFamily: 'Rubik, sans-serif',
        }
      }
     }
    >

    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
