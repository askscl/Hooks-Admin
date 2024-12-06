import { Component, ReactNode } from "react"

interface SonProps {
	msg: string
	onGetSonMsg: (value: string) => void
}

class Son extends Component<SonProps> {
	render(): ReactNode {
		return (
			<div>
				<div>我是子组件: {this.props.msg}</div>
				<button onClick={() => this.props.onGetSonMsg("this is son msg")}>send to Father</button>
			</div>
		)
	}
}

class Father extends Component {
	state = {
		txt: "this father msg",
		fromSonMsg: ""
	}

	getSonMsg = (value: string) => {
		this.setState({ fromSonMsg: value })
	}

	render(): ReactNode {
		return (
			<div>
				<div>我是父组件: fromSonMsg: {this.state.fromSonMsg}</div>
				<Son msg={this.state.txt} onGetSonMsg={this.getSonMsg} />
			</div>
		)
	}
}

class App extends Component {
	// 1.状态变量 2.事件回调 3.UI(TSX)
	state = {
		count: 0
	}
	// 生命周期
	componentDidMount() {
		console.log("componentDidMount")
	}
	componentDidUpdate() {
		console.log("componentDidUpdate")
	}
	componentWillUnmount() {
		console.log("componentWillUnmount")
	}
	setCount = () => {
		this.setState({ count: this.state.count + 1 })
	}
	render(): ReactNode {
		return (
			<>
				<div>
					<h2>生命周期</h2>
					<div>
						<button onClick={this.setCount}>count:{this.state.count}</button>
					</div>
				</div>
				<hr />
				<div>
					<h2>组件通信</h2>
					<div>
						<Father />
					</div>
				</div>
			</>
		)
	}
}

export default App
