import React from 'react'
import { LinkElement } from './styled'

type LinkProps = {
	/**
	 * url to the href attribute
	 */
	url: string
	/**
	 * target preference
	 */
	target?: string
	/**
	 * label to the link
	 */
	label: string
} & typeof defaultProps

const LinkComp = (props: LinkProps) => {
	const { url, target, label } = props

	return (
		<LinkElement
			href={url}
			target={target}
			title={label}
			className="custom-link"
		>
			{label}
		</LinkElement>
	)
}

const defaultProps = {
	url: '#FIXME',
	target: '_self',
	label: '',
}

LinkComp.defaultProps = defaultProps

export default LinkComp
