import './App.css';
import UserList from './components/UserList.js';
import ChatDisplay from './components/ChatDisplay.js';
import ChatBox from './components/ChatBox.js';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [conversation, setConversation] = useState([
    { username: 'Edwind', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758 },
    { username: 'Liren', message: 'sea you later?', timestamp: 1544532341078 },
    { username: 'Edwind', message: 'Nothing. It just waved', timestamp: 1544532347412 },
    { username: 'Josh', message: "I'm leaving this chatroom", timestamp: 1544532402998 },
  ])

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
    let data = {
      username: "Karen",
      message: input,
      timestamp: Date.now()
    }
    let conversations = [
      ...conversation,
      data
    ]
    setConversation(conversations)
    setInput("")
  }

  return (
    <div className="container-fluid row mt-3 pb-3 justify-content-center" >

      {/* USERS PANEL */}
      <div className="col-md-2" style={{ backgroundColor: "#333333", color: "#d9d9d9" }} >
        <p>Show User List here</p>
        <UserList />
      </div>

      {/* DISPLAY CONVERSATION */}
      <div className="col-md-6 pb-2" style={{ backgroundColor: "#e6e6e6", color: "#4d4d4d" }}>
        <h1>Show chats</h1>
        <ChatDisplay conversation={conversation} />
        <div className="mt-4">
          <ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );

}

export default App;