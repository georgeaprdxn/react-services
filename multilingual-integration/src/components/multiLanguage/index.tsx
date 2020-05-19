import React, { FunctionComponent } from 'react'

import { Heading, Content, LanguageContainer } from './styled'

import Dropdown from '../../elements/Dropdown'

const options = [
	{
		label: 'English',
		value: 'en',
	},
	{
		label: 'German',
		value: 'de',
	},
	{
		label: 'French',
		value: 'fr',
	},
	{
		label: 'Hebrew',
		value: 'ie',
	},
	{
		label: 'Korean',
		value: 'ko',
	},
]

type props = {
	selectedOption: { label: string; value: string }
	changeLanguage: (selectedOption: { label: string; value: string }) => void
	heading: string
	content: string
}

const MultiLanguage: FunctionComponent<props> = ({
	selectedOption,
	changeLanguage,
	heading,
	content,
}) => {
	let selectOption = { ...selectedOption }
	options.forEach(({ label, value }) => {
		if (selectedOption.value === value) selectOption = { label, value }
	})

	return (
		<LanguageContainer>
			<Dropdown
				options={options}
				selectedOption={selectOption}
				handleChange={selectedOption => changeLanguage(selectedOption)}
			/>
			<Heading>{heading}</Heading>

			<Content>{content}</Content>
		</LanguageContainer>
	)
}

export default MultiLanguage
