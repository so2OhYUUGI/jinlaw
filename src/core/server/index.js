const server = require('ws').Server
const s = new server({ port: 8550 })

console.log('server start')

s.on('connection', function (ws) {
	ws.on('message', function (message) {
		console.log("Received: " + message)

		s.clients.forEach(function (client) {
			client.send(message + ' : ' + new Date())
		})
	})

	ws.on('close', function () {
		console.log('I lost a client')
	})
})