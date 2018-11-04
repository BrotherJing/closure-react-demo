'use strict';
goog.module('app');

const notepad = goog.require('tutorial.notepad');

const Timer = require('./react/timer');
const React = require('react');
const ReactDOM = require('react-dom');

// react component
ReactDOM.render(React.createElement(Timer, null), document.getElementById('app'));

// closure library component
var noteData = [
    {'title': 'Note 1', 'content': 'Content of Note 1'},
    {'title': 'Note 2', 'content': 'Content of Note 2'}];
var noteListElement = document.getElementById('notes');
var notes = tutorial.notepad.makeNotes(noteData, noteListElement);