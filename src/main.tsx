// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { App } from './App'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  throw new Error("Elemento com ID 'root' não encontrado.");
}
