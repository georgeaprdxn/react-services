import React from 'react'
import { shallow } from 'enzyme'

import Textarea from '../index'
import mockTextareaData from './Textarea.mock.json'

describe('Textarea tests', () => {
	let textareaElem: any = null
	const handleChangeStub = jest.fn()
	beforeEach(() => {
		textareaElem = shallow(
			<Textarea
				rows={mockTextareaData.row}
				val={mockTextareaData.val}
				handleChange={handleChangeStub}
			/>
		)
	})

	it('should render a <textarea />', () => {
		expect(textareaElem.find('.custom-textarea').length).toEqual(1)
	})

	it('validates all props', () => {
		expect(textareaElem.find('.custom-textarea').prop('rows')).toEqual(
			mockTextareaData.row
		)
		expect(textareaElem.find('.custom-textarea').prop('value')).toEqual(
			mockTextareaData.val
		)
	})

	it('checks the DOM events', () => {
		textareaElem
			.find(`.custom-textarea`)
			.simulate('change', { target: { value: mockTextareaData.val } })

		expect(handleChangeStub).toHaveBeenCalledTimes(1)
	})

	it('matches the snaphot', () => {
		expect(textareaElem).toMatchSnapshot()
	})
})
