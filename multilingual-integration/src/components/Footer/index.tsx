import React from 'react'

import Link from '../../elements/Link'
import {
	FooterElem,
	LogoConatainer,
	HomeLink,
	Logo,
	NavigationList,
	NavigationListItem,
	CopyRight,
} from './styled'

type FooterProps = {
	/**
	 * Site Logo
	 */
	logo: string
	/**
	 * Homepage URL
	 */
	siteUrl: string
	/**
	 * ALT text for logo
	 */
	altText: string
	/**
	 * Array of navigatin links
	 */
	navigations: {
		label: string
		url: string
	}[]
	/**
	 * Copyright content
	 */
	copyRightContent: string
} & typeof defaultProps

const Footer = (props: FooterProps) => {
	const { navigations, logo, siteUrl, altText, copyRightContent } = props

	const list = navigations.map(function (
		item: { label: string; url: string },
		index: number
	) {
		return (
			<NavigationListItem key={index}>
				<Link label={item.label} url={item.url} />
			</NavigationListItem>
		)
	})

	return (
		<FooterElem>
			<LogoConatainer>
				<HomeLink href={siteUrl}>
					<Logo src={logo} alt={altText} />
				</HomeLink>
			</LogoConatainer>
			{Array.isArray(navigations) && navigations.length && (
				<NavigationList>{list}</NavigationList>
			)}
			<CopyRight>{copyRightContent}</CopyRight>
		</FooterElem>
	)
}

const defaultProps = {
	logo: '',
	siteUrl: '#FIXME',
	altText: '',
	copyRightContent: '',
}

Footer.defaultProps = defaultProps

export default Footer
