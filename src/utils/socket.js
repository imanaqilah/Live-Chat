import io from 'socket.io-client'
// Storing connection inside a socket const
const Socket = io('https://lirenyeo-react-group-chat-socket-io-server-1.glitch.me/')



export default Socket;




// Now whenever we need to use the socket, we can do:

//     import Socket from '../utils/socket'

// Socket.on(...)