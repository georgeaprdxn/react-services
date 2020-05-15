import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'elements/Button'
import Dog from 'components/Dog'
import { syncWithReducer } from 'utils/reducerUtil'
import { fetchDog } from './duck/actions'
import dogReducer from './duck/reducer'
import epics from './duck/epics'

type Props = {
	fetchDogAction: () => {}
	isLoading: boolean
	dog: string
	error: string
}

const Home: React.FunctionComponent<Props> = ({
	fetchDogAction,
	isLoading,
	dog,
	error,
}) => {
	return (
		<div className="App">
			<Button onClick={fetchDogAction} title="Fetch Dog" />
			{dog && (
				<>
					{isLoading && <h1>Fetching data</h1>}
					{!isLoading && dog && <Dog image={dog} />}
					{error && <h1>{error}</h1>}
				</>
			)}
		</div>
	)
}

const mapStateToProps = (state: { dog: object }) => ({ ...state.dog })

const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators(
		{
			fetchDogAction: fetchDog,
		},
		dispatch
	)

export default syncWithReducer(
	'dog',
	dogReducer,
	epics
)(connect(mapStateToProps, mapDispatchToProps)(Home))