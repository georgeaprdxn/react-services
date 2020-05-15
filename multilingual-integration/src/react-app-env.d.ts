/// <reference types="react-scripts" />
/**
 * This is an extension of .env file to add support for environmental variables to the typscript compiler.
 * Change the example variables with your required variables.
 */
declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production' | 'test'
		PUBLIC_URL: string
		REACT_APP_API_URI: string
	}
}

interface Window {
	// add you custom properties and methods
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
