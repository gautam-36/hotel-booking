// 5359349

import React from "react";
import App from './App'
import { BrowserRouter } from "react-router-dom";
import reactDom from "react-dom"
import './index.css'
reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)