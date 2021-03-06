# closure-react-demo

[![Build Status](https://travis-ci.org/BrotherJing/closure-react-demo.svg?branch=master)](https://travis-ci.org/BrotherJing/closure-react-demo)

A sample project showing how to integrate closure library with react(or other 3rd-party lib), and use closure compiler to minify the code.

#### Getting started

```bash
yarn install
yarn run build-dev
```
Then open `index.html`.

#### Production build(Closure compiler advanced mode)

```bash
yarn run build
```
Then open `advanced.html`.

#### Run test

```bash
yarn run test:unit 
```

## Feature list

- [x] React component and closure library component demo
- [x] use `goog.module` syntax
- [x] use webpack and closure-webpack-plugin to build
- [x] use babel loader to convert jsx syntax
- [x] React calling closure function
- [x] use `material-ui`, treat them as external libraries. Only our own code go through advanced compilation.
- [x] test framework with karma, mocha, enzyme, etc.
- [x] use `webpack-merge-and-include-globally` to bundle libraries.
