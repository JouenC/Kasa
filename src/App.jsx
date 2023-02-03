// react
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement.jsx'
import Header from './components/Header'
import Footer from './components/Footer'


// style
import './sass/main.scss'

// routes
function App () {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/pages/apropos' element={<APropos />} />
            <Route path='/fichelogement/:logingId' element={<FicheLogement />} />
            <Route path='*' element={<Error />} />
            <Route path='/404' element={<Error />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App