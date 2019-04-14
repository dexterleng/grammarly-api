const WebSocket = require("ws");
const axios = require("axios");

const ws = new WebSocket("wss://capi.grammarly.com/freews", {
  origin: "chrome-extension://kbfnbcaeplbcioakkpcpgfkobkghlhen",
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
    "Host": "capi.grammarly.com",
    "Upgrade": "websocket",
    "Connection": "Upgrade",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    "Cookie": "gnar_containerId=lfky8hb42qii082; grauth=AABGUBpUbqpxaM7cLVcQhkdY2FEb4xNLIb45XI1XZrgwqAHHtJf0pK8WZlbC3ol7w9NHYQqLUi5NEFsy; csrf-token=AABGUHL0N3ZMobFpPOTvz5dTk8cCcbrvFI1h8g; funnelType=free; browser_info=FIREFOX:66:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X; redirect_location=eyJ0eXBlIjoiIiwibG9jYXRpb24iOiJodHRwczovL3d3dy5ncmFtbWFybHkuY29tL3NpZ251cD9icmVhZGNydW1icz10cnVlJnV0bV9zb3VyY2U9ZmlyZWZveCZwYWdlPWZyZWUmZXh0ZW5zaW9uX2luc3RhbGw9dHJ1ZSZ1dG1fbWVkaXVtPXN0b3JlIn0=; firefox_freemium=true; _ga=GA1.2.650690555.1555234454; _gid=GA1.2.539082346.1555234454; ga_clientId=650690555.1555234454; _gcl_au=1.1.1340797246.1555234454; _fbp=fb.1.1555234461054.265805239; experiment_groups="
  }
});

// axios.post("https://auth.grammarly.com/v3/user/oranonymous?app=chromeExt&containerId=opon8g7okt96082", {}, {
//   "headers": {
//     "Origin": "chrome-extension://kbfnbcaeplbcioakkpcpgfkobkghlhen",
//     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
//     "x-client-type": "extension-chrome",
//     "x-client-version": "14.908.2201",
//     "x-container-id": "opon8g7okt96082",
//     "x-csrf-token": "AABGT+M/p0rn/0n3+RYK5JRfOK4Ee4sRqG0enw"
//   }
// })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


const initialMessage = JSON.stringify({
  action: "start",
  client: "extension_chrome",
  clientVersion: "14.908.2201",
  dialect: "american",
  docid: "18745a6c-13d1-40e5-a798-9f536b8badf7",
  extDomain: "keep.google.com",
  id: 0,
  protocolVersion: "1.0",
  token: null,
  type: "initial"
});

ws.on('open', () => {
  console.log("opened");
  ws.send(initialMessage);
  ws.send(JSON.stringify(
    {"ch":["+0:0:hey. We live in a society. Good morning american!:0"],"rev":0,"action":"submit_ot","id":0}
  ));
});

ws.on('close', () => {
  console.log('close');
});

ws.on('error', (error) => {
  console.log("error");
  console.log(error);
});

ws.on('message', (data) => {
  console.log("message");
  console.log(data);

  if (data === `{"action":"pong"}`) {
      console.log("got pong");
  }
});

// ws.on('open', () => {
//   console.log("Connection Opened");
//   ws.ping(JSON.stringify({
//     action: "start",
//     client: "extension_chrome",
//     clientVersion: "14.908.2201",
//     dialect: "american",
//     docid: "368ff563-64d0-813f-a58d-33be30f06fa0",
//     extDomain: "keep.google.com",
//     id: 4,
//     protocolVersion: "1.0",
//     token: null,
//     type: "other",
//   }), true, (error) => {
//     if (error) {
//       throw error;
//     }
//     ws.ping(JSON.stringify({
//       "ch": [
//         "+0:0:Hello worlds!:0"
//       ],
//       "rev": 0,
//       "action": "submit_ot",
//       "id": 5
//     }));
//   });
// });

// ws.on('close', () => {
//   console.log("Connection closed");
// });

// ws.on('pong', (data) => {
//   console.log(data);
// });

// ws.on("message", (data) => {
//   console.log(data);
// });

// ws.on('error', (error) => {
//   console.log("Error occured");
//   console.log(error);
// });