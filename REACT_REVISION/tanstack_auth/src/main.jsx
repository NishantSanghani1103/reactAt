import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import AppProvider from './app/AppProvider.jsx'
import AppWrapper from './app/AppWrapper.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById('root')).render(

  <AppWrapper />
)
