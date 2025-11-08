import { reportMetrics } from './monitor';

setInterval(reportMetrics, 30000); // every 30 seconds

import client from 'prom-client';
client.collectDefaultMetrics();

require('http')
  .createServer((req, res) => {
    res.setHeader('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
  })
  .listen(9090);
