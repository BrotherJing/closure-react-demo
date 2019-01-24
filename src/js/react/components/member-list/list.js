import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, Select, MenuItem} from '@material-ui/core';

class MemberList extends React.Component {
  render() {
    return (
      <div className={'member-list-content'}>
        {this.props.items.map(item => (
          <div key={item.id} className={'member-list-content-item'}>
            <div className={'member-list-content-item-cell'}>
              <div className={'member-list-content-item-cell-content'}>
                <div className={'member-list-content-item-cell-content-avatar'}>
                  <img className={
                    'member-list-content-item-cell-content-avatar-content'}
                    src={'dist/undefined.jpg'} alt={'avatar'}/>
                </div>
                <div>
                  <span>{item.text}</span>
                </div>
              </div>
            </div>
            <div className={'member-list-content-item-cell'}>
              <div className={
                'member-list-content-item-cell-content member-list-content-item-cell-content-right'}>
              <FormControl>
                <Select
                  value={'5'}
                  inputProps={{
                    name: 'role',
                    id: 'role-simple',
                  }}>
                  <MenuItem value='1'>Co-owner</MenuItem>
                  <MenuItem value='2'>Editor</MenuItem>
                  <MenuItem value='3'>Commenter</MenuItem>
                  <MenuItem value='4'>Downloader</MenuItem>
                  <MenuItem value='5'>Viewer</MenuItem>
                </Select>
              </FormControl>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

MemberList.propTypes = {
  items: PropTypes.array,
};

/**
 * @nocollapse
 */
MemberList.defaultProps = {
  items: [],
}

export default MemberList;
