import React from 'react'

import useGame from 'hooks/useOneNightWarewolf'

export default () => {
	const [game] = useGame()

	console.log(game)

	return (
		<div>
			{game.players.map((player, index) => <div key={index}>{player.name}</div>)}
		</div>
	)
}