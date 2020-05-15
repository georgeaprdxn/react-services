import React, { FunctionComponent } from 'react'

import { StyledCheckbox, Input, Label } from './styled'

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

const Checkbox: FunctionComponent<Props> = ({
	label,
	name,
	id,
	handleChange,
	isChecked,
}) => {
	return (
		<StyledCheckbox>
			<Input
				type="checkbox"
				name={name}
				id={id}
				onChange={handleChange}
				checked={isChecked}
			/>
			<Label htmlFor={id} title={label}>
				{label}
			</Label>
		</StyledCheckbox>
	)
}

Checkbox.defaultProps = {
	handleChange: () => undefined,
}

export default Checkbox
