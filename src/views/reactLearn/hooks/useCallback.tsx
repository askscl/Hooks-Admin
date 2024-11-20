/* 
	useCallback
	作用：在组件多次重新渲染时缓存函数，（避免每次渲染都重新创建函数，从而提高性能）
*/
import { memo, useState, useCallback } from "react"

interface Props {
	onChange: (value: string) => void
}

const Input = memo(function Input({ onChange }: Props) {
	console.log("input render")
	return <input type="text" onChange={e => onChange(e.target.value)} />
})
const App = () => {
	// const changeHandler = (value: string) => console.log(value)
	const changeHandler = useCallback((value: string) => console.log(value), [])
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>useCallback</h1>
			<Input onChange={changeHandler} />
			<button onClick={() => setCount(count + 1)}>count: {count}</button>
		</div>
	)
}

export default App
