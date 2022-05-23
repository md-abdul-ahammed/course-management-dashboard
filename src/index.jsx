import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import 'antd/dist/antd.variable.min.css'

import { ConfigProvider } from 'antd'
ConfigProvider.config({
  theme: {
    primaryColor: '#7D23E0',
    processingColor: '#BA68C8',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
