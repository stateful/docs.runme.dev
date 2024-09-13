---
terminalRows: 20
---

# Redirects

As part of migrating to a new docs structure, let's be sure all old links have a new home. Just grab a sitemap before deploy: e.g. https://docs.runme.dev/sitemap.xml.

```javascript {"id":"01J7PBSH505CN6QZT1T73RE0MG","interactive":"true","name":"NOT_FOUND"}
const { readFile } = require("fs").promises;
const { XMLParser } = require("fast-xml-parser");
const fetch = require("node-fetch");

(async function() {
  const rawXml = await readFile("old-sitemap.xml", "utf8");
  const parser = new XMLParser();
  const sitemap = parser.parse(rawXml);

  const urls = sitemap.urlset.url;

  for (const url of urls) {
    try {
      const response = await fetch(url.loc);
      if (response.status < 400) {
        continue
      } else {
        console.log(`${url.loc} returned status ${response.status}.`);
      }
    } catch (error) {
      console.error(`Error fetching ${url.loc}:`, error);
    }
  }
})();
```

The results are stored in the `NOT_FOUND` env var. All these links need redirects to be put in place, e.g. `vercel.json`:

```sh {"id":"01J7PE889Y4C7J033H0HMW49Z4"}
echo -n $NOT_FOUND
```
