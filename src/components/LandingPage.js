import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="bg">
          <div className="day-one col">
            <Link to="/day/1" />
          </div>
          <div className="day-two col">
            <Link to="/day/2" />
          </div>
          <div className="day-three col">
            <Link to="/day/3" />
          </div>
        </div>
        <h2>Coachella</h2>
      </div>
    );
  }
}
