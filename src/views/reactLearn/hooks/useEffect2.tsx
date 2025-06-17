import React, { useLayoutEffect } from "react"
import { useState, useEffect } from "react"

function effect1() {
	console.log("useEffect回调111执行")

	return () => {
		console.log("effect1111 销毁")
	}
}

function effect2() {
	console.log("useEffect回调2222执行")

	return () => {
		console.log("effect222 销毁")
	}
}

function effect3() {
	console.log("useEffect回调333执行")

	return () => {
		console.log("effect3333 销毁")
	}
}

function effect4() {
	console.log("useEffect回调4444执行")

	return () => {
		console.log("effect444 销毁")
	}
}

function Bpp() {
	useEffect(effect3)

	useEffect(effect4)

	return <h1>Bpp</h1>
}

function App() {
	const [count, setCount] = useState(0)

	useEffect(effect1)

	useEffect(effect2)

	useLayoutEffect(() => {
		console.log("useLayoutEffect回调执行")
	})

	function handle_click() {
		setCount(count => {
			return count + 1
		})
	}

	// a => a
	return (
		<div>
			<h1 onClick={handle_click}>点我新增111</h1>
			<Bpp />
			{/* <h2>{count}</h2> */}
		</div>
	)
}

export default App
