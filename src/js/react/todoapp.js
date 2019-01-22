import React from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
// const Button = require('@material-ui/core').Button;
// import Button from 'closure-react-button/index';
import {TextField} from '@material-ui/core';
import MemberList from './components/member-list';

const string = goog.require('goog.string');

import './todoapp.scss'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Participants
              </Typography>
            </Toolbar>
          </AppBar>
          <div className='content'>
            <MemberList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="standard-name"
                label="What to do?"
                value={this.state.text}
                onChange={this.handleChange}
                margin="normal"
              />
              <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                {`Add #${this.state.items.length + 1}`}
              </Button>
            </form>
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: string.capitalize(this.state.text),
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
export default TodoApp;