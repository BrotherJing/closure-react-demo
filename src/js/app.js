goog.module('app');

const notepad = goog.require('tutorial.notepad');

const TodoApp = require('./react/todoapp').default;
const React = require('react');
const ReactDOM = require('react-dom');
// const Redux = require('redux/dist/redux');
// const Counter = require('./redux/counter').default;
// const counter = require('./redux/reducer').default;

// const store = Redux.createStore(counter);

var App = <div>
    <TodoApp/>
</div>
// react component
ReactDOM.render(App, document.getElementById('todoapp'));

// redux
// const render = () => ReactDOM.render(
//     <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//         onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('counter')
// )
// render();
// store.subscribe(render);

// closure library component
var noteData = [
    {'title': 'Note 1', 'content': 'Content of Note 1'},
    {'title': 'Note 2', 'content': 'Content of Note 2'}];
var noteListElement = document.getElementById('notes');
var notes = notepad.makeNotes(noteData, noteListElement);