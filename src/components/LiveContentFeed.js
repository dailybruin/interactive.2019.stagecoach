import React from "react";
import ioClient from "socket.io-client";
import { LIVE_API_ENDPOINT, KERCKHOFF_LIVE_EVENT } from "../Config";

export default class LiveContentFeed extends React.Component {
  constructor(props) {
    super(props);
    this.socket = ioClient(LIVE_API_ENDPOINT);
    this.initialize();
    this.state = {};
  }

  initialize() {
    this.socket.emit(KERCKHOFF_LIVE_EVENT.INIT, { id: "its a me" });
    // Bind handlers

    this.socket.on(KERCKHOFF_LIVE_EVENT.OK, () => {
      this.setState({
        live: true
      });
    });

    this.socket.on(KERCKHOFF_LIVE_EVENT.UPDATE, payload => {
      this.setState({
        content: payload
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Test Connection</h2>
        <h4>{this.state.live ? "LIVE" : "NOT LIVE"}</h4>
        <code>{JSON.stringify(this.state.content, 4)}</code>
      </div>
    );
  }
}
