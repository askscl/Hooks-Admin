import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

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
				path: "/reactLearn/test2",
				element: lazyLoad(React.lazy(() => import("@/views/reactLearn/test2"))),
				meta: {
					requiresAuth: true,
					title: "useState",
					key: "test2"
				}
			}
		]
	}
];

export default reactLearnRouter;
