import React, { Component } from 'react'

import {
	PreviewModalOverlay,
	Modal,
	CloseIconWrapper,
	CloseIcon,
} from './styled'

type PreviewModalProps = typeof PreviewModal.defaultProps & {
	/**
	 * width of modal
	 */
	width?: string
	/**
	 * maxwidth of modal
	 */
	maxWidth?: string
	/**
	 * handles modal close
	 */
	closeModal: () => void
	/**
	 * disables close button
	 */
	disableCloseAction?: boolean
	/**
	 * view to be render on the modal
	 */
	children: React.ReactNode
}

type PreviewModalState = {}

class PreviewModal extends Component<PreviewModalProps, PreviewModalState> {
	state: PreviewModalState = {}

	static defaultProps = {
		width: '70%',
		maxWidth: '873',
	}

	closeModal = () => {
		return this.props.closeModal && this.props.closeModal()
	}

	render() {
		const { width, maxWidth, disableCloseAction, children } = this.props

		return (
			<>
				<PreviewModalOverlay onClick={this.closeModal} />
				<Modal width={width} maxWidth={maxWidth} className="overlay-content">
					{children}
					{!disableCloseAction && (
						<CloseIconWrapper>
							<CloseIcon onClick={this.closeModal} />
						</CloseIconWrapper>
					)}
				</Modal>
			</>
		)
	}
}

export default PreviewModal
