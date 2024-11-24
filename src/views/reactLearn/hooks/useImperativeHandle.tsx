/* 
	useImperativeHandle
	作用：获取子组件的实例的属性或方法
*/
import { forwardRef, useImperativeHandle, useRef } from "react"

const Son = forwardRef((props, ref) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const focusHandler = () => {
		console.log(inputRef.current, "子组件的实例")
		inputRef.current?.focus()
	}

	useImperativeHandle(ref, () => {
		return {
			focusHandler
		}
	})

	return <input type="text" ref={inputRef} />
})

Son.displayName = "Son"

interface SonRefType {
	focusHandler: () => void
}

const App = () => {
	const sonRef = useRef<SonRefType>(null)
	const handleClick = () => {
		console.log(sonRef.current, "父组件获取子组件实例")
		sonRef.current?.focusHandler()
	}

	return (
		<div>
			<h1>useImperativeHandle</h1>
			<div>作用：获取子组件的实例的属性或方法</div>
			<Son ref={sonRef} />
			<button onClick={handleClick}>focus</button>
		</div>
	)
}

export default App
