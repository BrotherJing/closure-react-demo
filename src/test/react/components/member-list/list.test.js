import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MemberList from '../../../../js/react/components/member-list/list';

describe('<MemberList/>', () => {
    it('render 3 items', () => {
        const items = [{
            id: 1,
            text: '123'
        },{
            id: 2,
            text: '123'
        },{
            id: 2,
            text: '123'
        }]
        const wrapper = shallow(<MemberList items={items}/>);
        expect(wrapper.find('.member-list-content-item')).to.have.lengthOf(3);
    });
});
