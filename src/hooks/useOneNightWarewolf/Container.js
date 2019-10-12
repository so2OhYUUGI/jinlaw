import { useReducer } from "react"

import reducer from './Reducer'
import initialState from './initialState'

export default () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return [state, dispatch]
}
