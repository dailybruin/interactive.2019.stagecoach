import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="bg">
          <div className="day-one col">
            <h3>DAY 1</h3>
            <Link to="/day/1" />
          </div>
          <div className="day-two col">
            <h3>DAY 2</h3>
            <Link to="/day/2" />
          </div>
          <div className="day-three col">
            <h3>DAY 3</h3>
            <Link to="/day/3" />
          </div>
        </div>
        <div class="text">
          <h4>the Daily Bruin at</h4>
          <h2>coachella 2018</h2>
        </div>
      </div>
    );
  }
}
