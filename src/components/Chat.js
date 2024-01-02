import './Chat.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
// import gptImgLogo from './assets/chatgptLogo.svg';
import sendMsgToOpenAI from './sendMsgToOpenAI';
import {   useEffect, useRef,useState } from 'react';  
import boaticon from './assets/boaticon.png';
function Chat() {
  const msgEnd = useRef(null);
  const [input,setInput] = useState("");
  const[message, setMessages] = useState([
    {
    text:"Hi, I am your virtual assistance how can i help you.......",
    isBot: true,
  }
])
  useEffect(()=>{
    msgEnd.current.scrollIntoView()
  },[message])
  const handleSend= async () =>{
    const text=input;
    setInput('');
    setMessages([
      ...message,
      {
        text, isBot:false
      }
    ])
   
  const res =  await sendMsgToOpenAI(input);
    setMessages([
      ...message,
      { text,isBot: false },
      {text:res, isBot:true}
    ])
  }
  
  const handleEnter = async(e) =>{
    if(e.key==='Enter') await handleSend();
  }
  const handelQuery = async(e)=>{
    const text=e.target.value;
    setInput('');
    setMessages([
      ...message,
      {
        text, isBot:false
      }
    ])
   const res =  await sendMsgToOpenAI(input);
    setMessages([
      ...message,
      { text,isBot: false },
      {text:res, isBot:true}
    ]);
  }
  return (
    <div className="App">
    <div className='sideBar'>
      <div className='upperSide'>
        <div className='upperSideTop'><img className='Boat'src ={boaticon} alt='Logo' classNmae ='logo'/><span className='brand'>Assistance</span> </div>
       
      <button className='midBtn' onClick={()=>{window.location.reload()}}><img src ={addBtn} alt = 'new chat' className='addBtn' />New Chat</button>
      {/* <div className='upperSideBottom'>
        <button className='query'onClick={handelQuery} value={"What is programming ?"}><img src ={msgIcon} alt ='Query' />What is programming ?</button>
        <button className='query' onClick={handelQuery} value={"How to use an API ?"}><img src ={msgIcon} alt ='Query' />How to use an API ?</button>
      </div> */}
    </div>
    {/* <div className='lowerSide'>
      <div className='listItems'><img src={home} alt ="" className='listItemsImg'/>Home</div>
      <div className='listItems'><img src={saved} alt ="" className='listItemsImg'/>Saved</div>
      <div className='listItems'><img src={rocket} alt ="" className='listItemsImg'/>Upgrade</div>
    </div> */}
    </div>
    <div className='main'>
      <div className='chats'>
         
         {message.map((message,i)=>
           <div key ={i}className={message.isBot?'chat bot':"chat"}>
          <img className = 'chatImg' src={message.isBot?boaticon :userIcon} alt ='user' /><p className='txt'> {message.text}</p>
         </div>
          )}
          <div ref={msgEnd}/>
         <div/>
      </div>
      <div className='chatFooter'>
        <div className='inp'>
          <input type='text' placeholder='Send a message' value = {input } onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/><button className='send' onClick={handleSend}><img src ={sendBtn} alt='' /></button>
        </div>
        <p></p>
      </div>
    </div>
      </div>
    
  );
}
export default Chat;
