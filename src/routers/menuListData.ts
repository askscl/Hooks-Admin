const menuListData = {
    code: 200,
    data: [
        {
            icon: "HomeOutlined",
            title: "首页",
            path: "/home/index"
        },
        {
            icon: "ShoppingOutlined",
            title: "react学习",
            path: "/reactLearn",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/classComponent",
                    title: "类组件"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/test1",
                    title: "组件通信"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/communication",
                    title: "组件通信-兄弟通信"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/useContext",
                    title: "组件通信-祖孙通信"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/memo",
                    title: "组件memo"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/zustandTest",
                    title: "状态管理-zustand"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/forwardRef",
                    title: "forwardRef"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/redux/reduxTest",
                    title: "reduxTest"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useState",
                    title: "useState"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useReducer",
                    title: "useReducer"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useSyncExternalStore",
                    title: "useSyncExternalStore"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useTransition",
                    title: "useTransition"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useDeferredValue",
                    title: "useDeferredValue"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useEffect",
                    title: "useEffect"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useEffect2",
                    title: "useEffect执行顺序"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useRef",
                    title: "useRef"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useMemo",
                    title: "useMemo"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useCallback",
                    title: "useCallback"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useImperativeHandle",
                    title: "useImperativeHandle"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactLearn/hooks/useDebugValue",
                    title: "useDebugValue"
                }
            ]
        },
        {
            icon: "ShoppingOutlined",
            title: "react练习",
            path: "/reactTest",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/reactTest/publish",
                    title: "创建文章"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/reactTest/article",
                    title: "文章管理"
                }
            ]
        },
        {
            icon: "ShoppingOutlined",
            title: "测试页",
            path: "/test/index"
        },
        {
            icon: "AreaChartOutlined",
            title: "数据大屏",
            path: "/dataScreen/index"
        },
        {
            icon: "TableOutlined",
            title: "超级表格",
            path: "/proTable",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/proTable/useHooks",
                    title: "使用 Hooks"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/proTable/useComponent",
                    title: "使用 Component"
                }
            ]
        },
        {
            icon: "FundOutlined",
            title: "Dashboard",
            path: "/dashboard",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/dashboard/dataVisualize",
                    title: "数据可视化"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/dashboard/embedded",
                    title: "内嵌页面"
                }
            ]
        },
        {
            icon: "FileTextOutlined",
            title: "表单 Form",
            path: "/form",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/form/basicForm",
                    title: "基础 Form"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/form/validateForm",
                    title: "校验 Form"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/form/dynamicForm",
                    title: "动态 Form"
                }
            ]
        },
        {
            icon: "PieChartOutlined",
            title: "Echarts",
            path: "/echarts",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/waterChart",
                    title: "水型图"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/columnChart",
                    title: "柱状图"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/lineChart",
                    title: "折线图"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/pieChart",
                    title: "饼图"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/radarChart",
                    title: "雷达图"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/echarts/nestedChart",
                    title: "嵌套环形图"
                }
            ]
        },
        {
            icon: "ShoppingOutlined",
            title: "常用组件",
            path: "/assembly",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/assembly/guide",
                    title: "引导页"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/assembly/svgIcon",
                    title: "Svg 图标"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/assembly/selectIcon",
                    title: "Icon 选择"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/assembly/batchImport",
                    title: "批量导入数据"
                }
            ]
        },
        {
            icon: "ProfileOutlined",
            title: "菜单嵌套",
            path: "/menu",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/menu/menu1",
                    title: "菜单1"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/menu/menu2",
                    title: "菜单2",
                    children: [
                        {
                            icon: "AppstoreOutlined",
                            path: "/menu/menu2/menu21",
                            title: "菜单2-1"
                        },
                        {
                            icon: "AppstoreOutlined",
                            path: "/menu/menu2/menu22",
                            title: "菜单2-2",
                            children: [
                                {
                                    icon: "AppstoreOutlined",
                                    path: "/menu/menu2/menu22/menu221",
                                    title: "菜单2-2-1"
                                },
                                {
                                    icon: "AppstoreOutlined",
                                    path: "/menu/menu2/menu22/menu222",
                                    title: "菜单2-2-2"
                                }
                            ]
                        },
                        {
                            icon: "AppstoreOutlined",
                            path: "/menu/menu2/menu23",
                            title: "菜单2-3"
                        }
                    ]
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/menu/menu3",
                    title: "菜单3"
                }
            ]
        },
        {
            icon: "ExclamationCircleOutlined",
            title: "错误页面",
            path: "/error",
            children: [
                {
                    icon: "AppstoreOutlined",
                    path: "/404",
                    title: "404页面"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/403",
                    title: "403页面"
                },
                {
                    icon: "AppstoreOutlined",
                    path: "/500",
                    title: "500页面"
                }
            ]
        }
        /*
		 {
			icon: "PaperClipOutlined",
			title: "外部链接",
			path: "/link",
			children: [
				{
					icon: "AppstoreOutlined",
					path: "/link/gitee",
					title: "Gitee 仓库",
					isLink: "https://gitee.com/laramie/Hooks-Admin"
				},
				{
					icon: "AppstoreOutlined",
					path: "/link/github",
					title: "GitHub 仓库",
					isLink: "https://github.com/HalseySpicy/Hooks-Admin"
				},
				{
					icon: "AppstoreOutlined",
					path: "/link/juejin",
					title: "掘金文档",
					isLink: "https://juejin.cn/user/3263814531551816/posts"
				},
				{
					icon: "AppstoreOutlined",
					path: "/link/myBlog",
					title: "个人博客",
					isLink: "http://www.spicyboy.cn"
				}
			]
		} */
    ],
    msg: "成功"
}

export default menuListData
