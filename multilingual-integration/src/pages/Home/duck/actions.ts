import * as types from './types'

export const fetchDog = () => ({
	type: types.FETCH_DOG,
	payload: {
		isLoading: true,
		dog: null,
		error: null,
	},
})

export const fetchDogSuccess = (dog: string) => ({
	type: types.FETCH_DOG_SUCCESS,
	payload: {
		dog,
		isLoading: false,
		error: null,
	},
})

export const fetchDogFailure = (message: string) => ({
	type: types.FETCH_DOG_FAILURE,
	payload: {
		dog: null,
		isLoading: false,
		error: message,
	},
})
