# jeasx-bookmarks

A simple bookmark manager based on jeasx. This might be useful for you, if you constantly switching browsers and want to organize bookmarks in a central place.

To use it, you'll need to provide an appropriate environment via an .env-file to store your bookmarks in a redis database.

```env
BASIC_AUTH="test:test"
KV_REST_API_READ_ONLY_TOKEN="..."
KV_REST_API_TOKEN="..."
KV_REST_API_URL="..."
KV_URL="..."
```

Bookmarks are stored as JSON and can be edited via the user-interface in the following format:

```txt
GitHub|https://www.github.com
Vercel|https://www.vercel.com
```
