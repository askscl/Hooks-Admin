/* 
	1.默认情况下，父组件的更新会触发子组件的更新
	2.使用React.memo()可以对组件进行包裹，
		避免父组件更新时导致子组件重新渲染, 
		只有props发生变化时才会重新渲染
		2.1 props的比较机制: 利用Object.is()对props进行浅比较
			基本类型，如果相待，则不更新
			复杂数据类型，则比较引用是否相同
				因为[] === [] // false, 所以需要借助useMemo/useCallback来避免不必要的更新

*/
import { memo, useMemo, useState } from "react"

interface IProps {
	list: number[]
}

const MemoSon = memo(function Son({ list }: IProps) {
	console.log("son render")
	return <div>this is son, {list}</div>
})
/* function Son() {
	console.log("son render")
	return <div>this is son</div>
} */
const App = () => {
	const [count, setCount] = useState(0)
	const list = useMemo(() => [1, 2, 3], [])
	// const list = [1, 2, 3]
	return (
		<div>
			<h1>useRef</h1>
			<button onClick={() => setCount(count + 1)}>count: {count}</button>
			{/* <Son /> */}
			<MemoSon list={list} />
		</div>
	)
}

export default App
