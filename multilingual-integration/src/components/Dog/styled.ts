import styled from 'styled-components'

const Img = styled.img`
	width: 300px;
	height: 300px;
	border: 5px solid ${(props: any) => props.theme.COLORS.LIGHTBLUE};
`

export { Img }
