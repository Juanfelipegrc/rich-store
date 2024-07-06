import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TiendasApp } from './TiendasApp'
import { Provider } from 'react-redux'
import { store } from './store/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TiendasApp />
    </Provider>
  </React.StrictMode>,
)
