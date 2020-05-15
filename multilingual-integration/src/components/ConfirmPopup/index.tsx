import React from 'react'

import {
	ConfirmBoxWrapper,
	OkButton,
	ConfirmBox,
	QuestionText,
	ButtonWrapper,
	CloseIcon,
	CloseIconWrapper,
	CancelButton,
	ConfirmBoxOverlay,
} from './styled'

type OverlayProps = {
	/**
	 * handler for negative button
	 */
	onNegativeHandler: () => void
	/**
	 * handler for positive button
	 */
	onPositiveHandler: (
		e: React.MouseEvent<HTMLButtonElement>,
		okButtonRef: React.RefObject<HTMLButtonElement>
	) => void
	/**
	 * positive button text
	 */
	positiveText: string
	/**
	 * negative button text
	 */
	negativeText: string
	/**
	 * handler for close button
	 */
	onPopupClose: () => void
	/**
	 * warning text to be displayed on popup
	 */
	warningText: string
} & typeof defaultProps

const Overlay = (props: OverlayProps) => {
	const okButtonRef = React.useRef<HTMLButtonElement>(null)

	const {
		positiveText,
		negativeText,
		warningText,
		onNegativeHandler,
		onPositiveHandler,
	} = props

	const onPopupClose = () => {
		return props.onPopupClose && props.onPopupClose()
	}

	return (
		<ConfirmBoxWrapper>
			<ConfirmBoxOverlay
				onClick={onPopupClose}
				className="custom-popup-close"
			/>
			<ConfirmBox>
				<QuestionText>{warningText}</QuestionText>
				<CloseIconWrapper>
					<CloseIcon onClick={onPopupClose} />
				</CloseIconWrapper>
				<ButtonWrapper>
					{positiveText && (
						<OkButton
							ref={okButtonRef}
							onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								onPositiveHandler(e, okButtonRef)
							}
						>
							{positiveText}
						</OkButton>
					)}
					{negativeText && (
						<CancelButton onClick={onNegativeHandler}>
							{negativeText}
						</CancelButton>
					)}
				</ButtonWrapper>
			</ConfirmBox>
		</ConfirmBoxWrapper>
	)
}

const defaultProps = {
	negativeText: 'Cancel',
	positiveText: 'Ok',
	warningText: 'Do you want to continue ?',
}

Overlay.defaultProps = defaultProps

export default Overlay
