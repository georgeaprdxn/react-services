import React, { FunctionComponent } from 'react'

import { StyledRadio, Input, Label } from './styled'

type Props = {
	/**
	 * label to the checkbox
	 */
	label: string
	/**
	 * Name of the checkbox
	 */
	name: string
	/**
	 * unique identifier to the checkbox
	 */
	id: string
	/**
	 * handles change event
	 */
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	/**
	 * state of checkbox
	 */
	isChecked: boolean
}

const Radio: FunctionComponent<Props> = ({
	label,
	name,
	id,
	handleChange,
	isChecked,
}) => {
	return (
		<StyledRadio>
			<Label htmlFor={id} className="radio-label">
				<Input
					className="radio-control"
					type="radio"
					id={id}
					name={name}
					onChange={handleChange}
					checked={isChecked}
				/>
				<span className="checkmark" />
				{label}
			</Label>
		</StyledRadio>
	)
}

Radio.defaultProps = {
	handleChange: () => undefined,
}

export default Radio
