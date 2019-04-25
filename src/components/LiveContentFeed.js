import React from "react";
// import fetch from "isomorphic-fetch";
import {
  LIVE_API_ENDPOINT,
  KERCKHOFF_LIVE_EVENT,
  KERCKHOFF_ENDPOINT
} from "../Config";
import FeedCard from "./FeedCard";
import TimeAgo from "timeago-react";

export default class LiveContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.state = {};
    this.setup(props, false);
  }

  setup(props, setState = true) {
    this.initialize(props.slug);
    if (setState)
      this.setState({ live: false, content: undefined, lastUpdate: undefined });
  }

  componentWillReceiveProps(nextProps) {
    this.setup(nextProps);
  }

  handleRefresh() {
    this.initialize(true);
  }

  initialize(slug) {
    let toSet = {};

    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.stagecoach"
    )
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        toSet = responseJSON.data["data.aml"].posts
          .map(post => {
            if (post.image) {
              const img = responseJSON.images.s3[post.image];
              if (img) {
                post.image = img.url;
              }
            }
            // if (post.category == "music") {
            return post;
          })
          .filter(mappedPost => mappedPost.category == this.props.feedClass)
          .reverse();
        this.setState({
          content: toSet,
          lastUpdate: Date.now()
        });
      });
  }

  render() {
    const feedList = () => {
      if (!this.state.content) {
        return <h2>Loading...</h2>;
      } else if (this.state.content.err) {
        return <h2>We haven't gotten here yet!</h2>;
      } else {
        const list = this.state.content.map(p => {
          return (
            <li key={p.time}>
              <FeedCard content={p} />
            </li>
          );
        });

        return <ul className="list-unstyled"> {list} </ul>;
      }
    };

    const isReadyAndNotError = this.state.content && !this.state.content.err;

    const live =
      isReadyAndNotError && this.state.live ? (
        <span className="badge badge-danger">LIVE</span>
      ) : null;

    const liveUpdate =
      isReadyAndNotError && this.state.lastUpdate ? (
        <span>
          Follow us on <a href="https://twitter.com/DailyBruinAE">Twitter</a> for live updates
        </span>
      ) : (
        <span />
      );

    return (
      <div className={"container feed " + this.props.feedClass}>
        <div className="row">
          <div className="col">
            <h4>{live}</h4>
          </div>
          <div className="col last-update d-flex justify-content-center align-items-center">
            {liveUpdate}
          </div>
          <div className="col text-right">
            <button
              className="btn btn-outline-secondary"
              onClick={this.handleRefresh}
            >
              Refresh
            </button>
          </div>
        </div>
        {feedList()}
      </div>
    );
  }
}
