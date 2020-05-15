import React, { Component } from 'react'

import Link from '../../elements/Link'

import {
	HeaderElem,
	LogoConatainer,
	HomeLink,
	Logo,
	Navigation,
	NavigationList,
	NavigationListItem,
} from './styled'

type HeaderProps = typeof Header.defaultProps & {
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
}

type HeaderState = {}

class Header extends Component<HeaderProps, HeaderState> {
	state: HeaderState = {}

	static defaultProps = {
		logo: '',
		siteUrl: '#FIXME',
		altText: '',
	}

	render() {
		const { navigations, logo, siteUrl, altText } = this.props

		const list = navigations.map(function (
			item: { label: string; url: string },
			index: number
		) {
			return (
				<NavigationListItem key={index}>
					<Link label={item.label} url={item.url} />{' '}
				</NavigationListItem>
			)
		})

		return (
			<HeaderElem>
				<LogoConatainer>
					<HomeLink href={siteUrl}>
						<Logo src={logo} alt={altText} />
					</HomeLink>
				</LogoConatainer>
				{Array.isArray(navigations) && navigations.length && (
					<Navigation>
						<NavigationList>{list}</NavigationList>
					</Navigation>
				)}
			</HeaderElem>
		)
	}
}

export default Header
