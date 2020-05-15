import React from 'react'
import { mount } from 'enzyme'

import Header from '../index'
import mockHeaderData from './Header.mock.json'

describe('Footer component tests', () => {
	let HeaderComp: any = null

	beforeEach(() => {
		HeaderComp = mount(
			<Header
				logo={mockHeaderData.logo}
				siteUrl={mockHeaderData.siteUrl}
				navigations={mockHeaderData.navigation}
				altText={mockHeaderData.altText}
			/>
		)
	})

	it('validate component props', () => {
		expect(HeaderComp.prop('logo')).toEqual(mockHeaderData.logo)
		expect(HeaderComp.prop('siteUrl')).toEqual(mockHeaderData.siteUrl)
		expect(HeaderComp.prop('navigations')).toEqual(mockHeaderData.navigation)
		expect(HeaderComp.prop('altText')).toEqual(mockHeaderData.altText)
	})

	it('matches the snaphot', () => {
		expect(HeaderComp).toMatchSnapshot()
	})
})
