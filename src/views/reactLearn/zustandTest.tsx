// import { create } from "zustand"
const URL = "http://geek.itheima.net/v1_0/channels"

/* 
	zustand
	使用效果：这个框架下，页面直接无限刷新中，用不了
	1. 创建store
	语法容易出错
	1.函数参数必须返回一个对象，对象中包含state和action
	2. 函数参数是一个set函数，set函数可以修改state
	语法1：参数是函数 需要用到老数据的场景
	语法2：参数是对象，直接修改state  set({ count: 100 })
*/

// 1.创建store
/* const useStore = create(set => {
	return {
		count: 0,
		increment: () => set(state => ({ count: state.count + 1 })),
		channelList: [],
		getChannelList: async () => {
		    const res = await fetch(URL)
			const jsonRes = await res.json()
			set({ channelList: jsonRes.data.channels })
		}

	}
}) */

// 2.绑定store到组件
const zustandTest = () => {
    // const { count, increment } = useStore()
    return (
        <div>
            <h1>zustand</h1>
            {/* <button onClick={increment}>{count}</button> */}
        </div>
    )
}

export default zustandTest
