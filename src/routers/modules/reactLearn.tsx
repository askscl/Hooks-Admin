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
                path: "/reactLearn/classComponent",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/classComponent"))),
                meta: {
                    requiresAuth: true,
                    title: "类组件",
                    key: "classComponent"
                }
            },
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
                path: "/reactLearn/communication",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/communication"))),
                meta: {
                    requiresAuth: true,
                    title: "组件通信-兄弟通信",
                    key: "communication"
                }
            },
            {
                path: "/reactLearn/useContext",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useContext"))),
                meta: {
                    requiresAuth: true,
                    title: "组件通信-祖孙通信",
                    key: "useContext"
                }
            },
            {
                path: "/reactLearn/memo",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/memo"))),
                meta: {
                    requiresAuth: true,
                    title: "组件memo",
                    key: "memo"
                }
            },
            {
                path: "/reactLearn/zustandTest",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/zustandTest"))),
                meta: {
                    requiresAuth: true,
                    title: "状态管理-zustand",
                    key: "zustandTest"
                }
            },
            {
                path: "/reactLearn/forwardRef",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/forwardRef"))),
                meta: {
                    requiresAuth: true,
                    title: "forwardRef",
                    key: "forwardRef"
                }
            },
            {
                path: "/reactLearn/redux/reduxTest",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/redux/reduxTest"))),
                meta: {
                    requiresAuth: true,
                    title: "reduxTest",
                    key: "reduxTest"
                }
            },
            {
                path: "/reactLearn/hooks/useState",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useState"))),
                meta: {
                    requiresAuth: true,
                    title: "useState",
                    key: "useState"
                }
            },
            {
                path: "/reactLearn/hooks/useReducer",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useReducer"))),
                meta: {
                    requiresAuth: true,
                    title: "useReducer",
                    key: "useReducer"
                }
            },
            {
                path: "/reactLearn/hooks/useSyncExternalStore",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useSyncExternalStore"))),
                meta: {
                    requiresAuth: true,
                    title: "useSyncExternalStore",
                    key: "useSyncExternalStore"
                }
            },
            {
                path: "/reactLearn/hooks/useTransition",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useTransition"))),
                meta: {
                    requiresAuth: true,
                    title: "useTransition",
                    key: "useTransition"
                }
            },
            {
                path: "/reactLearn/hooks/useDeferredValue",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useDeferredValue"))),
                meta: {
                    requiresAuth: true,
                    title: "useDeferredValue",
                    key: "useDeferredValue"
                }
            },
            {
                path: "/reactLearn/hooks/useEffect",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useEffect"))),
                meta: {
                    requiresAuth: true,
                    title: "useEffect",
                    key: "useEffect"
                }
            },
            {
                path: "/reactLearn/hooks/useEffect2",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useEffect2"))),
                meta: {
                    requiresAuth: true,
                    title: "useEffect2",
                    key: "useEffect2"
                }
            },
            {
                path: "/reactLearn/hooks/useRef",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useRef"))),
                meta: {
                    requiresAuth: true,
                    title: "useRef",
                    key: "useRef"
                }
            },
            {
                path: "/reactLearn/hooks/useMemo",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useMemo"))),
                meta: {
                    requiresAuth: true,
                    title: "useMemo",
                    key: "useMemo"
                }
            },
            {
                path: "/reactLearn/hooks/useCallback",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useCallback"))),
                meta: {
                    requiresAuth: true,
                    title: "useCallback",
                    key: "useCallback"
                }
            },
            {
                path: "/reactLearn/hooks/useImperativeHandle",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useImperativeHandle"))),
                meta: {
                    requiresAuth: true,
                    title: "useImperativeHandle",
                    key: "useImperativeHandle"
                }
            },
            {
                path: "/reactLearn/hooks/useDebugValue",
                element: lazyLoad(React.lazy(() => import("@/views/reactLearn/hooks/useDebugValue"))),
                meta: {
                    requiresAuth: true,
                    title: "useDebugValue",
                    key: "useDebugValue"
                }
            }
        ]
    }
]

export default reactLearnRouter
