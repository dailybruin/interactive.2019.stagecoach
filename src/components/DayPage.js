import React from 'react';
import { Link } from 'react-router-dom';
import LiveContentFeed from './LiveContentFeed';
import '../sass/daypage.scss';
import dbLogo from '../assets/db_logo.svg';

export default class DayPage extends React.Component {
  constructor(props) {
    super(props);
    this.borderColors = ['#F9EABB', '#F9C9BA', '#F9BBB9'];
    this.feeds = [
      'flatpages/coachella-day-one',
      'flatpages/coachella-day-two',
      'flatpages/coachella-day-three',
    ];
    this.feedClass = ['day-one', 'day-two', 'day-three'];
  }

  render() {
    return (
      <div>
        <div className="day-page">
          <h2 className="heading">
            <Link to="/">coachella</Link>
          </h2>
          <div className="container-full">
            <div
              className="row"
              style={{
                borderColor: this.borderColors[
                  this.props.match.params.dayNum - 1
                ],
              }}
            >
              <div className="col-lg angled-link" id="day-1-link">
                <div className="text">day one</div>
                <Link to="/day/1" />
              </div>
              <div className="col-lg angled-link" id="day-2-link">
                <div className="text">day two</div>
                <Link to="/day/2" />
              </div>
              <div className="col-lg angled-link" id="day-3-link">
                <div className="text">day three</div>
                <Link to="/day/3" />
              </div>
            </div>
          </div>
        </div>
        <LiveContentFeed
          feedClass={this.feedClass[this.props.match.params.dayNum - 1]}
          slug={this.feeds[this.props.match.params.dayNum - 1]}
        />
        <footer className="footer">
          <div className="container foot py-3">
            <a href="http://dailybruin.com">
              <img src={dbLogo} />
            </a>
            <span className="sep" />
            <p className="cred">
              Page designed and developed by Katie Cai, Rebecca Xu, Callista Wu
              and Hongyi Zhang. Built with Kerckhoff.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
