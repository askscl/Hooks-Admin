/* 
	useSyncExternalStore 是 React 18 引入的一个 Hook，用于从外部存储（例如状态管理库、浏览器 API 等）获取状态并在组件中同步显示。
	这对于需要跟踪外部状态的应用非常有用。

	场景
	订阅外部 store 例如(redux,Zustand德语)
	订阅浏览器API 例如(online,storage,location)等
	抽离逻辑，编写自定义hooks
	服务端渲染支持

	注意事项
	如果 getSnapshot 返回值不同于上一次，React 会重新渲染组件。这就是为什么，如果总是返回一个不同的值，会进入到一个无限循环，并产生这个报错。

	Uncaught (in promise) Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

	function getSnapshot() {
		return myStore.todos; //object
	}

	这种写法每次返回了对象的引用，即使这个对象没有改变，React 也会重新渲染组件。

	如果你的 store 数据是可变的，getSnapshot 函数应当返回一个它的不可变快照。这意味着 确实 需要创建新对象，但不是每次调用都如此。而是应当保存最后一次计算得到的快照，并且在 store 中的数据不变的情况下，返回与上一次相同的快照。如何决定可变数据发生了改变则取决于你的可变 store。

	function getSnapshot() {
		if (myStore.todos !== lastTodos) {
			// 只有在 todos 真的发生变化时，才更新快照
			lastSnapshot = { todos: myStore.todos.slice() };
			lastTodos = myStore.todos;
		}
		return lastSnapshot;
	}
*/
import { useStorage } from "@/hooks/learn/useStorage"
import { useHistory } from "@/hooks/learn/useHistory"

const App = () => {
	const [count, setCount] = useStorage("count", 1)
	const [url, push, replace] = useHistory()
	return (
		<>
			<div>useSyncExternalStore</div>
			<div>
				<h1>useStorage: value: {count}</h1>
				<button onClick={() => setCount(count + 1)}>add</button>
				<button onClick={() => setCount(count - 1)}>reduce</button>
			</div>
			<div>
				{/* 14.11视频时间 */}
				<h1>useHistory: url: {url}</h1>
				<button onClick={() => push("/#/home/index")}>push</button>
				<button onClick={() => replace("/#/test/index")}>replace</button>
			</div>
		</>
	)
}

export default App
