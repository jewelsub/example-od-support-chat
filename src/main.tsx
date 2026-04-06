import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
)
