import ReactDom from "react-dom/client";
import "./index.css";

const Message = () => {
	return <div>提示组件</div>;
};

interface Items {
	messageContainer: HTMLDivElement;
	root: ReactDom.Root;
}

// 声明扩充
declare global {
	interface Window {
		onShow: () => void;
	}
}

const queue: Items[] = [];

window.onShow = () => {
	const messageContainer = document.createElement("div");
	messageContainer.className = "message";
	messageContainer.style.top = `${queue.length * 50}px`;
	document.body.appendChild(messageContainer);
	const root = ReactDom.createRoot(messageContainer);
	root.render(<Message />);

	queue.push({
		messageContainer,
		root
	});

	setTimeout(() => {
		const item = queue.find(item => item.messageContainer === messageContainer)!;
		item.root.unmount(); //卸载
		document.body.removeChild(item.messageContainer);
		queue.splice(queue.indexOf(item), 1);
	}, 2000);
};
