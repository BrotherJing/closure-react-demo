import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

function LetterAvatars(props) {
  const { classes, items } = props;
  const flavors = [
    classes.avatar,
    classes.orangeAvatar,
    classes.purpleAvatar
  ];  
  return (
    <Grid container justify="center" alignItems="center">
      {items.map((item, index) => (
        <Avatar 
          className={flavors[index % flavors.length]}
          >{item.text[0]}
        </Avatar>
      ))}
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
};
  
export default withStyles(styles)(LetterAvatars);
