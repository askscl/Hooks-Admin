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
                    title: "创建文章",
                    key: "publish"
                }
            },
            {
                path: "/reactTest/article",
                element: lazyLoad(React.lazy(() => import("@/views/reactTest/Article/index"))),
                meta: {
                    requiresAuth: true,
                    title: "文章管理",
                    key: "article"
                }
            }
        ]
    }
]

export default reactTestRouter
