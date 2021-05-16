# GT Scheduler Backend

> Express API server used to augment the functionality provided in the GT scheduler website/crawler.

To report a bug or request a new feature, please [create a new Issue in the GT Scheduler website repository](https://github.com/gt-scheduler/website/issues/new/choose).

## 📃 License & Copyright Notice

This repository has been created as a part of the ongoing development of the GT Scheduler project, which was [originally created by Jinseo Park](https://github.com/64json/gt-scheduler).

The work in this repository is licensed under the [AGPL v3.0](https://github.com/gt-scheduler/backend/blob/main/LICENSE) license.

Copyright (c) 2021 the Bits of Good "GT Scheduler" team

### Starter

The repository was initialized using [greenroach/express-ts-template](https://github.com/greenroach/express-ts-template), which is licensed under [the MIT license](https://github.com/greenroach/express-ts-template/blob/main/LICENSE).

## 🔍 Overview

The backend API is built using [TypeScript](https://www.typescriptlang.org/) (a typed superset of JavaScript) and [Express](https://expressjs.com/) to support some additional features included in the rest of the project. It also utilizes [`celebrate`](https://github.com/arb/celebrate#readme) for runtime validation and [`morgan`](https://github.com/expressjs/morgan#readme) for HTTP logging.

To implement the feedback submission API, the backend validates and then forwards the submitted data from the frontend to [Airtable](https://airtable.com/), a free small-scale spreadsheet service that stores it (which only project owners have access to).

## 🚀 Running Locally

### Requisite software

- [Node.js](https://nodejs.org/en/) (any recent version will probably work)
- Installation of the [`yarn` package manager](https://classic.yarnpkg.com/en/docs/install/) **version 1** (support for version 2 is untested)

### Running the app

After cloning the repository to your local computer, run the following command in the repo folder:

```
yarn install
```

This may take a couple minutes and will create a new folder called `node_modules` with all of the dependencies installed within. This only needs to be run once.

Then, to build and run the backend API, run:

```
yarn run build
yarn start
```

The API should be online and serving at `http://localhost:3030`

#### Adding Airtable API integration

To connect with Airtable, first obtain a valid API key and base. Then, rename `.env.example` to `.env`, replacing the values within with your own.

### Linting

The project uses pre-commit hooks using [Husky](https://typicode.github.io/husky/#/) and [`lint-staged`](https://www.npmjs.com/package/lint-staged) to run linting (via [ESLint](https://eslint.org/)) and formatting (via [Prettier](https://prettier.io/)). These can be run manually from the command line to format/lint the code on-demand, using the following commands:

- `yarn run lint` - runs ESLint and reports all linting errors without fixing them
- `yarn run lint:fix` - runs ESLint and reports all linting errors, attempting to fix any auto-fixable ones
- `yarn run format` - runs Prettier and automatically formats the entire codebase
- `yarn run format:check` - runs Prettier and reports formatting errors without fixing them

### Running while developing

The following command will run the server and automatically re-build the backend if any of the source files change.

```
yarn run watch-debug
```

Similar to `yarn start`, the API should be online and serving at `http://localhost:3030`

### Using the debugger in VS Code (instructions from starter code)

Debugging is one of the places where VS Code really shines over other editors. Node.js debugging in VS Code is easy to setup and even easier to use. This project comes pre-configured with everything you need to get started.

When you hit `F5` in VS Code, it looks for a top level `.vscode` folder with a `launch.json` file. In this file, you can tell VS Code exactly what you want to do:

```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach by Process ID",
  "processId": "${command:PickProcess}",
  "protocol": "inspector"
}
```

This is mostly identical to the "Node.js: Attach by Process ID" template with one minor change. We added `"protocol": "inspector"` which tells VS Code that we're using the latest version of Node which uses a new debug protocol.

With this file in place, you can hit `F5` to attach a debugger. You will probably have multiple node processes running, so you need to find the one that shows `node dist/server.js`. Now just set your breakpoints and go!

## 👩‍💻 Contributing

The GT Scheduler project welcomes (and encourages) contributions from the community. Regular development is performed by the project owners (Jason Park and [Bits of Good](https://bitsofgood.org/)), but we still encourage others to work on adding new features or fixing existing bugs and make the registration process better for the Georgia Tech community.

More information on how to contribute can be found [in the contributing guide](/CONTRIBUTING.md).

---

Based on [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Express Generator](https://github.com/expressjs/generator)
