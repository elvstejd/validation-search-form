import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./global.css";
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { LocaleProvider } from '@douyinfe/semi-ui';



ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider locale={en_US}>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
