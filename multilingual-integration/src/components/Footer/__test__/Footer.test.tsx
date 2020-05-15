import React from 'react'
import { mount } from 'enzyme'

import Footer from '../index'
import mockFooterData from './Footer.mock.json'

describe('Footer component tests', () => {
	let FooterComp: any = null

	beforeEach(() => {
		FooterComp = mount(
			<Footer
				logo={mockFooterData.logo}
				siteUrl={mockFooterData.siteUrl}
				navigations={mockFooterData.navigation}
				altText={mockFooterData.altText}
				copyRightContent={mockFooterData.copyRightContent}
			/>
		)
	})

	it('validate component props', () => {
		expect(FooterComp.prop('logo')).toEqual(mockFooterData.logo)
		expect(FooterComp.prop('siteUrl')).toEqual(mockFooterData.siteUrl)
		expect(FooterComp.prop('navigations')).toEqual(mockFooterData.navigation)
		expect(FooterComp.prop('altText')).toEqual(mockFooterData.altText)
		expect(FooterComp.prop('copyRightContent')).toEqual(
			mockFooterData.copyRightContent
		)
	})

	it('matches the snaphot', () => {
		expect(FooterComp).toMatchSnapshot()
	})
})
