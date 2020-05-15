import React from 'react'
import { shallow } from 'enzyme'

import Dog from '../index'
import mockDogData from './dog.mock.json'

test('renders Dog component', () => {
	const dogComp = shallow(<Dog image={mockDogData.dog} />)
	expect(dogComp.find('img').prop('src')).toEqual(mockDogData.dog)
	expect(dogComp).toMatchSnapshot()
})
