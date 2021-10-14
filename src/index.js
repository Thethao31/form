import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import App2 from './App2'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <App2 /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


