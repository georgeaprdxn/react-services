import RegexUtils from './RegexUtil'

/**
 * Validation util to all all common user input validations
 */
class ValidationUtils {
	checkIfspecialChar = (value: string) => {
		return RegexUtils.specialChar.test(value)
	}

	validateEmail = (email: string) => {
		return RegexUtils.email.test(String(email).toLowerCase())
	}

	checkIfEmptyField = (value: string) => {
		return RegexUtils.emptyField.test(value)
	}

	checkIfWhiteSpace = (value: any) => {
		if (typeof value !== 'number' && value && value.trim().length === 0) {
			return RegexUtils.whiteSpace.test(value)
		}
	}

	checkContactNumber = (value: string) => {
		return !RegexUtils.contactNumber.test(value)
	}

	validatePassword = (password: string) => {
		// minimum eight characters, at least one uppercase letter, one lowercase letter and one special character
		return RegexUtils.password.test(password)
	}

	// By default max file size 5mb
	compareFileSize = (
		currentFileSizeInBytes: number,
		maximumFileSizeInMb = 5
	) => {
		// Convert mb to bytes
		const maxSizeInByte = maximumFileSizeInMb * Math.pow(2, 20)

		return !!(currentFileSizeInBytes < maxSizeInByte)
	}

	validateNumber = (value: any) => {
		return RegexUtils.regexNumber.test(value)
	}

	validateFloatNumber = (value: any) => {
		return RegexUtils.floatNumber.test(value)
	}

	validateUrl = (value: string) => {
		return RegexUtils.url.test(value)
	}

	validateFileName = (value: string) => {
		return RegexUtils.fileName.test(value)
	}
}

export default new ValidationUtils()
