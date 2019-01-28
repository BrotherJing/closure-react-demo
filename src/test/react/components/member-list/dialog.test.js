import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MemberDialog from '../../../../js/react/components/member-list/dialog';

suite('<MemberList/>');

test('simulate click events', () => {
    const onCloseClick = sinon.spy();
    const wrapper = shallow(<MemberDialog onClose={onCloseClick}/>);
    wrapper.find('button').simulate('click');
    expect(onCloseClick).to.have.property('callCount', 1);
});
