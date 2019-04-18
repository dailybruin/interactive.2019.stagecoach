import React from 'react';
import { Link } from 'react-router-dom';
import LiveContentFeed from './LiveContentFeed';
import '../sass/daypage.scss';
import dbLogo from '../assets/db_logo.svg';

export default class DayPage extends React.Component {
  constructor(props) {
    super(props);
    this.borderColors = ['#C6E7E5', '#F9C9BA', '#B2B7E5'];
    this.feeds = [
      'flatpages/coachella-day-one',
      'flatpages/coachella-day-two',
      'flatpages/coachella-day-three',
    ];
    this.feedClass = ['music', 'day-two', 'more'];
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
                  (this.props.match.params.categoryName == "music") ? 0 : 2
                ],
              }}
            >
              <div className="col-lg angled-link" id="day-1-link">
                <div className="text">music</div>
                <Link to="/category/music" />
              </div>
              {/* <div className="col-lg angled-link" id="day-2-link">
                <div className="text">day two</div>
                <Link to="/day/2" />
              </div> */}
              <div className="col-lg angled-link" id="day-3-link">
                <div className="text">more</div>
                <Link to="/category/more" />
              </div>
            </div>
          </div>
        </div>
        <LiveContentFeed
          feedClass={this.feedClass[(this.props.match.params.categoryName == 'music') ? 0 : 2]}
          slug={this.feeds[(this.props.match.params.categoryName == 'music') ? 0 : 2]}
        />
        <footer className="footer">
          <div className="container foot py-3">
            <a href="http://dailybruin.com">
              <img src={dbLogo} />
            </a>
            <span className="sep" />
            <p className="cred">
              Stories by Nate Nickolai and photography by Michael Zshornack.
              Page designed and developed by Katie Cai, Rebecca Xu, Callista Wu
              and Hongyi Zhang. Built with Kerckhoff.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
