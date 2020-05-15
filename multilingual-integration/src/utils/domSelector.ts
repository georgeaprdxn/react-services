/**
 * selects a dom element with the provided selectorValue
 *
 * @param selectorValue  name of id/class/attribute
 * @returns array of dom elements.
 */

const domSelector = (selectorValue: string): NodeList => {
	return document.querySelectorAll(selectorValue)
}

export { domSelector }
