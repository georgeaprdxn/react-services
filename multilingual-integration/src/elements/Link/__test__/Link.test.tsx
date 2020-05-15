import React from 'react'
import { shallow } from 'enzyme'

import Link from '../index'
import mockLinkData from './Link.mock.json'

describe('Link element tests', () => {
	let linkElem: any = null
	beforeEach(() => {
		linkElem = shallow(
			<Link
				url={mockLinkData.url}
				target={mockLinkData.target}
				label={mockLinkData.label}
			/>
		)
	})

	it('should render a <a />', () => {
		expect(linkElem.find('.custom-link').length).toEqual(1)
	})

	it('validate inner text', () => {
		expect(linkElem.find('.custom-link').text()).toEqual(mockLinkData.label)
	})

	it('validates all props', () => {
		expect(linkElem.find('.custom-link').prop('href')).toEqual(mockLinkData.url)
		expect(linkElem.find('.custom-link').prop('title')).toEqual(
			mockLinkData.label
		)
		expect(linkElem.find('.custom-link').prop('target')).toEqual(
			mockLinkData.target
		)
	})

	it('matches the snaphot', () => {
		expect(linkElem).toMatchSnapshot()
	})
})
