import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Raste from "./apek";
import {Provider} from 'react-redux'
import 'antd/dist/reset.css';
import store from "./app/store";

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(

    <Router>
      <Provider store={store}>  
  <Raste/>

      </Provider>

  
    </Router>
  
);
