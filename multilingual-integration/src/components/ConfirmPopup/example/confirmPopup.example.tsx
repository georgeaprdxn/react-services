import React, { Component } from 'react'
import mockData from '../__test__/ConfirmPopup.mock.json'
import ConfirmPopup from '../index'

type OverlayProps = {}

type OverlayState = {
	showPopup: boolean
}

class Overlay extends Component<OverlayProps, OverlayState> {
	state: OverlayState = {
		showPopup: false,
	}

	openPopup = () => this.setState({ showPopup: true })

	onPopupClose = () => this.setState({ showPopup: false })

	onNegativeHandler = () => {
		// some opertion you want to perform
		this.onPopupClose()
	}

	onPositiveHandler = (
		e: React.MouseEvent<HTMLButtonElement>,
		okButtonRef: React.RefObject<HTMLButtonElement>
	) => {
		// some opertion you want to perform
		this.onPopupClose()
	}

	render() {
		return (
			<>
				<button
					onClick={this.openPopup}
					style={{ cursor: 'pointer' }}
					className="custom-button"
				>
					Show Confirm popup
				</button>
				{this.state.showPopup && (
					<ConfirmPopup
						warningText={mockData.warningText}
						positiveText={mockData.positiveText}
						negativeText={mockData.negativeText}
						onPopupClose={this.onPopupClose}
						onNegativeHandler={this.onNegativeHandler}
						onPositiveHandler={this.onPositiveHandler}
					/>
				)}
			</>
		)
	}
}

export default Overlay
