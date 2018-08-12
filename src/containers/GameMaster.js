class GameMaster {
	constructor() {
		this.players = []
	}

	addPlayer = (player) => {
		this.players.push(player)
		console.log(this.players)
	}
}

export default new GameMaster() // インスタンスを出力することでシングルトンで実装できる