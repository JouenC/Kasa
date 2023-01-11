// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement.jsx'
import APropos from './pages/APropos'
import Footer from './components/Footer/Footer'
import Error from './pages/Error'
import './sass/main.scss'

export default App

function App () {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/pages/APropos' element={<APropos />} />
            <Route path='/pages/FicheLogement/:LogementId' element={<FicheLogement />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}