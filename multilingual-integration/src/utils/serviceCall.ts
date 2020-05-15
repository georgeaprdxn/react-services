import { ajax } from 'rxjs/ajax'

type serviceType = {
	url: string
	method?: string
	body?: object
	headers?: object
}

/**
 * service util for making API service call.
 * @param url - API endpoint.
 * @param method - HTTP request method.
 * @param body - Request body.
 */
export default ({ url, method = 'GET', body, headers }: serviceType) =>
	ajax({
		url,
		method,
		body,
		headers,
	})
