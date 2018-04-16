import 'normalize.css';
import 'normalize.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import DayPage from './components/DayPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/app.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/day/:dayNum" component={DayPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
