import "./App.css"
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Chat from "./Pages/Chat/Chat";
import { useSelector } from 'react-redux';
import Profile from './Pages/Profile/Profile';
import Job from "./Pages/Job/Job";
import Interview from "./Pages/Interview/Interview";


function App() {
  const user = useSelector((state)=> state.authReducer.authData);
  return (
    <div className="app">
      <Header/>
      <div className='app__body'>
        <Routes>
         <Route path = '/' element={user?<Navigate to = "home"/>: <Navigate to = "auth"/>}/>
         <Route path = '/home' element = {user? <Home/>: <Navigate to = '../auth'/>}/>
         <Route path = '/auth' element = {user? <Navigate to = '../home'/> : <Auth/>}/>
         <Route path = '/profile/:id' element = {user? <Profile/>: <Navigate to = '../auth'/>}/>
         <Route path="/chat" element={user ? <Chat/> : <Navigate to="../auth" />}/>
         <Route path="/job" element={user ? <Job/> : <Navigate to="../auth" />}/>
         <Route path="/interview" element={user ? <Interview/> : <Navigate to="../auth" />}/>
        </Routes>
      </div>       
    </div>
  );
}

export default App;
