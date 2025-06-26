import { useSelector } from "react-redux"

import { connect } from "react-redux"
import { setCount, increment, decrement } from "@/redux/modules/counter/action" //=====1.引入action
const ReduxTest = (props: any) => {
    // 方式一：
    const { count, setCount, increment, decrement } = props //=========================3.将state\action映射到props
    // 方式二：
    // const { setCount, increment } = props //========================================3.将state映射到props
    // const { count } = useSelector((state: any) => state.counter)
    return (
        <div>
            <h1>reduxTest</h1>
            <div>count: {count}</div>
            {/* ======================================================================4. 在箭头函数中使用action */}
            <button onClick={() => setCount(0)}>重置</button>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => decrement(10)}>-10</button>
        </div>
    )
}

const mapStateToProps = (state: any) => state.counter
const mapDispatchToProps = { setCount, increment, decrement }
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest) //==============2.将action映射到props
