import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
//import 'material-icons/iconfont/material-icons.scss';   
//rajout
//import * as ServiceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//rajout
//ServiceWorker.unregister();