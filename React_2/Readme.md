# _Chapter 02 - Igniting our App_

## Q:1 What is `NPM`?

A: It is a tool used for package management and the default package manager for Node projects. `NPM is installed when NodeJS` is installed on a machine.To add or update packages, we use the NPM CLI to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' NPM is also used for running scripts, managing project configurations, and handling other project-related tasks.

- `npm` alternative is `yarn`

### How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

<hr>

## Q:2 What is `Parcel/Vite/Webpack` bundlers? Why do we need them?

### Parcel:

`Description`: Parcel is a zero-config bundler that can be used with React applications. It simplifies the build process by automatically handling dependencies and providing an easy setup experience.
`Use`: Parcel is suitable for React developers who prioritize simplicity and quick setup without the need for extensive configuration.

### Vite:

`Description`: Vite is a build tool specifically designed for modern frontend frameworks like React. It leverages native ES module imports for faster development and optimized production builds.
`Use`: Vite excels in providing a rapid development experience for React applications, with features like fast hot module replacement (HMR) and efficient bundling.

### WebPack:

`Description`: Webpack is a highly configurable module bundler that is commonly used in React projects. It offers extensive customization options and supports a wide range of assets.
`Use`: Webpack is versatile and can be tailored to complex React applications, supporting tasks like transpilation, code splitting, and other optimizations.

### Why do we need them :

- JSX Transformation: These tools handle the transformation of JSX (React's syntax extension) into JavaScript that browsers can understand.
- Dependency Management: They manage and bundle React and its dependencies efficiently.
- Development Server: They provide development servers with features like hot module replacement for a smoother React development experience.
- Optimizations: These tools optimize React application code for production, ensuring smaller bundle sizes and faster loading times.
- Code Splitting: They support code splitting, enabling the loading of only the necessary React components for different parts of the application.

### Parcel Features:

- DEV and production Build
- Local Server
- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files i.e.,refershing your page automatically whenever any changes happen
- File watcher algorithm - written in C++
- Caching while development in ".parcel-cache" folder - Fasting Builds
- Image optimization
- Minification - reducing javascript
- Bundling
- Compressing the code by removing all whitespaces
- Consistent hashing algorithm
- Automatic code splitting
- Differential Bundling - Compatible with older version of browser
- Diagonstics of Error give very beautifully
- Better error handling
- Provide HTTPS in dev
- Tree Shaking alogirthms - remove unused code for you
- Cleaning our code
- Super fast building algorithm
- Port Number
- Zero Configuration

### Installation commands:

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands : - For development build:
`  npx parcel <entry_point> 
 ` - For production build :
`  npx parcel build <entry_point> 
 `
<hr>

## Q:3 What is `.parcel-cache`?

A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. Its purpose is to enhance build performance by storing and retrieving intermediate build artifacts. Including it in the project's `.gitignore` is a common practice.

<hr>

## Q:4 What is `npx`?

A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

Example : You can create a React app using `npx create-react-app` without installing the create-react-app globally

<hr>

## Q:5 What is difference between `dependencies` vs `devDependencies`?

A: `Dependencies` : In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object. Such as `Vue`, `React`, `Angular`, `Express`, `JQuery`

`DevDependencies` should contain modules/packages a developer needs during development.n package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number.Such as, `parcel, webpack, vite, mocha`.

```javascript
"dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}

"devDependencies": {
  "postcss": "^8.4.5",
  "autoprefixer": "^10.4.0"
}
```

To save a dependency as a devDependency on installation, we need to do,

```
npm install -D <packageName>
```

<hr>

## Q:6 What is `Tree Shaking`?

A: Tree shaking is a technique used in JavaScript build tools to eliminate dead code or unused modules from the final bundle. Its goal is to reduce the size of the generated JavaScript bundle by removing parts of the code that are not actually used in the application. This optimization is particularly valuable in large projects where libraries or modules may contain more functionality than what is necessary for the specific application.

<hr>

## Q:7 What is `Hot Module Replacement(HMR)`?

A: Hot Module Replacement (HMR) is a development tool that allows developers to update modules in an application without requiring a full page refresh. It enables real-time updates to the application state, styles, and logic during development. HMR is commonly used with build tools like webpack.

When changes are made to a module, HMR injects the updated module into the running application, preserving its current state. This significantly speeds up the development workflow by providing a more interactive and seamless experience, as opposed to manually refreshing the entire page after each code modification.

<hr>

## Q:8 List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.

A: `5 superpowers of Parcel`:

- `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
- `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
- `Image optimization`
- `Caching while development`

<hr>

## Q:9 What is `.gitignore`? What should we add and not add into it?

A: The `.gitignore file` is a file in a Git repository that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.You should add files such as node_modules/, dist/, and build/ output to .gitignore. We should avoid adding sensitive information like API keys and credentials.

The entries in this file can also follow a matching pattern.

```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```

This is an example of what the .gitignore file could look like:

```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

## Q:10 What is the difference between `package.json` and `package-lock.json`?

A: `package.json`:

- This file is mandatory for every project
- It contains basic information about the project
- Application name/version/scripts

`package-lock.json`:

- This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
- It is generated after an npm install
- It allows future devs & automated systems to download the same dependencies as the project.
- It also allows to go back to the past version of the dependencies without actual
  ‘committing the node_modules folder.
- It records the same version of the installed packages which allows to reinstall them.
  Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example in `package.json` file:

```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

- **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
- **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.

## Q:11 Why should I not modify `package-lock.json`?

A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Q:12 What is `node_modules` ? Is it a good idea to push that on git?

A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## Q:13 What is the `dist` folder?

A: The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## Q:14 What is `browserslist`?

A: `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
