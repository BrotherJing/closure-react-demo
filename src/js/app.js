goog.module('app');

const notepad = goog.require('tutorial.notepad');

const Timer = require('./react/timer');
const TodoApp = require('./react/todoapp').default;
const React = require('react');
const ReactDOM = require('react-dom');

var App = <div>
    <Timer/>
    <TodoApp/>
</div>
// react component
ReactDOM.render(App, document.getElementById('todoapp'));

// closure library component
var noteData = [
    {'title': 'Note 1', 'content': 'Content of Note 1'},
    {'title': 'Note 2', 'content': 'Content of Note 2'}];
var noteListElement = document.getElementById('notes');
var notes = notepad.makeNotes(noteData, noteListElement);