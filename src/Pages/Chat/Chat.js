import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import { useSelector } from "react-redux";
import { userChats } from '../../api/ChatRequests';
import Conversation from '../../Components/Conversation/Conversation';
import ChatBox from '../../Components/ChatBox/ChatBox';
import {io} from 'socket.io-client';

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const[onlineUsers, setOnlineUsers] = useState([])
  const[sendMessage, setSendMessage] = useState((null))
  const[receiveMessage, setReceiveMessage] = useState((null))
  const socket = useRef()
  
  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Receive message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceiveMessage(data);
    }

    );
  }, []);


  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);

      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  const checkOnlineStatus = (chat)=>{
    const chatMember = chat.members.find((member)=>member!==user._id)
    const online = onlineUsers.find((user)=> user.userId===chatMember)
    return online? true:false
  }


  return (
    <div className='Chat'>
      {/* Left Side */}
      <div className='Left-side-chat'>
        <div className='Chat-container'>
          <h2>Chats</h2>
          <div className='Chat-list'>
            {chats.map((chat) => (
              <div onClick={() => {
                setCurrentChat(chat);
              }}>
                <Conversation
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='Right-side-chat'>
        {/* chat body */}
        <ChatBox chat = {currentChat} currentUser = {user._id} setSendMessage = {setSendMessage} receiveMessage = {receiveMessage}/>
      </div>
    </div>
  )
}

export default Chat
