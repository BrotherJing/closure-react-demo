import React from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
// const Button = require('@material-ui/core').Button;
// import Button from 'closure-react-button/index';
import {TextField} from '@material-ui/core';
import MemberDialog from './components/member-list/dialog';

const string = goog.require('goog.string');

import './todoapp.scss'

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
});
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        items: [], 
        text: '',
        dialogOpen: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Participants
                </Typography>
              </Toolbar>
            </AppBar>
            <div className='content'>
              <MemberDialog
                items={this.state.items}
                open={this.state.dialogOpen}
                onClose={this.onDialogClose}
                />
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
              <Button onClick={this.handleClickOpen}>
                Open
              </Button>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }

    handleClickOpen = (e) => {
      this.setState({ dialogOpen: true });
    }

    onDialogClose = (e) => {
      this.setState({ dialogOpen: false });
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