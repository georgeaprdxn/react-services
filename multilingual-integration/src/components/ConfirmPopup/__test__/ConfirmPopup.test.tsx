import React from 'react'
import { shallow } from 'enzyme'

import Overlay from '../example/confirmPopup.example'
import mockConfirmPopupData from './ConfirmPopup.mock.json'
import ConfirmPopup from '../index'

describe('ConfirmPopup component tests', () => {
	let ConfirmPopupComp: any = null

	beforeEach(() => {
		ConfirmPopupComp = shallow(<Overlay />)
	})

	it('should render a button', () => {
		expect(ConfirmPopupComp.find('.custom-button').length).toEqual(1)
	})

	it('calls open popup', () => {
		ConfirmPopupComp.find('.custom-button').simulate('click')
		expect(ConfirmPopupComp.state('showPopup')).toBe(true)
	})

	it('validate child component props', () => {
		ConfirmPopupComp.find('.custom-button').simulate('click')

		expect(ConfirmPopupComp.find(ConfirmPopup).props().warningText).toEqual(
			mockConfirmPopupData.warningText
		)
		expect(ConfirmPopupComp.find(ConfirmPopup).props().positiveText).toEqual(
			mockConfirmPopupData.positiveText
		)
		expect(ConfirmPopupComp.find(ConfirmPopup).props().negativeText).toEqual(
			mockConfirmPopupData.negativeText
		)
	})

	it('calls close popup', () => {
		ConfirmPopupComp.instance().onPopupClose()
		expect(ConfirmPopupComp.state('showPopup')).toBe(false)
	})

	it('matches the snaphot', () => {
		expect(ConfirmPopupComp).toMatchSnapshot()
	})
})
