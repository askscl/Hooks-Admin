import { useSyncExternalStore } from "react";

export const useStorage = (key: string, initialValue: any) => {
	// 订阅者
	const subscribe = (callback: () => void) => {
		// 订阅浏览器API
		window.addEventListener("storage", callback);
		return () => {
			// 返回取消订阅
			window.removeEventListener("storage", callback);
		};
	};

	//从localStorage中获取数据 如果读不到返回默认值
	const getSnapshot = () => {
		return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)!) : initialValue;
	};

	const res = useSyncExternalStore(subscribe, getSnapshot);

	// 修改数据
	const updateStorage = (value: any) => {
		sessionStorage.setItem(key, JSON.stringify(value));
		// 手动触发storage事件
		window.dispatchEvent(new StorageEvent("storage"));
	};
	return [res, updateStorage];
};
