import React from 'react'

class Player {
	constructor() {
		this.name = null
		this.card = null
	}

	setName = (name) => {
		this.name = name
	}

	setCard = (card) => {
		this.card = card
	}
}

export default new Player() // インスタンスを出力することでシングルトンで実装できる