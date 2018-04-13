import React from 'react';
import { Link } from 'react-router-dom';
import LiveContentFeed from './LiveContentFeed';
import '../sass/daypage.scss';

export default class DayPage extends React.Component {
  render() {
    return (
      <div className="day-page">
        <h2>I'm day {this.props.match.params.dayNum}!</h2>
        <LiveContentFeed />
        <Link to="/">Back to landing</Link>
      </div>
    );
  }
}
