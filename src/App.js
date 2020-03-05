import React from 'react';
import s from './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from './components/Menu/Menu';
import Radio from './components/Radio/Radio';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.app}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/radio">
              <Radio />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;
