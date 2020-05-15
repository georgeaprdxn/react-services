import React, { FunctionComponent } from 'react'
import { StyledTextarea } from './styled'

type Props = {
	/**
	 * number of rows
	 */
	rows?: number
	/**
	 * textarea value
	 */
	val: string
	/**
	 * handles change event
	 */
	handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: FunctionComponent<Props> = ({ rows, val, handleChange }) => {
	return (
		<StyledTextarea
			rows={rows}
			value={val}
			onChange={handleChange}
			className="custom-textarea"
		/>
	)
}

Textarea.defaultProps = {
	rows: 4,
	handleChange: () => undefined,
}

export default Textarea
