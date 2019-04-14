# Grammarly API Docs

Grammarly uses WebSockets to send text to their servers. This is a documentation of the Websocket pings and pongs.


Cookies

```
Host: capi.grammarly.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:66.0) Gecko/20100101 Firefox/66.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Sec-WebSocket-Version: 13
Origin: moz-extension://1543dcbd-db1d-c043-be06-53f1ac20e6ef
Sec-WebSocket-Extensions: permessage-deflate
Sec-WebSocket-Key: SS3zJbe2IjlUBUy/jCuvkA==
Connection: keep-alive, Upgrade
Cookie: gnar_containerId=lfky8hb42qii082; grauth=AABGUBpUbqpxaM7cLVcQhkdY2FEb4xNLIb45XI1XZrgwqAHHtJf0pK8WZlbC3ol7w9NHYQqLUi5NEFsy; csrf-token=AABGUHL0N3ZMobFpPOTvz5dTk8cCcbrvFI1h8g; funnelType=free; browser_info=FIREFOX:66:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X; redirect_location=eyJ0eXBlIjoiIiwibG9jYXRpb24iOiJodHRwczovL3d3dy5ncmFtbWFybHkuY29tL3NpZ251cD9icmVhZGNydW1icz10cnVlJnV0bV9zb3VyY2U9ZmlyZWZveCZwYWdlPWZyZWUmZXh0ZW5zaW9uX2luc3RhbGw9dHJ1ZSZ1dG1fbWVkaXVtPXN0b3JlIn0=; firefox_freemium=true; _ga=GA1.2.650690555.1555234454; _gid=GA1.2.539082346.1555234454; ga_clientId=650690555.1555234454; _gcl_au=1.1.1340797246.1555234454; _fbp=fb.1.1555234461054.265805239; experiment_groups=
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
```

```
gnar_containerId=lfky8hb42qii082;

grauth=AABGUBpUbqpxaM7cLVcQhkdY2FEb4xNLIb45XI1XZrgwqAHHtJf0pK8WZlbC3ol7w9NHYQqLUi5NEFsy;

csrf-token=AABGUHL0N3ZMobFpPOTvz5dTk8cCcbrvFI1h8g;

funnelType=free;

browser_info=FIREFOX:66:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X;

redirect_location=eyJ0eXBlIjoiIiwibG9jYXRpb24iOiJodHRwczovL3d3dy5ncmFtbWFybHkuY29tL3NpZ251cD9icmVhZGNydW1icz10cnVlJnV0bV9zb3VyY2U9ZmlyZWZveCZwYWdlPWZyZWUmZXh0ZW5zaW9uX2luc3RhbGw9dHJ1ZSZ1dG1fbWVkaXVtPXN0b3JlIn0=; 

firefox_freemium=true;

_ga=GA1.2.650690555.1555234454;

_gid=GA1.2.539082346.1555234454;

ga_clientId=650690555.1555234454;

_gcl_au=1.1.1340797246.1555234454;

_fbp=fb.1.1555234461054.265805239;experiment_groups=
```

1. Send

```
{
  action: "start",
  client: "extension_chrome",
  clientVersion: "14.908.2201",
  dialect: "american",
  docid: "368ff563-64d0-813f-a58d-33be30f06fa0",
  extDomain: "keep.google.com",
  id: 4,
  protocolVersion: "1.0",
  token: null,
  type: "other",
}
```

2. Send

```
{
  "ch": [
    "+0:0:Hello worlds!:0"
  ],
  "rev": 0,
  "action": "submit_ot",
  "id": 5
}
```

3. Receive

```
{
  "sid": 0,
  "action": "start",
  "id": 4
}
```

4. Receive

```
{
  "rev": 0,
  "action": "submit_ot",
  "id": 5
}
```

5. Send

```
{
  "name": "gnar_containerId",
  "value": "opon8g7okt96082",
  "action": "option",
  "id": 6
}
```

6. Receive

```
{
  "point": "NoCommaWithInterj",
  "transforms": [
    "Hello<span class='gr_grammar_ins'>,</span>"
  ],
  "transformJson": {
    "context": {
      "s": 0,
      "e": 13
    },
    "highlights": [
      {
        "s": 0,
        "e": 5
      }
    ],
    "alternatives": [
      {
        "ops": [
          {
            "retain": 5,
            "attributes": {
              "type": "important"
            }
          },
          {
            "insert": ",",
            "attributes": {
              "type": "main"
            }
          }
        ]
      }
    ]
  },
  "title": "Missing punctuation after interjection",
  "details": "<p>An interjection is a word (<i>yes, hey, gosh</i>) or short phrase (<i>oh my, my goodness</i>) that expresses some emotion and is not grammatically related to the sentence that follows. The interjection is followed by an exclamation point for strong emotions (<i>Wow! I won the lottery!</i>) and a comma for a weaker emotion (<i>Wow, that is news to me.</i>).\n",
  "explanation": "<p>It appears that you are missing a punctuation mark after the interjection <b>Hello</b>. Consider adding a comma.\n",
  "examples": "<p><span class=\"red\">Incorrect: <b>Well</b> I am not so sure about that.</span><br/><span class=\"green\">Correct: <b>Well,</b> I am not so sure about that.</span><br/><p><span class=\"red\">Incorrect: <b>No</b> I did not take out the trash.</span><br/><span class=\"green\">Correct: <b>No,</b> I did not take out the trash.</span><br/><p><span class=\"red\">Incorrect: <b>Aw</b> that kitten is cute.</span><br/><span class=\"green\">Correct: <b>Aw,</b> that kitten is cute.</span><br/>",
  "todo": "add the punctuation",
  "handbookLink": "",
  "sentence_no": 0,
  "free": true,
  "category": "BasicPunct",
  "pid": 1270146,
  "rid": 1270146,
  "sid": 11607161,
  "begin": 5,
  "end": 5,
  "text": "",
  "group": "Punctuation",
  "pname": "Punctuation/BasicPunct/NoCommaWithInterj/InterjComma",
  "phash": "FE14D8B1646F943E7206DAA736F75424",
  "pversion": "4.0.646",
  "rev": 0,
  "highlightBegin": 0,
  "highlightEnd": 5,
  "highlightText": "Hello",
  "replacements": [
    ","
  ],
  "impact": "critical",
  "extra_properties": {
    "priority": "2"
  },
  "cardLayout": {
    "category": "General",
    "group": "Punctuation",
    "groupDescription": "Corrects missing and misused punctuation",
    "rank": 30,
    "outcome": "Correctness",
    "outcomeDescription": "Corrects misspellings, grammatical errors, missing and misused punctuation. Checks for natural phrasing and good word choice.",
    "outcomeRank": 10
  },
  "categoryHuman": "Comma Misuse within Clauses",
  "action": "alert",
  "id": 3
}
```

7. Receive

```
{
  "sid": 1,
  "rev": 0,
  "checkedBegin": 0,
  "checkedEnd": 13,
  "score": 0,
  "generalScore": -1.0,
  "removed": [],
  "errors": 0,
  "interrupts": 0,
  "skipped": 0,
  "rejected": 0,
  "blocked": 0,
  "dialect": "american",
  "foreign": false,
  "action": "finished"
}
```

8. Receive

```
{
  "action": "option",
  "id": 6
}
```