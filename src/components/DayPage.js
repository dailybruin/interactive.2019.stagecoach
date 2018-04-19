import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LiveContentFeed from './LiveContentFeed';
import '../sass/daypage.scss';

export default class DayPage extends React.Component {
  constructor(props) {
    super(props);
    this.borderColors = ['#F9EABB', '#F9C9BA', '#F9BBB9'];
  }

  render() {
    return (
      <div className="day-page">
        <h2 className="heading">coachella</h2>
        <div className="container-full">
          <div
            className="row"
            style={{
              borderColor: this.borderColors[
                this.props.match.params.dayNum - 1
              ],
            }}
          >
            <div className="col-lg" id="day-1-link">
              <div className="text">day one</div>
              <Link to="/day/1" />
            </div>
            <div className="col-lg" id="day-2-link">
              <div className="text">day two</div>
              <Link to="/day/2" />
            </div>
            <div className="col-lg" id="day-3-link">
              <div className="text">day three</div>
              <Link to="/day/3" />
            </div>
          </div>
        </div>
        <h3>I'm day {this.props.match.params.dayNum}!</h3>
        <LiveContentFeed bla="true" />
        <Link to="/">Back to landing</Link>
      </div>
    );
  }
}
