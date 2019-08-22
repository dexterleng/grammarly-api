# Grammarly API

This is just a demo how you can use the Grammarly API.

Refer to api-docs.md or just use DevTools on Firefox (can't see cookies on Chrome).

The cookies are obtain from `GET https://grammarly.com/`.

Usage:

```
(async function () {
    try {
      const g = new Grammarly();
      await g.init();
      g.check("helloworld");
    } catch (error) {
      console.log(error);
    }
  })();
```
