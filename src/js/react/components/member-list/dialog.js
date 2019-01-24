import React from 'react';
import PropTypes from 'prop-types';
import MemberList from './list';
import { withStyles } from '@material-ui/core/styles';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const styles = {
  dialogPaper: {
    maxHeight: '400px',
  },
};

class MemberDialog extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        classes={{'paper': this.props.classes.dialogPaper}}
      >
        <DialogTitle id="form-dialog-title">Participants</DialogTitle>
          <DialogContent>
            <MemberList items={this.props.items}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose}>
              Close
            </Button>
          </DialogActions>
      </Dialog>
    );
  }
}

MemberDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  items: PropTypes.array,
};

/**
 * @nocollapse
 */
MemberDialog.defaultProps = {
  open: false,
  onClose: () => {},
  items: [],
}

export default withStyles(styles)(MemberDialog);
