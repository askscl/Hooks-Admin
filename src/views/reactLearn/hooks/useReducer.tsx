import { useReducer } from "react"

// 计数器案例
const initialState = { count: 0 }

function reducer(state: typeof initialState, action: { type: "increment" | "decrement" }) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 }
		case "decrement":
			return { count: state.count - 1 }
		default:
			throw new Error()
	}
}

//====================================================================================================================================
// 购物车案例
const initData = [
	{ name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
	{ name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
	{ name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false }
]
type List = typeof initData
interface Action {
	type: "add" | "sub" | "delete" | "edit" | "update"
	id: number
	newName?: string
}

function reducerData(state: List, action: Action) {
	const item = state.find(item => item.id === action.id)!
	switch (action.type) {
		case "add":
			item.count++
			return [...state]
		case "sub":
			item.count--
			return [...state]
		case "delete":
			return state.filter(item => item.id !== action.id)
		case "edit":
			item.isEdit = !item.isEdit
			return [...state]
		case "update":
			item.name = action.newName!
			return [...state]
		default:
			return state
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [data, dispatchData] = useReducer(reducerData, initData)
	return (
		<>
			<div>useReducer</div>
			{/* 计数器案例 */}
			<div>
				<h2>计数器案例</h2>
				Count: {state.count}
				<button onClick={() => dispatch({ type: "increment" })}>+</button>
				<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			</div>
			{/* 购物车案例 */}
			<div>
				<h2>购物车案例</h2>
				<table cellPadding={0} cellSpacing={0} width={600} border={1}>
					<thead>
						<tr>
							<th>名称</th>
							<th>价格</th>
							<th>数量</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{data.map(item => {
							return (
								<tr key={item.id}>
									<td align="center">
										{item.isEdit ? (
											<input
												onBlur={() => dispatchData({ type: "edit", id: item.id })}
												onChange={e =>
													dispatchData({ type: "update", id: item.id, newName: e.target.value })
												}
												value={item.name}
											/>
										) : (
											<span>{item.name}</span>
										)}
									</td>
									<td align="center">{item.price * item.count}</td>
									<td align="center">
										<button onClick={() => dispatchData({ type: "add", id: item.id })}>+</button>
										{item.count}
										<button onClick={() => dispatchData({ type: "sub", id: item.id })}>-</button>
									</td>
									<td align="center">
										<button onClick={() => dispatchData({ type: "edit", id: item.id })}>编辑</button>
										<button onClick={() => dispatchData({ type: "delete", id: item.id })}>删除</button>
									</td>
								</tr>
							)
						})}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={4} align="right">
								总价: {data.reduce((pre, item) => pre + item.price * item.count, 0)}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	)
}

export default App
