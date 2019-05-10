import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import MemberDialog from './components/member-list/dialog';
import LetterAvatars from './components/member-list/icon-list';
import './todoapp.scss';

const string = goog.require('goog.string');

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
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
                <Icon fontSize="large">
                  add_circle
                </Icon>
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
              <LetterAvatars items={this.state.items}/>
              <form onSubmit={this.handleSubmit}>
                <Grid container justify="center" alignItems="center">
                  <TextField
                    id="standard-name"
                    label="Hint"
                    value={this.state.text}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <Button variant="contained" color="secondary"
                    onClick={this.handleSubmit}>
                    {`Add #${this.state.items.length + 1}`}
                  </Button>
                </Grid>
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
    this.setState({
      dialogOpen: true,
    });
  }

  onDialogClose = (e) => {
    this.setState({
      dialogOpen: false,
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: string.capitalize(this.state.text),
      id: Date.now(),
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }
}

export default TodoApp;
