import React from 'react';
import ioClient from 'socket.io-client';
import { LIVE_API_ENDPOINT, KERCKHOFF_LIVE_EVENT } from '../Config';
import FeedCard from './FeedCard';
import TimeAgo from 'timeago-react';

export default class LiveContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.state = {};
    this.setup(props, false);
  }

  setup(props, setState = true) {
    this.socket = ioClient(LIVE_API_ENDPOINT);
    this.initialize(props.slug);
    if (setState)
      this.setState({ live: false, content: undefined, lastUpdate: undefined });
  }

  componentWillReceiveProps(nextProps) {
    this.setup(nextProps);
  }

  handleRefresh() {
    this.socket.emit(KERCKHOFF_LIVE_EVENT.REFRESH);
  }

  initialize(slug) {
    // Delay by just a tiny bit to allow the handshake to finish
    this.socket.on('connect', () => {
      setTimeout(() => {
        console.log('Sending init', slug);
        this.socket.emit(KERCKHOFF_LIVE_EVENT.INIT, { id: slug });
      }, 300);
    });

    // Bind handlers
    this.socket.on('disconnect', reason => {
      console.log(reason);
      this.setState({
        live: false,
      });
    });

    this.socket.on(KERCKHOFF_LIVE_EVENT.OK, () => {
      this.setState({
        live: true,
      });
    });

    this.socket.on(KERCKHOFF_LIVE_EVENT.UPDATE, payload => {
      console.log('received update');
      console.log(payload);
      let toSet = {};

      if (payload.err) {
        toSet = payload;
      } else {
        toSet = payload.data['data.aml'].posts
          .map(post => {
            if (post.image) {
              const img = payload.images.s3[post.image];
              if (img) {
                post.image = img.url;
              }
            }
            return post;
          })
          .reverse();
      }

      this.setState({
        content: toSet,
        lastUpdate: Date.now(),
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
          Last updated&nbsp;
          <TimeAgo datetime={this.state.lastUpdate} live={true} />
        </span>
      ) : (
        <span />
      );

    return (
      <div className={'container feed ' + this.props.feedClass}>
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
