/* 
	useMemo:
	作用：缓存计算结果，避免不必要的计算
	使用场景：
		1.计算结果比较复杂，且依赖的值不变时，可以使用useMemo来缓存计算结果，避免不必要的计算
		2.缓存引用类型的值，（避免每次渲染都创建新的对象，导致子组件重新渲染）
*/

import { useMemo, useState } from "react"

// 计算斐波那契数列之和
const fibonacci = (n: number): number => {
	console.log("计算函数执行了")
	if (n < 3) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}

const App = () => {
	const [count1, setCount1] = useState(0)
	const result = useMemo(() => fibonacci(count1), [count1])
	// const result = fibonacci(count1)
	const [count2, setCount2] = useState(0)
	console.log("组件重新渲染了")

	return (
		<div>
			<h1>useMemo</h1>
			<div>
				作用：缓存计算结果，避免不必要的计算 使用场景：
				1.计算结果比较复杂，且依赖的值不变时，可以使用useMemo来缓存计算结果，避免不必要的计算
				2.缓存引用类型的值，（避免每次渲染都创建新的对象，导致子组件重新渲染）
			</div>
			<h2>result: {result}</h2>
			<button onClick={() => setCount1(count1 + 1)}>count1 + 1:{count1}</button>
			<button onClick={() => setCount2(count2 + 1)}>count2 + 1:{count2}</button>
		</div>
	)
}

export default App
