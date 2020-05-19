import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './translation.json'

// the translations
// (tip move them in a JSON file and import them)
i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// we init with resources
		resources,
		fallbackLng: 'de',
		debug: true,

		// have a common namespace used around the full app
		ns: ['heading', 'content'],
		defaultNS: 'heading',
		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false,
		},
		react: {
			wait: true,
		},
		detection: {
			order: [
				'querystring',
				'cookie',
				'localStorage',
				'navigator',
				'htmlTag',
				'path',
				'subdomain',
			],
		},
	})

export default i18n
