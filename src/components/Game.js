import React from 'react'

import useGame from 'hooks/useOneNightWarewolf'
import GameTitle from './GameTitle'
import SelectRole from './SelectRole'

export default () => {
	const [game] = useGame()

	switch (game.gameState) {
		default: return <GameTitle />
		case 'init': return <SelectRole />
	}
}