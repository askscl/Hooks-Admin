import * as types from "@/redux/mutation-types"

// * setCount
export const setCount = (count: number) => ({
	type: types.SET_COUNT,
	count
})

// * increment
export const increment = () => ({
	type: types.INCREMENT
})

// * decrement
export const decrement = (num: number) => ({
	type: types.DECREMENT,
	num
})
