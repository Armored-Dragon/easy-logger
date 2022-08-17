A crazy simple console utility that organizes and colorizes terminal output. I was inspired to make this after the whole [colors.js fiasco](https://news.yahoo.com/developer-sabotages-own-code-break-170833432.html).
I have privately made different iterations of colored terminal output before becoming tired of having to sift though other repositories to find my module. So I'm just going to upload it here, so that I can easily retrieve it.

This module is mostly used in debugging applications, but can be used in production with minimal problems. I would however strongly recommend against it and instead use a legitimate logging module. I'm just using this for quick debugging and I like the pretty colors.
Easy-Logger is custom fitted to my own needs and may not work for everyone.

This is a VERY light-weight module. So much so that I put more effort into writing this documentation than I did the package. Just look in index.js. You'll see.

# Installation

Don't, but if you must:

`npm i gitlab:ArmoredDragon/easy-logger`

# Usage

```js
// Install the module into a constant
const log = require('easy-logger');

// Use X logger
log.err('Oh noos!'); // Logs an error into the console
```

The following table shows what functions are currently supported.
This assumes you have installed the module into a constant/variable named "log".
| Supported | Name |
| --------- | ---------- |
| Error | log.err() |
| Debug | log.debg() |
| Info | log.i() |
| Request | log.req() |

# Why?

Don't question me.
