import React from 'react'

import { useTranslation } from 'react-i18next'
import MultiLanguage from '../../components/multiLanguage'

type Props = {}

const Home: React.FunctionComponent<Props> = () => {
	const { t, i18n } = useTranslation()
	const [selectedOption, setSelected] = React.useState({
		label: '',
		value: i18n.language,
	})

	const changeLanguage = (selectedOption: { label: string; value: string }) => {
		i18n.changeLanguage(selectedOption.value)
		setSelected(selectedOption)
	}

	return (
		<div className="App">
			<MultiLanguage
				selectedOption={selectedOption}
				changeLanguage={changeLanguage}
				heading={t('multiLanguage')}
				content={t('content:lifeQuote')}
			/>
		</div>
	)
}

export default Home
