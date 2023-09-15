// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import * as serviceWorker from './serviceWorker'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
// const root = createRoot(container!) // createRoot(container) if not using TypeScript
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map