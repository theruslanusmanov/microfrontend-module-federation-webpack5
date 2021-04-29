# Micro-Frontend Module Federation (Webpack 5) - based on Angular shell

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Description
This project based on Webpack 5 (Module Federation Plugin), implementing micro-frontend approach.

* [How to build a micro-frontends architecture, with Angular and Webpack Module Federation](https://medium.com/agorapulse-stories/building-a-micro-frontends-architecture-in-2021-with-angular-and-webpack-module-federation-50d073617645)
* [Micro-frontend example project from github](https://github.com/benorama/mfe-advanced-demo)
* [Multi Framework(version) Micro Frontends with Module Federation and Web Components](https://github.com/manfredsteyer/multi-framework-micro-frontend)

## Structure
* `apps` - Micro-apps & e2e tests
* `deploy` - Deploy configuration files

## Stack
* [Angular](https://angular.io/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [SCSS](https://sass-lang.com/)
* [Jest](https://jestjs.io/ru/docs/getting-started)
* [Cypress](https://docs.cypress.io/)
* [Nx](https://nx.dev/)
* [Webpack 5 (Module Federation)](https://webpack.js.org/concepts/module-federation/)

## Install
Run command `yarn`

## Run
* Apps `yarn start`
* **Micro-apps:**

| Apps                    | Port | Command                              |
| ------------------------| ---- | ------------------------------------ |
| Shell                   | 4200 | `yarn start-shell`                   |
| Home                    | 4201 | `yarn start-home`                    |
| News                    | 4202 | `yarn start-news`                    |

## Build
TODO

## Deploy
TODO

## Style guides

- [**Angular Style Guide**](https://angular.io/guide/styleguide) - Looking for an opinionated guide to Angular syntax, conventions, and application structure? Step right in! This style guide presents preferred conventions and, as importantly, explains why.

## Nx
This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@micro-frontend-module-federation/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
