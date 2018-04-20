import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLatest() {
    const d1 = new Date('April 20, 2018');
    const d2 = new Date('April 21, 2018');
    const d3 = new Date('April 22, 2018');
    const today = new Date();
    let latest_link = '#/day/3';
    let src = 'flatpages/coachella-day-three';
    let day = 'Day 3';
    if (today < d3 && today >= d2) {
      console.log('Wad');
      src = 'flatpages/coachella-day-two';
      day = 'Day 2';
      latest_link = '#/day/2';
    } else if (today < d3 && today >= d1) {
      console.log('da');
      src = 'flatpages/coachella-day-one';
      day = 'Day 1';
      latest_link = '#/day/1';
    }
    fetch('https://kerckhoff.dailybruin.com/api/packages/' + src)
      .then(res => res.json())
      .then(data => {
        const posts = data.data['data.aml'].posts.map(post => {
          if (post.image) {
            const img = data.images.s3[post.image];
            if (img) {
              post.image = img.url;
            }
          }
          return post;
        });
        const latest = posts[posts.length - 1];
        console.log(latest);
        this.setState({
          post: latest,
          d: day,
          link: latest_link,
        });
      });
  }

  componentDidMount() {
    this.getLatest();
  }

  render() {
    const box = this.state.post ? (
      <div>
        <div className="row no-gutters">
          <div className="col-md-8 pr-2">
            <a href={this.state.link}>
              <h5>THE LATEST</h5>
              <span>{this.state.d + ' | ' + this.state.post.time}</span>
              <p>
                {this.state.post.text.length < 300
                  ? this.state.post.text
                  : this.state.post.text.substring(0, 300).concat('...')}
              </p>
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <a href={this.state.link}>
              <img
                className="img-fluid img-thumbnail"
                src={this.state.post.image}
              />
            </a>
          </div>
        </div>
      </div>
    ) : (
      <h5 className="text-center">...</h5>
    );

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
          <div className="landing-box col-12 mx-auto">{box}</div>
        </div>
      </div>
    );
  }
}
