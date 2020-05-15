/**
 * Regex util, containing all the necessary regular expressions.
 */
class RegexUtils {
	specialChar = /[\\/=?`<>]/

	email = /^([a-z0-9.\-_]+@[a-z0-9]+(\.[a-z]+)?\.[a-z]+)$/i

	emptyField = /^$/

	whiteSpace = /^\s/

	contactNumber = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/

	password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

	regexNumber = /^[0-9]*$/

	floatNumber = /^(\d*\.)?\d+$/gim

	url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

	fileName = /[\\/=`<>]/
}

export default new RegexUtils()
