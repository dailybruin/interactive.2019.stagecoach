import React from 'react';
import ioClient from 'socket.io-client';
import { LIVE_API_ENDPOINT, KERCKHOFF_LIVE_EVENT } from '../Config';
import FeedCard from './FeedCard';

const SampleContent = {
  category: 'Music',
  image: 'https://placeimg.com/1024/768/nature',
  text:
    'Sed at blandit diam. Cras accumsan in ligula sit amet malesuada. Praesent nec odio dapibus, auctor erat ac,\n facilisis risus. In hac habitasse platea dictumst. Etiam sit amet tristique elit,\n sit amet maximus sem. Praesent pharetra safddsf nibh eu tincidunt. Sed dapibus tempus luctus.\n Proin sit amet diam cursus, eleifend sapien eu, viverra sem.\n Sed at blandit diam. Cras accumsan in ligula sit amet malesuada. Praesent nec odio dapibus, auctor erat ac,\n facilisis risus. In hac habitasse platea dictumst. Etiam sit amet tristique elit,\n sit amet maximus sem. Praesent pharetra safddsf nibh eu tincidunt. Sed dapibus tempus luctus.\n Proin sit amet diam cursus, eleifend sapien eu, viverra sem',
  time: '9:00',
  title: 'Hello World',
};

export default class LiveContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.socket = ioClient(LIVE_API_ENDPOINT);
    this.initialize();
    this.state = {};
  }

  initialize() {
    // Delay by just a tiny bit to allow the handshake to finish
    setTimeout(() => {
      this.socket.emit(KERCKHOFF_LIVE_EVENT.INIT, { id: 'flatpages/test' });
    }, 100);

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
      this.setState({
        content: payload,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Test Connection</h2>
        <h4>{this.state.live ? 'LIVE' : 'NOT LIVE'}</h4>
        <code>{JSON.stringify(this.state.content, 4)}</code>
        <FeedCard dayClass="day-one" content={SampleContent} />
      </div>
    );
  }
}
