import 'normalize.css';
import 'normalize.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import DayPage from './components/DayPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './sass/app.scss';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/day/:dayNum" component={DayPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
