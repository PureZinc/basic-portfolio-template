import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Template from './pages/Template';

import React from 'react'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route element={<Template dataUse="templateData" />} exact path='/'/>
            <Route element={<Template dataUse="myData" />} path='/me'/>
        </Routes>
    </Router>
  )
}
