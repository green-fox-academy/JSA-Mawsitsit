# JSA-Mawsitsit
This is the repo of JSA's Mawsitsit group whose admin is Mate and collaborators Ben, Cola and Earvin.

## The Frontend
 Use `npm install` or `yarn install` to install the dependencies.

### Environment Variables Setup
 - You need a `.env` file to store your environment variables, e.g. `PORT`.
 - You need  `import { ... } from 'react-native-dotenv'` to import the stored environment variables. Then you can use these variables directly.
 - Please check this [documentation](https://www.npmjs.com/package/react-native-dotenv) if you have any question about `react-native-dotenv`.

### ESLint and Git Hooks
 - The frontend part of this project borrows help from [ESLint](https://eslint.org/) with [Airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb) and from [husky](https://www.npmjs.com/package/husky) which makes using [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) easy, to 'force' us to code sticking to the rules.
 - For now, we only implemented one hook that is `pre-commit` which always calls ESLint to check files before any committing.

## The Backend
Use `npm install` or `yarn install` to install the dependencies.

- The backend part of this project is implemented on `Express`.
- Use `npm start` or `yarn start` to start the sever.
- You probably need to config your own environment variables, e.g. `PORT`, by the help of a `.env` file and [dotenv](https://www.npmjs.com/package/dotenv) package.
