import React, { useDebugValue } from "react"
const useCookie = (name: string, initialValue: string = "") => {
    //获取cookie
    const getCookie = () => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
        return match ? match[2] : initialValue
    }
    const [cookie, setCookie] = React.useState(getCookie())
    // 设置cookie
    const updateCookie = (value: string, options?: any) => {
        document.cookie = `${name}=${value};${options}`
        setCookie(value)
    }
    // 删除cookie
    const deleteCookie = () => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        setCookie(initialValue)
    }
    // 调试
    useDebugValue(cookie, value => {
        return `cookie:${value}`
    })
    return [cookie, updateCookie, deleteCookie] as const
}
export default function useDebugValueApp() {
    const [cookie, updateCookie, deleteCookie] = useCookie("testKey", "123")
    return (
        <div>
            <div>cookie:{cookie}</div>
            <button
                onClick={() => {
                    updateCookie("update-value567")
                }}
            >
                设置cookie
            </button>
            <button
                onClick={() => {
                    deleteCookie()
                }}
            >
                删除cookie
            </button>
        </div>
    )
}
