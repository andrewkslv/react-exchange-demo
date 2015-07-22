## Technical brief

In this project is used technologies such as

 * [webpack](https://github.com/webpack/webpack) - module bundler for managing dependencies.
 * [React](https://github.com/facebook/react) - javaScript library for building user interfaces.
 * [Babel](https://github.com/babel/babel) - compiler for writing next generation JavaScript.
 * [UIKit](https://github.com/uikit/uikit) - lightweight and modular front-end framework.
 * [Nodejs](https://github.com/joyent/node) - runtime environment for server-side and networking applications.

## For developers

### Pre run

First of all, install [Node](http://nodejs.org/). 

Then install Node dependency.

```
$ cd react-exchange-demo
$ npm install 
```

### Development mode

If you want development mode you need 

```
$ cd react-exchange-demo
$ npm start
```

And open new browser tab, pointing to [http://localhost:8080/](http://localhost:8080/).

### Production mode

Production version of the project you could get by 

```
$ cd react-exchange-demo
$ npm run build
```

After running just open index.html.


### Directory Layout

```
.
├── /app/                       # The folder for source files
│   ├── /components/           # React components
│   ├── /less/                 # Style customization
│   ├── /template/             # Index template
│   ├── /thirdparty/           # 3rd-party library UIkit
├── /build/                     # The folder for production output
├── /node_modules/              # 3rd-party libraries and utilities
│── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js           # Webpack configuration for bundling and optimization
```
