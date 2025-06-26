import { Input, List } from "antd"
import { useState, useDeferredValue } from "react"
import mockjs from "mockjs"

interface Item {
    id: number
    name: number
    address: string
}

const App = () => {
    const [val, setVal] = useState("")
    const [list] = useState<Item[]>(() => {
        return mockjs.mock({
            "list|1000": [
                {
                    "id|+1": 1,
                    name: "@natural", // 生成一个自然数
                    address: "@county(true)"
                }
            ]
        }).list
    })
    const deferredVal = useDeferredValue(val)
    const isStale = deferredVal !== val
    const findItem = () => {
        console.log(deferredVal, "-----------", val)

        return list.filter(item => item.name.toString().includes(deferredVal))
    }
    return (
        <div>
            <h1>useDeferredValue</h1>
            <Input value={val} onChange={e => setVal(e.target.value)} placeholder="请输入" />
            <List
                style={{ opacity: isStale ? 0.3 : 1, transition: "opacity 200ms" }}
                dataSource={findItem()}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta title={item.name} description={item.address} />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default App
