A template for a TypeScript project with absolute imports (using `tsconfig-paths`).

```bash
# (other outputs removed)
$ npm install

$ npm run dev
Hello, world! 1 is odd.

$ npm run build

$ npm start
Hello, world! 1 is odd.

$ tree dist
dist
├── lib
│   └── echoFunc.js
└── main.js

$ tree src
src
├── lib
│   └── echoFunc.ts
└── main.ts
```
