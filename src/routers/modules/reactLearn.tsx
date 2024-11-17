import React from "react"
import lazyLoad from "@/routers/utils/lazyLoad"
import { LayoutIndex } from "@/routers/constant"
import { RouteObject } from "@/routers/interface"

// react学习模块
const reactLearnRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "react学习"
		},
		children: [
			{
				path: "/reactLearn/test1",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/index"))),
				meta: {
					requiresAuth: true,
					title: "组件通信",
					key: "test1"
				}
			},
			{
				path: "/reactLearn/useState",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/useState"))),
				meta: {
					requiresAuth: true,
					title: "useState",
					key: "useState"
				}
			},
			{
				path: "/reactLearn/useReducer",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/useReducer"))),
				meta: {
					requiresAuth: true,
					title: "useReducer",
					key: "useReducer"
				}
			},
			{
				path: "/reactLearn/useSyncExternalStore",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/useSyncExternalStore"))),
				meta: {
					requiresAuth: true,
					title: "useSyncExternalStore",
					key: "useSyncExternalStore"
				}
			},
			{
				path: "/reactLearn/useTransition",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/useTransition"))),
				meta: {
					requiresAuth: true,
					title: "useTransition",
					key: "useTransition"
				}
			}
		]
	}
]

export default reactLearnRouter
