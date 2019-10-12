export default (state = {}, action) => {
	const { type = null, value } = action
	console.log(type, value)
	switch (type) {
		default: return { ...state }
		case 'name': return { ...state, name: value}
	}
}