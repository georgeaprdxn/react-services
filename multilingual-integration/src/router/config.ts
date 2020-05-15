import { lazy } from 'react'

type RouteConfig = {
	path?: string
	exact?: boolean
	component?: any
	render?: any
}

const routerConfig: RouteConfig[] = [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('pages/Home')),
	},
	{
		component: lazy(() => import('pages/NotFound')),
	},
]

export default routerConfig
