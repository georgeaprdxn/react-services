import React from 'react'
import { shallow } from 'enzyme'

import mockPreviewModalData from './previewModal.mock.json'
import PreviewOverlay from '../example/previewModal.example'
import PreviewModal from '../index'

describe('PreviewModal component tests', () => {
	let PreviewModalComp: any = null

	beforeEach(() => {
		PreviewModalComp = shallow(<PreviewOverlay />)
	})

	it('should render a button', () => {
		expect(PreviewModalComp.find('.custom-button').length).toEqual(1)
	})

	it('calls open modal', () => {
		PreviewModalComp.find('.custom-button').simulate('click')
		expect(PreviewModalComp.state('showModal')).toBe(true)
	})

	it('validate child component props', () => {
		PreviewModalComp.find('.custom-button').simulate('click')

		expect(PreviewModalComp.find(PreviewModal).prop('width')).toEqual(
			mockPreviewModalData.width
		)
		expect(PreviewModalComp.find(PreviewModal).prop('maxWidth')).toEqual(
			mockPreviewModalData.maxWidth
		)
		expect(
			PreviewModalComp.find(PreviewModal).prop('disableCloseAction')
		).toEqual(mockPreviewModalData.disableCloseAction)
	})

	it('calls close modal', () => {
		PreviewModalComp.instance().closeModal()
		expect(PreviewModalComp.state('showModal')).toBe(false)
	})

	it('matches the snaphot', () => {
		expect(PreviewModalComp).toMatchSnapshot()
	})
})
