/* 
	useRef
	作用：
		1.获取dom节点(组件自身)
		2.保存数据，数据不会触发组件更新(改变 ref 不会触发重新渲染。 防止渲染重新创建定时器)
*/

import { useEffect, useRef } from "react"

const App = () => {
	const hDom = useRef<HTMLHeadingElement>(null)
	const handleClick = () => {
		console.log(hDom.current) // 获取到h1的dom
	}

	const intervalId = useRef<NodeJS.Timeout | undefined>(undefined)
	// 组件初始化时运行
	useEffect(() => {
		intervalId.current = setInterval(() => {
			console.log("interval执行了")
		}, 1000)
		console.log("intervalId.current", intervalId.current)
		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current)
			}
		}
	}, [])
	return (
		<div>
			<h1 ref={hDom}>useRef</h1>
			<div>作用： 1.获取dom节点(组件自身) 2.保存数据，数据不会触发组件更新(改变 ref 不会触发重新渲染。)</div>
			<button onClick={handleClick}>点击</button>
		</div>
	)
}

export default App
