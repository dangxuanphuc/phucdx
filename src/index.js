import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { AppRoute } from './app/routes';
import './app/assets/css/main.css';

const MainApp = () => (
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
)

ReactDOM.render(<MainApp />, document.getElementById('root'));

serviceWorker.unregister();
