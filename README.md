# Next React Seed

This project is a starter template that provides a basic Next.js, React, and TypeScript setup with added features like ESLint, Prettier, Jest, Commitlint, and CSS Modules. It also includes the Generate React CLI tool, which allows you to quickly generate new components and pages. This project serves as a foundation for starting new projects that require these technologies and tools. You can use this template to jumpstart your development process and save time setting up a new project from scratch.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn

### Installing

1. Clone the repository:

git clone https://github.com/thiagoklemga/ts-next-react-seed.git

2. Install the dependencies:

yarn install

### Usage

#### Component

To create a new component, run the following command:

`yarn component ComponentName`

This command will generate a folder named `ComponentName` inside the `src/components` directory. Inside this folder, you will find 3 files: `ComponentName.tsx`, `ComponentName.module.css` and `ComponentName.test.tsx`.

#### Page

To create a new page, run the following command:

`yarn page pageName`

This command will generate a folder named `pageName` inside the `src/pages` directory. Inside this folder, you will find two files: `index.tsx` and `pageName.module.css`.

#### Running the App

To run the app in development mode, run the following command:

`yarn dev`

This command will start the development server and open the app in your default browser.

#### Running Tests

To run the tests, run the following command:

`yarn test`

### Code Quality

This project uses ESLint and Prettier to enforce code quality standards.

#### Linting

To run the linter, run the following command:

`yarn lint`

This command will check your code for any style or syntax errors.

#### Formatting

To format your code, run the following command:

`yarn format`

This command will format your code according to the rules defined in `.prettierrc`.

### Git Hooks

This project uses Git hooks to enforce code quality standards and run tests before committing or pushing changes.

#### Pre-Commit Hook

The pre-commit hook runs ESLint and Prettier on your code and runs the Jest test suite. If any errors or warnings are found, the commit will be aborted.

#### Pre-Push Hook

The pre-push hook runs the pre-push hook and builds the Next.js app. If any errors or warnings are found, the push will be aborted.

Commit messages standards: `commitlint.config.ts`

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Generate React CLI](https://github.com/buildo/generate-react-cli)
