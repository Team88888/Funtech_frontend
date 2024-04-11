import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import Layout from './routes/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
);
