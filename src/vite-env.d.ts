/// <reference types="vite/client" />

//  给import.meta.env 添加属性类型提示
interface ImportMetaEnv {
	readonly VITE_GLOB_APP_TITLE: string
	// more env variables...
}
