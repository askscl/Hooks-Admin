import { useSyncExternalStore } from "react"

// history api 去实现 push, replace跳转页面，监听history变化
export const useHistory = () => {
	const subscribe = (callback: () => void) => {
		// 订阅浏览器api 监听history变化
		// vue里面的路由 三种模式 两种是web用的:hash模式，history模式，一种是ssr用的:abstract模式
		// history模式: pushState, replaceState, popState
		// hash模式: hashchange
		window.addEventListener("popstate", callback)
		window.addEventListener("hashchange", callback)
		return () => {
			// 取消订阅
			window.removeEventListener("popstate", callback)
			window.removeEventListener("hashchange", callback)
		}
		// popstate 只能监听浏览器前进后退按钮，无法监听pushState, replaceState
	}

	const getSnapshot = () => {
		return window.location.href
	}

	const url = useSyncExternalStore(subscribe, getSnapshot)
	const push = (url: string) => {
		window.history.pushState({}, "", url)
		window.dispatchEvent(new PopStateEvent("popstate"))
	}

	const replace = (url: string) => {
		window.history.replaceState({}, "", url)
		window.dispatchEvent(new PopStateEvent("popstate"))
	}

	return [url, push, replace] as const
}
