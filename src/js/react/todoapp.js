import React from 'react';
import Button from './component/button';
import TopAppBar from './component/top-app-bar';
import TopAppBarFixedAdjust from './component/top-app-bar/FixedAdjust';
import List from './component/list';
import ListItem from './component/list/ListItem';
import ListItemText from './component/list/ListItemText';

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
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                  What needs to be done?
                </label>
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <Button raised dense>
                  Add #{this.state.items.length + 1}
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