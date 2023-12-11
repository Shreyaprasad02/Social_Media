import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import Feed from './components/Feed/Feed';
import Followerscard from './components/FollowersCard/Followerscard';
import Card from "./components/Exp"
// import FlavorForm from "./components/createpost.js";
// import PostForm from './components/Createpost.jsx';
import Form from './components/createPost.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import JobProfile from './components/jobProfile';
import Chat from './components/Chat.js';
import sendMsgToOpenAI from './components/sendMsgToOpenAI.js';


// function App() {
//   return (
//     <>
    // {/* <div className="app">
    //   <Header />
    //  {/* App Body */}
    //  {/* <div className='app__body'> */}
    //    {/* <Sidebar />
    //   <Feed />
    //   <Followerscard /> */}
    // {/* <Card/> */}
    
       
    //  {/* </div>
    // </div> */}
  
      
//       <div>
//       <Form/>
//         <Navbar/> 
//         <Search/>
//        <Jobs/>
//        <Value/>
//        <Footer/>
//        </div>
       
    
       


//     </>
//   );
// }

// export default App;



const App=()=>{
  return(


<>
{/* 
 <div className="app">
      <Header />
     App Body 
     <div className='app__body'> 
    <Sidebar />
      <Feed />
      <Followerscard /> 
     
    
       
      </div>
   </div> */}
   <BrowserRouter>
    <Routes>
    <Route path ='/' element={<Header/>}/>
      <Route path='/interview' element={<Card/>}/>
      <Route path='/create' element={<Form/>}/>
      <Route path='/job' element={<JobProfile/>}/>
      <Route path ='/chat' element={<Chat/>}/>
    
    </Routes>
   </BrowserRouter>
   
</>
  )
}
export default App;
