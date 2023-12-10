import React, { useState } from 'react'
import './Auth.css'
import Login from '../../img/login.png'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction.js';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true)
  console.log(loading)
  const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
  const[confirmPass, setConfirmPass] = useState(true)
  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  } 
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isSignUp){
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    }else{
        dispatch(logIn(data))
    }
  }
  const resetForm = ()=>{
    setConfirmPass(true);
    setData({firstname: "", lastname: "", password: "", confirmpass: "", username: ""});
  }
  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <div className="Webname">
          <h1>CampusXchange</h1>
          <h6>Explore the ideas throughout the world</h6>
          <img src={Login} alt="" />
        </div>
      </div>
      
      {/* Right side */}

      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h1>{isSignUp ? "Sign up" : "Log In"}</h1>

          {isSignUp &&
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          }


        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
            {isSignUp && <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmpass}
            />}

        </div>
        <span style={{display: confirmPass ? "none": "block", color: 'red', fontSize: '12px', alignSelf: "flex-end", marginRight: "5px"}}>
          * Confirm Password is not same
        </span>
        <button className="button infoButton" type="submit" disabled={loading}>
          {loading? "Loading..." : isSignUp ? "Signup": "Log In"}
        </button>

        <div>
          <p onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}} style={{cursor:"pointer"}}>
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Signup"}
          </p>
        </div>

      </form>
    </div>
    </div>
  );
};

export default Auth
