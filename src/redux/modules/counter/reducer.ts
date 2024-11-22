import produce from "immer"
import { AnyAction } from "redux"
import { CounterState } from "@/redux/interface"
import * as types from "@/redux/mutation-types"

const counterState: CounterState = {
	count: 100
}

const counter = (state: CounterState = counterState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_COUNT:
				draftState.count = action.count
				break
			case types.INCREMENT:
				draftState.count += 1
				break
			case types.DECREMENT:
				draftState.count -= action.num
				break
			default:
				return draftState
		}
	})

export default counter
