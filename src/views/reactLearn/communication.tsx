/* 
	兄弟组件通信：状态提升
		1.先把数据通过函数传给公共父亲组件
		2.父亲组件通过props把数据传给兄弟组件
*/

import { useState } from "react"

type Prop = {
    onGetAMesg: (msg: string) => void
}

const A = ({ onGetAMesg }: Prop) => {
    return (
        <div>
            this. A:
            <button onClick={() => onGetAMesg("Jack")}>send</button>
        </div>
    )
}

const B = ({ name }: { name: string }) => {
    return <div>B, this A的 name: {name}</div>
}

const Communication = () => {
    const [storeName, setStoreName] = useState<string>("")
    const getAMesg = (mesg: string) => {
        console.log(mesg)
        setStoreName(mesg)
    }
    return (
        <div>
            <A onGetAMesg={getAMesg} />
            <B name={storeName} />
        </div>
    )
}

export default Communication
