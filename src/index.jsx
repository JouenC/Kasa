import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Footer from './pages/Footer'
import Error from './components/Error'

const GlobalStyle = createGlobalStyle `
  * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
  body {
    margin: 0;
  }
`

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
