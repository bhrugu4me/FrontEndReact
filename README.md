## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment for more information.

## Project Description

Lets have some overview of project by directory wise, I am here going to explain some important directories only.

### config

This directory contains the configuration files at application level

enzyme - This directory contains configuration related with testing

### public

This directory contains the public resources and index.html which is responsible to execute.

### scripts

This directory contains script files for building, starting and testing the application.

### src

This directory contains the main source code to run the application, It has different directories, lets go one by one.

#### _test_

This directory contains the test cases(.test files) and its snapshots. which is generated by enzyme

#### components

This directory contains the components which is non-domain and also we can re-use it any where in application e.g. Icons, Buttons, Header, Error etc..

#### config

This directory contains the configuration files related with API and redux-persist.

#### css

This directory contains the application level css, e.g. colors, text, size etc..

#### pages

This directory contains the pages/views which interacts with the end user. Each page(itself directory) contains domain level files as below.
-> action-types.js --- defines actions types
-> actions.js --- contains actions which is responsible to change the reducers
-> api.js -- api, calling the end points
-> index.js -- like container, wrapping of page with state and actions
-> reducer.js -- contains page level reducer
-> pagename.js -- main view, which interacts with end user
-> pagename.module.scss -- page level style sheet
-> pagename.routes.js -- route file

Two Pages(Views) there as describe below

1. Home ---> Just like dashboard, right now I have illustrate the use for Icons and buttons.
2. UserList --> list of users which is in requirement. end user can list users, view user detail, search for any user. Extra features like pagination is also there

#### redux

This directory contains redux files and maintain state and store. Its also used **redux-persist**, we can extend it later by defining more persistance criteria like authorization etc...

#### router

This directory contains the routes of all pages and routing table. There is already secure-route created which we can use later on to define secure routing through out the applications

## Libraries

### react-redux

Redux is a state management tool. While it's mostly used with React, With Redux, the state of your application is kept in a store and each component can access any state that it needs from this store.

### material-ui --> material-table

Material Table is a simple and powerful Datatable for React based on Material-UI Table with some additional features. They support many different use cases (editable, filtering, grouping, sorting, selection, i18n, tree data and more)

### axios

Axios is one of the most popular library to call end-points(API). Axios is a lightweight HTTP client based, promise-based and thus we can take advantage of async and await for more readable asynchronous code. We can also intercept and cancel requests, and there’s built-in client side protection against cross site request forgery. But the best part about Axios? The easy to use API!

### webpack

Webpack is used for bundling and packaging for react application. We have also extended feature which is **react-babel**. We have used **babel-loader** because our application mostly written in JavaScript ES6. ES6 is a nice improvement over the language but older browsers cannot understand the new syntax. So for getting ES6 to work in older browser we need some kind of transformation which is known as **transpiling**.Webpack doesn’t know how to transform ES6 JavaScript to ES5 but it has this concept of loaders. so we have used **babel-loader**.

### Jest and Enzyme -- For Unit Testing

Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications.

Jest acts as a test runner, assertion library, and mocking library.

Jest also provides Snapshot testing, the ability to create a rendered ‘snapshot’ of a component and compare it to a previously saved ‘snapshot’. The test will fail if the two do not match. Snapshots will be saved for you beside the test file that created them in an auto-generate **snapshots** folder.

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

Enzyme, adds some great additional utility methods for rendering a component (or multiple components), finding elements, and interacting with elements.

Both Jest and Enzyme are specifically designed to test React applications, Jest can be used with any other Javascript app but Enzyme only works with React.

## Other Specifications

1. Application is already using linters (ESLint), we can add more rules.
2. Snappiness and Responsive design
3. Pre-commit hooks are there

## Future Steps

1. Directory name **services** can be extend later which generally used to write services at business layer ie. business logics between api and actions.
2. We can extend the use of **Redux-Persist** to persist the storage of application at different level.
3. We can extend the use of **Error** component to better handle the exception.
4. We can add more rules for **ESLint** as per developers convenience
5. Comments can be added at actions to define more understanding for given code.
6. **Secure-route** created under **route** directory, we can extend it and use it for secure routing through out the application.
