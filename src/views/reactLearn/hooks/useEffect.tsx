/* 
	功能：类似vue的watch，用于监听某个数据的变化，从而执行某些操作
	区别：
		一、控制粒度更细
			1.组件初始化          []
			2.组件初始化+变量更新 [count]
			3.组件初始化+组件更新  空
		二、可以返回一个函数，用于清除副作用：定时器、事件监听器等，在组件卸载时执行
*/

import { useEffect, useState } from "react"

const Son = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("定时器执行了")
        }, 1000)

        return () => {
            // 组件卸载时执行
            clearInterval(timer)
            console.log("定时器被销毁了")
        }
    }, [])
    return <div>son</div>
}

const App = () => {
    const [count, setCount] = useState(0)

    // 1.依赖项为空数组：useEffect 会在组件渲染到屏幕之后执行一次
    /* useEffect(() => {
		console.log("useEffect执行了")
	}, []) */

    // 2. 依赖项为[count]：useEffect 会在组件渲染到屏幕之后执行一次 + 《count》更新时执行一次
    useEffect(() => {
        console.log("useEffect执行了")
    }, [count])

    // 3. 依赖项为空：useEffect 会在组件渲染到屏幕之后执行一次 + 《组件》更新时执行一次
    /* useEffect(() => {
		console.log("useEffect执行了")
	}) */

    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>useEffect</h1>
            <div>
                功能：类似vue的watch，用于监听某个数据的变化，从而执行某些操作 区别： 一、控制粒度更细 1.组件初始化 []
                2.组件初始化+变量更新 [count] 3.组件初始化+组件更新 空
                二、可以返回一个函数，用于清除副作用：定时器、事件监听器等，在组件卸载时执行
            </div>
            <button onClick={() => setCount(count + 1)}>+{count}</button>
            {show && <Son />}
            <button onClick={() => setShow(!show)}>切换</button>
        </div>
    )
}

export default App
