/* 
	组件通信练习
*/
import Card from "@/views/reactLearn/Card/index"
import Card2 from "@/views/reactLearn/Card2/index"

const fn = (params: string) => {
    console.log(params)
}

const react1 = () => {
    return (
        <div>
            <button onClick={() => window.onShow()}>全局弹框消息</button>
            <Card callback={fn} title={"我见过神11"} />
            <Card2 callback={fn} title={"我见过神22"} />
            {/* <Card title={"我见过神1"}>
				<div>昨天万圣节！</div>
			</Card> */}
        </div>
    )
}

export default react1
