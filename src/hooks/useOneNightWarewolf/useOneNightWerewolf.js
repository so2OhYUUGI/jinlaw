import { useContext } from "react";

import Context from './Context'

export default () => {
	const [state, dispatch] = useContext(Context)
	return [state, dispatch]
}
