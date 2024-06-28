import { Server } from 'socket.io'

const io = new Server ({
	cors: {
		origin: "http://localhost:5173"
	},
})

let onlineUser = []

const addUser = (userId, socketId) => {
	const userExists = onlineUser.find(user=> user.userId === userId)
	if(!userExists){
		onlineUser.push({userId, socketId})
	}
}

io.on('connection', (socket)=>{
	// console.log(socket.id)
	socket.on("newUser", (userId)=>{
		addUser(userId, socketId)
	})
})

io.listen('4000')