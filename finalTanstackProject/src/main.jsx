import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import AppWrapper from './app/AppWrapper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')).render(

    <AppWrapper />

)
