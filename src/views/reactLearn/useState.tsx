import { useState } from "react"
/* 
	setState 修改数据,是异步的
	如果遇到多个一样的 setState,会合并成一个，只执行一次（react对异步操作的性能优化）
	如果想要串行执行，可以用setState的回调函数 setState((pre) => {
		return pre + 1
})
*/
const Test2 = () => {
	// 基本数据类型
	let [num, setNum] = useState(1)
	const handerClick = () => {
		// setNum(10);

		// setNum(num + 1);
		// setNum(num + 1);
		// setNum(num + 1);

		setNum(num + 1)
		setNum(pre => pre + 1)
		setNum(pre => pre + 1)
		setNum(pre => {
			return pre + 1
		})
	}

	// 引用数据类型
	const [arr, setArr] = useState([1, 2, 3, 5])
	const handerClick2 = () => {
		// 不能操作原数组，否则会报错
		const arr2 = [...arr]
		// arr2.push(4);
		// arr2.pop();
		// slice左闭右开
		const start = 0
		const end = 3
		const arr3 = [...arr2.slice(start, end), 4, ...arr2.slice(end)]
		setArr(arr3)
	}

	const [obj, setObj] = useState({ name: "小明", age: 18 })
	const handerClick3 = () => {
		setObj({
			...obj,
			name: "小东"
		})
	}
	return (
		<div>
			<h1>{num}</h1>
			<button onClick={handerClick}>点击</button>
			<h1>{arr}</h1>
			<button onClick={handerClick2}>点击</button>
			<h1>{obj.name}</h1>
			<h1>{obj.age}</h1>
			<button onClick={handerClick3}>点击</button>
		</div>
	)
}

export default Test2
