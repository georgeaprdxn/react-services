import styled from 'styled-components'

const Heading = styled.h2`
	font-size: 22px;
	font-weight: 900;
	text-align: center;
`

const Content = styled.p`
	margin-top: 20px;
	font-size: 16px;
	font-weight: 400;
`
const LanguageContainer = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto;

	.custom-select-container {
		margin: 20px auto;
	}
`
export { Heading, Content, LanguageContainer }
