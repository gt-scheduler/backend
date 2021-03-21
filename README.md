# GT Scheduler Backend

> Express API server used to augment the functionality provided in the GT scheduler website/crawler.

## 📃 License & Copyright Notice

This repository has been created as a part of the ongoing development of the GT Scheduler project, which was [originally created by Jinseo Park](https://github.com/64json/gt-scheduler).

The work in this repository is licensed under the [AGPL v3.0](https://github.com/gt-scheduler/backend/blob/main/LICENSE) license.

Copyright (c) 2021 the Bits of Good "GT Scheduler" team

### Starter

The repository was initialized using [greenroach/express-ts-template](https://github.com/greenroach/express-ts-template), which is licensed under [the MIT license](https://github.com/greenroach/express-ts-template/blob/main/LICENSE).

## 🚀 Running Locally

### Prerequisites

- Install [Git](https://git-scm.com/)
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Getting started

#### Clone the repository

```
git clone https://github.com/gt-scheduler/backend.git gt-scheduler-backend
```

#### Install dependencies

```
cd gt-scheduler-backend
yarn install
```

#### Build and run the project

```
yarn run build
yarn start
```

The API should be online and serving at `http://localhost:3030`

#### Adding Airtable API integration

To connect with Airtable, obtain a valid API key and base, and rename .env.example to .env, replacing the values within with your own.

### Linting / formatting

To lint the project via ESLint, run:

```
yarn run lint
```

To fix any automatically-fixable lints, instead run:

```
yarn run lint:fix
```

Finally, to run Prettier and automatically format the files, run:

```
yarn run format
```

### Running while developing

The following command will run the server and automatically re-build the backend if any of the source files change.

```
yarn run watch-debug
```

Similar to `yarn start`, the API should be online and serving at `http://localhost:3030`

### Using the debugger in VS Code

Debugging is one of the places where VS Code really shines over other editors.
Node.js debugging in VS Code is easy to setup and even easier to use.
This project comes pre-configured with everything you need to get started.

When you hit `F5` in VS Code, it looks for a top level `.vscode` folder with a `launch.json` file.
In this file, you can tell VS Code exactly what you want to do:

```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach by Process ID",
  "processId": "${command:PickProcess}",
  "protocol": "inspector"
}
```

This is mostly identical to the "Node.js: Attach by Process ID" template with one minor change.
We added `"protocol": "inspector"` which tells VS Code that we're using the latest version of Node which uses a new debug protocol.

With this file in place, you can hit `F5` to attach a debugger.
You will probably have multiple node processes running, so you need to find the one that shows `node dist/server.js`.
Now just set your breakpoints and go!

---

Based on [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Express Generator](https://github.com/expressjs/generator)
