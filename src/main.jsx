import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Redux/Store/Store.jsx'
import {Provider} from 'react-redux'
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
    <App />
  </Provider>,
)
reportWebVitals()