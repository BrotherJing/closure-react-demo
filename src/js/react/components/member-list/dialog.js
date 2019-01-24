import React from 'react';
import MemberList from './list';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

class MemberDialog extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
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

export default MemberDialog;
