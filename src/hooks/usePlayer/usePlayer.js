import { useReducer } from "react"

import reducer from './Reducer'

export default (name = "") => {
	const [state, dispatch] = useReducer(reducer, { name })

	return [state, dispatch]
}
