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

## Mysql Migration
---
Use mysql migration mechanism to make all team members using same database all the time.
### Migration of table creation:
- use `npm run add_migration -- create_table_tableName` to create a migration file.
- Now in the folder `migrations`,  the newest file located with greatest timestamp as it predecessor, such as `12213545345_create_table_tableName.js`.
- Write the query in up key of the json created for the forward migration. As a part of good practice, also write the script to rollback the migration in down key, such as:
    ```
    module.exports = {
        "up": "CREATE TABLE tableName (tableName_id INT NOT NULL, UNIQUE KEY tableName_id (tableName_id), name TEXT )",
        "down": "DROP TABLE tableName"
    }
    ```
### Migration of seed adding:
- use `npm run add_seed -- create_table_tableName` to create a migration file, notice the table `tableName` should be exist.
- Fill the keys, for example:
    ```
    module.exports = {
        "up": "UPDATE tableName SET name = 'John Snow' WHERE name = ''",
        "down": "UPDATE tableName SET name = '' WHERE name = 'John Snow'"
    }
    ```

### Execution of migration:
- General migration
1. Run `node migration.js up`. Runs all the pending up migrations.
2. Run `node migration.js up 2`. Runs 2 pending up migrations from the last position.
3. Run `node migration.js down`. Runs only 1 down migrations.
4. Run `node migration.js refresh`. Runs all down migrations followed by all up.

- Anonymous migrations
At times, few migrations need to run again or anonymously. There could be variety of reasons old migrations need to be executed or rollbacked. It can be done this way:
1. Up migration: `node migration.js run 1500891087394_create_table_tableName.js up`
2. Down migration: `node migration.js run 1500891087394_create_table_tableName.js down`
