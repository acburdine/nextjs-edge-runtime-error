# ISSUE REPRODUCTION

To reproduce this issue, install Nodejs 18.17 and run `npm run dev`.

Visit `http://localhost:3000/test/sign.json` and you'll see a 500 error. Visit `http://localhost:3000/api/test` and you'll see `{ "success": true }`.

Install Node.js < 18.17 and the issue disappears.
