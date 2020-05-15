import { createReducer } from 'utils/reducerUtil'
import * as types from './types'

const initialState = {
	dog: null,
	isLoading: false,
	error: null,
}

export default createReducer(initialState)(types)
