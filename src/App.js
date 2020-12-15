import './App.css';
import UserList from './components/UserList.js';
import ChatDisplay from './components/ChatDisplay.js';
import ChatBox from './components/ChatBox.js';
import { useState, useEffect } from 'react';
import Socket from './utils/socket.js';

function App() {
  const [userList, setUserList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [conversation, setConversation] = useState([
    // { username: 'Edwind', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758 }
  ])

  const [input, setInput] = useState("")

  // writing everything above return, will repeat itself and trigger every single time there is a state/prop change 
  // Putting Socket connection in useEffect will avoid the Socket connection from repeating over and over again 
  // empty dependency array (in useEffect) to make it run once only. when smtg changes, run useEffect again

  useEffect(() => {
    // Once the chat app is loaded, we tell the server that there is a new user joining the chat room 
    Socket.emit("NEW_USER")

    // then we need to listen to GET_CURRENT_USER so that we know who we are 
    // specific to yourself, not all sockets
    Socket.on("GET_CURRENT_USER", user => {
      setCurrentUser(user)
    })
    // to tell that there's an update to the user list either someone has left or joined the chat room. Users get cleared when they leave chat room - no infinitely growing number of users. 
    Socket.on("UPDATE_USER_LIST", users => {
      // this will enable us to know who we are 
      setUserList(users)
    })

    Socket.on("RECEIVE_BROADCAST", msg => {
      setConversation((oldConversation) => {
        let newConversations = [...oldConversation]
        newConversations.push(msg)
        return newConversations
      })
      console.log(conversation)
      console.log(msg)
      //  create a clone of the existing conversation
      // however, this method will not show previous conversations, instead, it will overwrite the existing message. see line 37 for solution to this 
      // let newConversation = [...oldConversation]
      // and then push the new message in 
      //   newConversation.push(msg)
      //   setConversation(newConversation)
    })
  }, [])


  // Socket.emit means whoever sending/trigger the message only will receive error message if there's an error 
  // io.emit will send the message to everyone/every single socket connection

  // console.log(Socket)
  const handleSubmit = (e) => {
    // previously we use this to trigger a state change to add to our conversation but only I can see the messages. this is only updating the state in my page 
    // e.preventDefault()
    // console.log(input);
    // let data = {
    //   username: "Karen",
    //   message: input,
    //   timestamp: Date.now()
    // }
    // let conversations = [
    //   ...conversation,
    //   data
    // ]
    // setConversation(conversations)
    // setInput("")
    e.preventDefault()

    let data = {
      username: currentUser.username,
      message: input,
      timestamp: Date.now()
    }

    Socket.emit("BROADCAST_MESSAGE", data)
    setInput("")
  }

  return (
    <div className="container-fluid row mt-3 pb-3 justify-content-center" >

      {/* USERS PANEL */}
      <div className="col-md-2" style={{ backgroundColor: "#333333", color: "#d9d9d9" }} >
        <UserList users={userList} currentUser={currentUser} />
      </div>

      {/* DISPLAY CONVERSATION */}
      <div className="col-md-6 pb-2" style={{ backgroundColor: "#e6e6e6", color: "#4d4d4d" }}>
        <h1>Chats</h1>
        <ChatDisplay conversation={conversation} />
        <div className="mt-4">
          <ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );

}

export default App;