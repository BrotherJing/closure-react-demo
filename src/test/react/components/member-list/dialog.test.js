import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MemberDialog from '../../../../js/react/components/member-list/dialog';

describe('<MemberList/>', () => {
    it('simulate click events', () => {
        const onCloseClick = sinon.spy();
        const wrapper = mount(<MemberDialog onClose={onCloseClick}/>);
        // wrapper.find('button').simulate('click');
        // expect(onCloseClick).to.have.property('callCount', 1);
    });
});
