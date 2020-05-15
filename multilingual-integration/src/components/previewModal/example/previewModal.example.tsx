import React, { Component } from 'react'

import PreviewModal from '../index'
import mockPreviewModalData from '../__test__/previewModal.mock.json'

type PreviewModalProps = {}

type PreviewModalState = {
	showModal: boolean
}

const styleObj = { width: '100px', height: '100px', display: 'block' }

class PreviewOverlay extends Component<PreviewModalProps, PreviewModalState> {
	state: PreviewModalState = {
		showModal: false,
	}

	openModal = () => this.setState({ showModal: true })

	closeModal = () => this.setState({ showModal: false })

	render() {
		return (
			<>
				<button
					onClick={this.openModal}
					style={{ cursor: 'pointer' }}
					className="custom-button"
				>
					Open Modal
				</button>
				{this.state.showModal && (
					<PreviewModal
						closeModal={this.closeModal}
						width={mockPreviewModalData.width}
						maxWidth={mockPreviewModalData.maxWidth}
						disableCloseAction={mockPreviewModalData.disableCloseAction}
					>
						<a href="https: //reactjs.org" target="_blank" style={styleObj}>
							ReactJs
						</a>
					</PreviewModal>
				)}
			</>
		)
	}
}

export default PreviewOverlay
