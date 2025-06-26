/* 
	forwardRef
	作用：获取子组件的实例
*/
import { forwardRef, useRef } from "react"

const Son = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
    return <input type="text" ref={ref} />
})

Son.displayName = "Son"

const App = () => {
    const sonRef = useRef<HTMLInputElement>(null)
    const showRef = () => {
        console.log(sonRef.current)
        sonRef.current?.focus()
    }

    return (
        <div>
            <h1>forwardRef</h1>
            <Son ref={sonRef} />
            <button onClick={showRef}>focus</button>
        </div>
    )
}

export default App
