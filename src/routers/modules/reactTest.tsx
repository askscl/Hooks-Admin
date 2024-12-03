import React from "react"
import lazyLoad from "@/routers/utils/lazyLoad"
import { LayoutIndex } from "@/routers/constant"
import { RouteObject } from "@/routers/interface"

// react练习模块
const reactTestRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "react练习"
		},
		children: [
			{
				path: "/reactTest/publish",
				element: lazyLoad(React.lazy(() => import("@/views/reactTest/Publish/index"))),
				meta: {
					requiresAuth: true,
					title: "文章发布",
					key: "publish"
				}
			}
		]
	}
]

export default reactTestRouter
