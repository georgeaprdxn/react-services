/**
 * Download util to download a file when is path's been specified
 * @param file - file path/url which have to be downloaded
 */
export function downloadFile(file: string): void {
	// exit if no location is present
	if (!file) {
		return
	}

	const link: HTMLAnchorElement = document.createElement('a')
	link.href = file
	link.target = '_blank'
	link.setAttribute('dataType', 'json')
	link.dispatchEvent(new MouseEvent('click'))
}
