import io from 'socket.io-client'

const Socket = io('https://lirenyeo-react-group-chat-socket-io-server-1.glitch.me/')
const [username, setUsername] = useState("");

useEffect(() => {
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
        // think about what to do here
    })

    Socket.on('UPDATE_USER_LIST', users => {
        // think about what to do here
    })
}, [])


export default Socket;




// Now whenever we need to use the socket, we can do:

//     import Socket from '../utils/socket'

// Socket.on(...)