import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement.jsx'
import APropos from './pages/APropos.jsx'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error.jsx'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/FicheLogement/:idLogement">
          <FicheLogement />
        </Route>
        <Route path="/APropos">
          <APropos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
