import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Modal from 'react-modal';
import 'semantic-ui-css/components/table.min.css';
// import dotenv from 'dotenv';

// dotenv.config();

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
