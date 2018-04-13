import React from 'react';
import ioClient from 'socket.io-client';
import { LIVE_API_ENDPOINT, KERCKHOFF_LIVE_EVENT } from '../Config';

export default class LiveContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.socket = ioClient(LIVE_API_ENDPOINT);
    this.initialize();
  }

  initialize() {
    this.socket.emit(KERCKHOFF_LIVE_EVENT.INIT, { id: 'its a me' });
    // Bind handlers
  }

  render() {
    return (
      <div>
        <h2>Test Connection</h2>
      </div>
    );
  }
}
