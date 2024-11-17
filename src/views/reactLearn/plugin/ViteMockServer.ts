/* 
	功能：自定义vite插件，实现mock 数据
*/
import type { Plugin } from "vite"
import mockjs from "mockjs"
import url from "node:url"

const viteMockServer = (): Plugin => {
	return {
		name: "vite-plugin-mock",
		//使用vite插件的钩子函数
		configureServer(server) {
			server.middlewares.use("/api/list", (req, res) => {
				const parseUrl = url.parse(req.originalUrl as string, true).query //获取url参数 true表示返回对象 {keyWord: 'xx'}，否则返回字符串
				res.setHeader("content-type", "application/json;charset=utf-8")
				const data = mockjs.mock({
					"list|1000": [
						{
							"id|+1": 1,
							name: parseUrl.keyWord,
							address: "@county(true)"
						}
					]
				})
				// 返回数据
				res.end(JSON.stringify(data))
			})
		}
	}
}

export default viteMockServer
