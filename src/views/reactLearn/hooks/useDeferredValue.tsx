import { Input, List } from "antd"
import React, { useState, useTransition } from "react"

interface Item {
	id: number
	name: string
	address: string
}

const App = () => {
	const [val, setVal] = useState("")
	const [list, setList] = useState<Item[]>([])
	const [isPending, startTransition] = useTransition()
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setVal(value)
		fetch("/api/list?keyWord=" + value)
			.then(res => res.json())
			.then(data => {
				startTransition(() => {
					setList(data.list)
				})
			})
	}
	return (
		<div>
			<h1>useDeferredValue</h1>
			<Input value={val} onChange={handleChange} />
			{isPending && <div>加载中。。。</div>}
			<List
				dataSource={list}
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
