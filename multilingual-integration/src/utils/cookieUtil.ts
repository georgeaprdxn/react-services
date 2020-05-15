/**
 * Util responsible for all the cookie related operations/methods.
 *
 */

type CookieType = {
	name: string
	value: any
	days?: number
}
class CookieUtil {
	/**
	 * @description method to set a cookie with/without an expiration date.
	 * @param name - name of the cookie.
	 * @param value - value for the cookie.
	 * @param days - [optional] number of days after which cookie would expire.
	 */
	setCookie({ name, value, days }: CookieType): void {
		let expires = ''
		if (days) {
			const date = new Date()
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
			expires = '; expires=' + date.toUTCString()
		}
		document.cookie = `${name}=${value || ''}${expires}; path=/`
	}

	/**
	 * @description method that return the cookie value as per name given.
	 * @param name - cookie name.
	 */
	getCookie(name: string): string | null {
		const nameEQ = `${name}=`
		const registeredCookies = document.cookie.split(';')
		let cookie = ''
		for (var i = 0; i < registeredCookies.length; i++) {
			cookie = registeredCookies[i]
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1, cookie.length)
			}
			if (cookie.indexOf(nameEQ) === 0) {
				return cookie.substring(nameEQ.length, cookie.length)
			}
		}

		return null
	}

	/**
	 * @description method to delete an cookie as per the name give.
	 * @param name - cookie name.
	 */
	deleteCookie(name: string): void {
		document.cookie = `${name}=; Max-Age=-99999999;`
	}
}

export default new CookieUtil()
