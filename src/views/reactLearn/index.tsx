import Card from "@/views/reactLearn/Card/index";

const react1 = () => {
	return (
		<div>
			<button onClick={() => window.onShow()}>全局弹框消息</button>
			<Card />
		</div>
	);
};

export default react1;
