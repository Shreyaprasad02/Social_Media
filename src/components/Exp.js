import React from 'react'
import './Exp.css'
import dout from './dout.png'
import alumini from './alumini.png'
import authenticity from './authenticity.png'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


function Card({title, imageurl,body}) {
    const navigate=useNavigate();
    const handleChange=()=>{
        return(
            navigate('/create')
        )
    }
return(
    <>
    <div className='main-con'>
    <nav className='navbar'>
    <h1>Interviews Experience</h1>
</nav>
    <div className='head'>
    <h1>Interface for crack the interviews</h1>
    <p>
    Get the Inside Scoop on G.H.Raisoni college of Engineering & Managment [GHRCM] Company Placements. 
    Be the Pro in the Know with Real Interview Insights. 
    Make Informed Decisions and Take Control of Your Career Journey Today!
    </p>
    </div>
  
   
    <div className='middle'>
          <div>
           
              <button onClick={()=>handleChange()}>Create post</button>
              </div>
              <div>
              <button>View post</button>
             <div/>
        
        </div>
        </div>
    
    <div className="container">
    <div className="heading">
    <h1>Be Prepared for your Next interview<br/>
    with Interview Experience</h1>
    </div>

<div className ="card-container">
<div className='card1'>
<div className ="image-container">
<img src={dout} alt="" />
</div>
<div className="card-content">
<div className="card-title">

<h3>Doubt Solving</h3>
</div>
<div className="card-body">
    <p>Get the Support You Need for Your Career Journey. Ask Your Doubts, Get Feedback from Your Peers.</p>
</div>
</div>
</div>
<div className='card2'>
<div className ="image-container">
<img src={alumini} alt="" />
</div>
<div className="card-content">
<div className="card-title">

<h3>Connect with Alumni</h3>
</div>
<div className="card-body">
    <p>Build Your Network, Grow Your Connections. Get to Know Alumni and Expand Your Horizons..</p>
</div>
</div>
</div>
<div className='card3'>
<div className ="image-container">
<img src={dout} alt="" />
</div>
<div className="card-content">
<div className="card-title">

<h3>Insights</h3>
</div>
<div className="card-body">
    <p>Get Real Insights, Ace Your Interviews. 
    Discover the Power of Sharing Your Experiences with Our Community.</p>
</div>
</div>
</div>
<div className='card4'>
<div className ="image-container">
<img src={authenticity} alt="" />
</div>
<div className="card-content">
<div className="card-title">

<h3>Authenticity</h3>
</div>
<div className="card-body">
    <p>Discover Authentic Interview Insights on Our Platform and Get a Realistic Look at Campus Placements!</p>
</div>
</div>
</div>

</div>

    
</div>
</div>

 

</>

)
}
export default Card;