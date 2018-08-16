import React from 'react'

import Card from '../components/Card'

class GameMaster {
	constructor() {
		this.players = []
		this.progress = "init";
	}
	
	init = () => {
		this.addPlayer('guesut 1')
		this.addPlayer('guesut 2')
		this.progress = 'init'
	}

	setProgress = null // ゲームの進行状況を変更するメソッド。main で setState を仕込む

	addPlayer = (player) => {
		this.players.push(player)
		console.log(this.players)
	}

	setCemetery = (cards) => {
		this.cemetery.push('A')
		this.cemetery.push('B')
	}

	deck = (action) => {
		const deck = [
			<Card key={1} action={action} />,
			<Card key={2} action={action} />,
			<Card key={3} action={action} />,
			<Card key={4} action={action} />,
			<Card key={5} action={action} />,
			<Card key={6} action={action} />,
		]

		return deck.slice(0, this.players.length + 2)
	}
}

export default new GameMaster() // インスタンスを出力するとシングルトンで実装できる