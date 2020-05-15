import { Close } from '../../assets/icons'
import styled, { css } from 'styled-components'

const SharedDeleteCss = css`
	width: 20%;
	opacity: 0.8;
	border-radius: 3px;
	border: solid 1px rgba(216, 216, 216, 0.56);
	display: inline-block;
	font-size: 12px;
	font-weight: bold;
	line-height: 1.42;
	color: #363636;
	padding: 25px 10px 23px;
	cursor: pointer;
	&:hover {
		background-color: #8b8b8b;
		transition: all 0.7s;
		color: #fff;
		opacity: 1;
	}
`

const ConfirmBoxWrapper = styled.div``
const OkButton = styled.button`
	${SharedDeleteCss}
	margin-top: 46px;
	margin-bottom: 43px;
	padding: 10px;
	background-color: #fff;
	@media (max-width: 968px) {
		margin-top: 45px;
	}
`

const ConfirmBox = styled.div`
	box-sizing: border-box;
	width: 70%;
	max-width: 769px;
	padding: 0 20px;
	text-align: center;
	position: fixed;
	margin: 0 auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	z-index: 20;
	@media (max-width: 968px) {
		width: 518px;
	}
`

const QuestionText = styled.p`
	font-size: 22px;
	font-weight: bold;
	padding-top: 42px;
	color: #363636;
	opacity: 0.7;
	@media (max-width: 968px) {
		font-size: 25px;
	}
`

const ButtonWrapper = styled.div`
	width: 67%;
	margin: 0 auto;
`

const CloseIcon = styled(Close)`
	transform: translate(-50%, -50%);
	margin-left: 50%;
	margin-top: 50%;
	width: 26px;
	height: 26px;
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

const CancelButton = styled.button`
	${SharedDeleteCss}
	margin: 46px 0 43px 28px;
	padding: 10px;
	background-color: #fff;
	@media (max-width: 968px) {
		margin-top: 45px;
	}
`

const ConfirmBoxOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #979797;
	z-index: 20;
`
export {
	ConfirmBoxWrapper,
	OkButton,
	ConfirmBox,
	QuestionText,
	ButtonWrapper,
	CloseIcon,
	CloseIconWrapper,
	CancelButton,
	ConfirmBoxOverlay,
}
