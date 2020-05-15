import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { catchError, takeUntil, map, mergeMap } from 'rxjs/operators'

import serviceCall from 'utils/serviceCall'
import { FETCH_DOG, FETCH_DOG_CANCEL } from './types'
import { fetchDogFailure, fetchDogSuccess } from './actions'

const url = 'https://dog.ceo/api/breeds/image/random' // The API to fetch a dog

type responseType = {
	message: string
}

function fetchDogEpic(action$: any) {
	return action$.pipe(
		ofType(FETCH_DOG),
		mergeMap(() =>
			serviceCall({ url }).pipe(
				map(({ response }: { response: responseType }) => {
					return fetchDogSuccess(response.message)
				})
			)
		),
		takeUntil(action$.pipe(ofType(FETCH_DOG_CANCEL))),
		catchError((error: responseType) => of(fetchDogFailure(error.message)))
	)
}

export default fetchDogEpic
