import { createContext, useContext, useState } from "react"

// 1. createContext 创建一个上下文对象
const AppContext = createContext("")
// 2. 在顶层组件 通过 Provider 提供数据
// 3. 在子组件中 通过 useContext 获取数据

//==========================================================================================
// 孙传爷
// 1.createContext 创建一个上下文对象, 默认值写为一个函数

const GetMsgContext = createContext((msg: string) => {
	return msg
})

const B = () => {
	const msg = useContext(AppContext)
	const sendMsg = useContext(GetMsgContext)
	return (
		<div>
			<h1>B: {msg}</h1>
			<button onClick={() => sendMsg("this is from B")}>send msg from B</button>
		</div>
	)
}

const A = () => {
	return (
		<div>
			<h1>A</h1>
			<B />
		</div>
	)
}

const App = () => {
	const msg = "this is app msg"
	const [fromBMsg, setFromBmsg] = useState("")
	const getMsg = (msg: string) => {
		setFromBmsg(msg)
		return msg
	}
	return (
		<div>
			<GetMsgContext.Provider value={getMsg}>
				<AppContext.Provider value={msg}>
					<h1>useContext</h1>
					<A />
					{fromBMsg}
				</AppContext.Provider>
			</GetMsgContext.Provider>
		</div>
	)
}

export default App
