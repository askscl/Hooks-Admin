import { useStorage } from "@/hooks/learn/useStorage";
import { useHistory } from "@/hooks/learn/useHistory";
import { use } from "echarts/core";
const App = () => {
	const [count, setCount] = useStorage("count", 1);
	const [url, push, replace] = useHistory();
	return (
		<>
			<div>useSyncExternalStore</div>
			<div>
				<h1>useStorage: value: {count}</h1>
				<button onClick={() => setCount(count + 1)}>add</button>
				<button onClick={() => setCount(count - 1)}>reduce</button>
			</div>
			<div>
				{/* 14.11视频时间 */}
				<h1>useHistory: url: {url}</h1>
				<button onClick={() => push("/#/home/index")}>push</button>
				<button onClick={() => replace("/#/test/index")}>replace</button>
			</div>
		</>
	);
};

export default App;
