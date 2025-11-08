import client from 'prom-client';

export const blockGauge = new client.Gauge({
  name: 'apzlastsynced_block',
  help: 'Last synced block by indexer',
});

export const errorCounter = new client.Counter({
  name: 'apzindexererrors_total',
  help: 'Total indexer errors',
});

export const rpcLatency = new client.Histogram({
  name: 'apzrpclatency_seconds',
  help: 'RPC response time in seconds',
  buckets: [0.1, 0.5, 1, 2, 5],
});
