import { Navigate, useRoutes } from "react-router-dom"
import { MyRouteObject } from "@/routers/interface/index2"
import Login from "@/views/login/index"

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.tsx")

// * 处理路由
export const routerArray: MyRouteObject[] = []
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key])
	})
})

export const rootRouter: MyRouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
