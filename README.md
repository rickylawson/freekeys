## What is `freekeys`?

Free API keys OMDb and TMDb without registration.

## Installation

```bash
npm i freekeys
```

## Usage

Import the library in your code:

```js
const freekeys = require('freekeys');
```

### Get keys

```js
freekeys().then(params => {
    console.log(params);
});
//{
//  "tmdb_key": "e547e17d4e91f3e62a571655cd1ccaff",
//  "imdb_key": "966c4f4f"
//}
```