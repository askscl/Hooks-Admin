import "./index.css"
// import PropTypes from "prop-types";

// 1.第一种写法interface 安装给 props 添加类型
interface Props {
	title?: string
	callback?: (params: string) => void
	children?: React.ReactNode
}

/* export default function Card(props: Props) {
	return (
		<div className="card">
			<header>
				<div>{props.title}</div>
				<div>副标题</div>
			</header>
			<main>内容区域</main>
			<footer>
				<button>确认</button>
				<button>取消</button>
			</footer>
		</div>
	);
} */

// 2.第二种写法React.FC<props>

//默认值
// 1.解构 { title = "早上好" }
// 2.声明一个默认对象
const defaultProps: Partial<Props> = {
	title: "早上好"
}
const Card: React.FC<Props> = props => {
	// ------------------------------------------------------------
	//--接收方
	window.addEventListener("on-card", e => {
		console.log("我是B收到了", e.params.name)
	})
	// ------------------------------------------------------------
	const { title } = { ...defaultProps, ...props }
	return (
		<div className="card">
			<header>
				<div>{title}</div>
				<div>副标题</div>
			</header>
			<main>{props.children}</main>
			<footer>
				<button onClick={() => props.callback && props.callback("我是子组件数据")}>确认</button>
				<button>取消</button>
			</footer>
		</div>
	)
}

/* Card.propTypes = {
	title: PropTypes.string
}; */

export default Card
