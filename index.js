const WebSocket = require("ws");
const axios = require("axios");

class Grammarly {
  constructor() {
    this.initRequestResponse = null;
    this.webSocket = null;
  }

  async init() {
    this.initRequestResponse = await axios.get("https://grammarly.com/");
    this.webSocket = new WebSocket("wss://capi.grammarly.com/freews", {
      origin: "chrome-extension://kbfnbcaeplbcioakkpcpgfkobkghlhen",
      headers: {
        "Cookie": this.initRequestResponse.headers["set-cookie"].map((c) => c.split(";")[0]).join("; "),
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0"
      }
    });
    await this.waitForWebSocketToOpen(this.webSocket);

    const initialMessage = {
      "type": "initial",
      "token": null,
      "docid":"dfad0927-7b35-e155-6de9-4a107053da35-43543554345",
      "client":"extension_chrome",
      "protocolVersion":"1.0",
      "clientSupports":["free_clarity_alerts",
      "readability_check","filler_words_check",
      "sentence_variety_check",
      "free_occasional_premium_alerts"],
      "dialect":"american",
      "clientVersion":"14.924.2437",
      "extDomain":"editpad.org",
      "action":"start",
      "id":0
    }
    this.webSocket.send(JSON.stringify(initialMessage));
    this.webSocket.on("error", (data) => console.log(data));
  }

  check(str) {
    this.webSocket.on("message", (data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    });
    this.webSocket.send(JSON.stringify(
      {"ch":[`+0:0:${str}:0`],"rev":0,"action":"submit_ot","id":0}
    ));
  }

  async waitForWebSocketToOpen(ws) {
    return new Promise((resolve) => {
      ws.on("open", () => {
        resolve();
      });
    });
  }
}

module.exports = Grammarly;