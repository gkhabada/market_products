import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import PageHeader from './components/PageHeader';

ReactDOM.render(
  <React.StrictMode>
    <PageHeader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
