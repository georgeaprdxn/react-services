import React from 'react'
import { shallow } from 'enzyme'

import Radio from '../index'
import mockRadioData from './Radio.mock.json'

describe('Radio element tests', () => {
	let radioElem: any = null
	const handleChangeStub = jest.fn()
	beforeEach(() => {
		radioElem = shallow(
			<Radio
				label={mockRadioData.label}
				name={mockRadioData.name}
				id={mockRadioData.id}
				isChecked={mockRadioData.isChecked}
				handleChange={handleChangeStub}
			/>
		)
	})

	it('should render a <input type="radio" />', () => {
		expect(radioElem.find('.radio-control').length).toEqual(1)
	})

	it('should render a <label/>', () => {
		expect(radioElem.find('.radio-label').length).toEqual(1)
	})

	it('should render a <span />', () => {
		expect(radioElem.find('.checkmark').length).toEqual(1)
	})

	it('validate inner text', () => {
		expect(radioElem.find('.radio-label').text()).toEqual(mockRadioData.label)
	})

	it('validates all props', () => {
		expect(radioElem.find('.radio-control').prop('name')).toEqual(
			mockRadioData.name
		)
		expect(radioElem.find('.radio-control').prop('id')).toEqual(
			mockRadioData.id
		)
		expect(radioElem.find('.radio-control').prop('checked')).toEqual(
			mockRadioData.isChecked
		)
	})

	it('checks the DOM events', () => {
		radioElem
			.find(`.radio-control`)
			.simulate('change', { target: { checked: mockRadioData.isChecked } })

		expect(handleChangeStub).toHaveBeenCalledTimes(1)
	})

	it('matches the snaphot', () => {
		expect(radioElem).toMatchSnapshot()
	})
})
