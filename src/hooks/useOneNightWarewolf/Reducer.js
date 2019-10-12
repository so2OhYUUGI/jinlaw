export default (state = {}, action) => {
	const { type = null, value } = action
	switch (type) {
		default: return { ...state }
		case 'startGame': return { ...state, gameState: 'init' }
		case 'addPlayer':
			state.players.push(value)
			return { ...state, players: state.players }
	}
}