import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styled from './views/landing/style.module.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={`${styled.navbarBackground}`}>
      <App />
    </div>
  </React.StrictMode>,
)
