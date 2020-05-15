import React, { FunctionComponent } from 'react'

import { StyledInput } from './styled'

type Props = {
	/**
	 * type of input
	 */
	inputType?: string
	/**
	 * value of input
	 */
	val: string
	/**
	 * handles change event
	 */
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FunctionComponent<Props> = ({ inputType, val, handleChange }) => {
	return (
		<StyledInput
			type={inputType}
			value={val}
			onChange={handleChange}
			className="custom-input"
		/>
	)
}

Input.defaultProps = {
	inputType: 'text',
	handleChange: () => undefined,
}

export default Input
