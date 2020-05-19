import React, { FunctionComponent } from 'react'
import { default as ReactSelect } from 'react-select'

import { SelectContainer } from './styled'

type Props = {
	/**
	 * handles change event
	 */
	handleChange: (selectedOption: any) => void
	/**
	 * select list option with the key value pair of label and value
	 */
	options: {
		label: string
		value: string
	}[]
	/**
	 *  selected option from the dropdown
	 */
	selectedOption: {
		label: string
		value: string
	}
	/**
	 *  to select multiple values
	 */
	isMulti?: boolean
}

const Dropdown: FunctionComponent<Props> = ({
	selectedOption,
	handleChange,
	options,
	isMulti,
}) => {
	return (
		<SelectContainer className="custom-select-container">
			<ReactSelect
				value={selectedOption}
				onChange={handleChange}
				options={options}
				className="custom-select"
				classNamePrefix="custom-select"
				isMulti={isMulti}
			/>
		</SelectContainer>
	)
}

export default Dropdown
