/**
 * conver a user selected file to base64
 *
 * @param file - bolb file object
 */

const fileToBase64 = (file: Blob) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = reject
	})

export { fileToBase64 }
