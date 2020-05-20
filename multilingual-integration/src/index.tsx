import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'styled-components'
import 'reset-css'

import Routes from 'router/Routes'
import GlobalStyles from 'theme/GlobalStyles'
import theme from 'theme'
import * as serviceWorker from './serviceWorker'
import './i18n'

const appWithProvider = (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Routes />
	</ThemeProvider>
)

ReactDOM.render(appWithProvider, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
