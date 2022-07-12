// Import React's Components
import React from 'react';
import * as ReactDom from "react-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Import Components
import App from './app/Layout/App';

// Import CSS
import './app/Layout/Styles.css';

// History
export const history = createBrowserHistory({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
