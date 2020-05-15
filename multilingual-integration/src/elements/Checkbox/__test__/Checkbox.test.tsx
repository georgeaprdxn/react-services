import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from '../index'
import mockCheckboxData from './Checkbox.mock.json'

describe('Checkbox element tests', () => {
	let checkboxWrapper: any = null
	const handleChangeStub = jest.fn()
	beforeEach(() => {
		checkboxWrapper = shallow(
			<Checkbox
				label={mockCheckboxData.label}
				name={mockCheckboxData.name}
				id={mockCheckboxData.id}
				isChecked={mockCheckboxData.isChecked}
				handleChange={handleChangeStub}
			/>
		)
	})

	it('should render a checkbox', () => {
		expect(
			checkboxWrapper.find(`#${mockCheckboxData.id}`).prop('type')
		).toEqual('checkbox')
	})

	it('validates all props', () => {
		expect(
			checkboxWrapper.find(`#${mockCheckboxData.id}`).prop('name')
		).toEqual(mockCheckboxData.name)

		expect(checkboxWrapper.find(`#${mockCheckboxData.id}`).prop('id')).toEqual(
			mockCheckboxData.id
		)

		expect(
			checkboxWrapper.find(`#${mockCheckboxData.id}`).prop('checked')
		).toEqual(mockCheckboxData.isChecked)
	})

	it('checks the DOM events', () => {
		checkboxWrapper
			.find(`#${mockCheckboxData.id}`)
			.simulate('change', { target: { checked: false } })

		expect(handleChangeStub).toHaveBeenCalledTimes(1)
	})

	it('matches the snaphot', () => {
		expect(checkboxWrapper).toMatchSnapshot()
	})
})
