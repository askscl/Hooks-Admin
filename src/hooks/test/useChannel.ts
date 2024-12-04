import { useEffect, useState } from "react"
import { getMenuList } from "@/api/modules/article"
// 封装获取频道列表
function useChannel() {
	// 1.获取频道列表
	const [channelList, setChannelList] = useState([])
	useEffect(() => {
		const getData = async () => {
			const res = await getMenuList()
			setChannelList(JSON.parse(JSON.stringify(res)).data.channels)
		}
		getData()
	}, [])
	// 2.把组件要用到的数据return出去
	return {
		channelList
	}
}

export { useChannel }
