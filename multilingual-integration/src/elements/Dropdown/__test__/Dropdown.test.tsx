import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from '../index'
import mockDropdownData from './Dropdown.mock.json'

describe('Dropdown element tests', () => {
	let dropdownComp: any = null
	const handleChangeStub = jest.fn()
	beforeEach(() => {
		dropdownComp = shallow(
			<Dropdown
				options={mockDropdownData.options}
				selectedOption={mockDropdownData.selectedOption}
				isMulti={mockDropdownData.isMulti}
				handleChange={handleChangeStub}
			/>
		)
	})

	it('validates all props', () => {
		expect(dropdownComp.find('.custom-select').prop('options')).toEqual(
			mockDropdownData.options
		)
		expect(dropdownComp.find('.custom-select').prop('value')).toEqual(
			mockDropdownData.selectedOption
		)
		expect(dropdownComp.find('.custom-select').prop('isMulti')).toEqual(
			mockDropdownData.isMulti
		)
	})

	it('checks the DOM events', () => {
		dropdownComp
			.find(`.custom-select`)
			.simulate('change', { value: mockDropdownData.selectedOption })

		expect(handleChangeStub).toHaveBeenCalledTimes(1)
	})

	it('matches the snaphot', () => {
		expect(dropdownComp).toMatchSnapshot()
	})
})
