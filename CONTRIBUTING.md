# How to contribute to Ostello-React-SDK

## Scripts used in this project

### `yarn` (from yarn)

Installs all the dependencies for the project, mentioned in the `package.json` file.

### `yarn start` (from React)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- ### `yarn test` (from React)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

<!-- ### `yarn build`(from React)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`(from React)

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. -->

### `yarn run tw-watch` (from TailwindCSS)

It is advised for the developer to allocate an individual terminal to run this script. It watches for tailwind.config.js file changes, classnames added in .html/.js/.jsx files and recompiles the output CSS.

The developer is also advised to run this script before running **`yarn start`** to prevent the error :

```bat
Module not found: Error: Can't resolve './styles/tailwind.output.css' in 'E:\Events\ostello\ostello-react-sdk\src'
```

The current tailwind configuration is based on the Just-in-time mode. For further details, visit [TailwindCSS - Migrating to JIT Engine](https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine).

### `yarn run render` (from concurrently)

Developers can also run the tailwind watch (`yarn run tw-watch`)and react start (`yarn start`) scripts concurrently. Only for development purpose.
