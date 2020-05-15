/**
 * URI util to encode and decode given URI.
 * @param uri - uri to encode/decode
 * @param type - operation type
 */

export function uriUtil(uri: string, type: 'encode' | 'decode'): string | null {
	if (type === 'encode') {
		return encodeURI(uri)
	} else if (type === 'decode') {
		try {
			return decodeURI(uri)
		} catch (e) {
			// catches a malformed URI
			return e
		}
	} else {
		return null
	}
}
