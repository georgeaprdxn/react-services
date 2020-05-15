import React, { FunctionComponent } from 'react'

import { StyledInput } from './styled'

type Props = {
	/**
	 * name of the input field
	 */
	name?: string
	/**
	 * acceptabe file type
	 */
	accept?: string
	/**
	 * handles change event
	 */
	handleChange?: React.FormEventHandler<HTMLInputElement>
}

const ChooseFile: FunctionComponent<Props> = ({
	name,
	accept,
	handleChange,
}) => {
	return (
		<StyledInput
			type="file"
			name={name}
			id={name}
			accept={accept}
			onChange={handleChange}
			className="custom-file-input"
		/>
	)
}

ChooseFile.defaultProps = {
	name: 'upload file',
	accept: '.jpg, .jpeg, .png',
}

export default ChooseFile
