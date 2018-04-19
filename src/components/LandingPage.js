import React from 'react';
import { Link } from 'react-router-dom';
import testImg from '../assets/grounds.jpg';

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

        <div className="col-md-8">
          <h4>
            the Daily Bruin <span className="live">LIVE</span> at
          </h4>
          <h2>coachella 2018</h2>
          <div className="landing-box col-md-9 mx-auto">
            <h5>THE LATEST</h5>
            <span>Posted 5 hours ago</span>
            <div className="row no-gutters">
              <p className="col-md-8 pr-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="col-md-4">
                <img className="img-fluid img-thumbnail" src={testImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
