import styled from 'styled-components'

import { Close } from '../../assets/icons'

type PreviewModalProps = {
	width: string
	maxWidth: string
}

const PreviewModalOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.36);
	z-index: 1000;
`

const Modal = styled.div<PreviewModalProps>`
	width: ${props => props.width};
	max-width: ${props => props.maxWidth}px;
	height: auto;
	text-align: center;
	position: fixed;
	margin: 0 auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	z-index: 1001;
	@media (max-width: 968px) {
		max-width: 518px;
	}
`

const CloseIconWrapper = styled.div`
	position: absolute;
	top: -14px;
	right: -13px;
	background-color: #fff;
	width: 34px;
	border-radius: 50%;
	height: 34px;
	cursor: pointer;
`

const CloseIcon = styled(Close)`
	transform: translate(-50%, -50%);
	margin-left: 50%;
	margin-top: 50%;
	width: 26px;
	height: 26px;
`
export { PreviewModalOverlay, Modal, CloseIconWrapper, CloseIcon }
