const https = require('https');
const tls = require('tls');

const request = https.get({
  headers: {
    "Sec-WebSocket-Version": "13",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
    "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
    "Host": "capi.grammarly.com",
    "Upgrade": "websocket",
    "Connection": "Upgrade",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
  },
  createConnection: tls.connect,
  hostname: 'wss://capi.grammarly.com/freews',
}, (res, error) => {
  res.on('data', (d) => {
    console.log(d);
  });

  res.on('error', (e) => {
    console.log(e);
  });
});
