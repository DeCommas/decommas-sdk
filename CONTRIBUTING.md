# Contributing to DeCommas API SDK

We'd appreciate your contribution and we'd love to make our SDK better together with you!

## Issue creation

Before you create a new issue, please look through the [existing issues](https://github.com/decommas/decommas-sdk/issues?q=is%3Aissue).
If nothing related is found, please create a new issue and fill out the template.

## Codebase Overview

See the `README.md` to get familiar with the DeCommas API SDK structure, namespaces, and their functionality.

We use [TypeScript](https://www.typescriptlang.org/) to provide type safety for the SDK.
Here is project structure:

- `src`: Contains the source code for the SDK.
- `src/index.ts`: The entry point for the SDK.
- `src/infrastructure`: Contains the source code for network communications: API request/response and error handlers.
- `src/business`: Contains the source code for business logic of all SDK namespaces including types and tests for each unit.
- `src/lib`: Contains the utility enums and types
- `src/mocks`: Contains mock data for tests

## Running Tests

To run the unit tests:

```bash
yarn test
```
