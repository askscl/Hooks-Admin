// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import Test from "@/views/test/index";

// 测试模块
const testRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/test/index",
				// element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
				element: <Test />,
				meta: {
					requiresAuth: true,
					title: "测试页",
					key: "test"
				}
			}
		]
	}
];

export default testRouter;
