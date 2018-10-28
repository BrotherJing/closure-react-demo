'use strict';
goog.module('app');
const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render() {
        return React.createElement('div', null, 'Hello world!');
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));