const LIVE_API_ENDPOINT = process.env.LIVE_API_ENDPOINT || 'localhost:3000';
const KERCKHOFF_LIVE_EVENT = {
  INIT: 'init',
  OK: 'ack',
  ERR: 'err',
  UPDATE: 'upd',
  REFRESH: 'ref',
};

export { LIVE_API_ENDPOINT, KERCKHOFF_LIVE_EVENT };
