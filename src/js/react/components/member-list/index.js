import React from 'react';
import Select from 'closure-react-select/index';

class MemberList extends React.Component {
  render() {
    return (
      <div className={'member-list-content'}>
        {this.props.items.map(item => (
          <div key={item.id} className={'member-list-content-item'}>
            <div className={'member-list-content-item-cell'}>
              <div className={'member-list-content-item-cell-content'}>
                <div className={'member-list-content-item-cell-content-avatar'}>
                  <img className={'member-list-content-item-cell-content-avatar-content'} src={'dist/undefined.jpg'}/>
                </div>
                <div>
                  <span>{item.text}</span>
                </div>
              </div>
            </div>
            <div className={'member-list-content-item-cell'}>
              <div className={'member-list-content-item-cell-content member-list-content-item-cell-content-right'}>
                <Select label='Role'>
                  <option disabled></option>
                  <option value='1'>Co-owner</option>
                  <option value='2'>Editor</option>
                  <option value='3'>Commenter</option>
                  <option value='4'>Downloader</option>
                  <option value='5'>Viewer</option>
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MemberList;