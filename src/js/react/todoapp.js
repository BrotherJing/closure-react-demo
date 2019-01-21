import React from 'react';
import Mui from '@material-ui/core';
// const Button = require('@material-ui/core').Button;
import Button from 'closure-react-button/index';
import TopAppBar from 'closure-react-top-app-bar/index';
import TopAppBarFixedAdjust from 'closure-react-top-app-bar/FixedAdjust';
import List from 'closure-react-list/index';
import ListItem from 'closure-react-list/ListItem';
import ListItemText from 'closure-react-list/ListItemText';
import TextField from 'closure-react-text-field/index';
import Input from 'closure-react-text-field/Input';
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
          <TopAppBar
            title='TODO'/>
          <TopAppBarFixedAdjust>
            <div className='content'>
              <MemberList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <TextField
                  label='What needs to be done?'
                  textarea={true}>
                  <Input
                    value={this.state.text}
                    onChange={this.handleChange}/>
                </TextField>
                <Button raised dense>
                  {`Add #${this.state.items.length + 1}`}
                </Button>
              </form>
            </div>
          </TopAppBarFixedAdjust>
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
  
  class TodoList extends React.Component {
    render() {
      return (
        <List>
          {this.props.items.map(item => (
            <ListItem key={item.id}>
              <ListItemText primaryText={item.text}/>
            </ListItem>
          ))}
        </List>
      );
    }
  }
  
export default TodoApp;