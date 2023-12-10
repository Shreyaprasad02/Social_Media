import React from 'react'
import './Interview.css'
import { useNavigate } from 'react-router-dom'
import Doubt from '../../img/dout.png'
import Alumini from '../../img/alumini.png'
import Authenticity from '../../img/authenticity.png'

const Interview = () => {
        const navigate=useNavigate();
        const handleChange=()=>{
            return(
                navigate('/create')
            )
        } 
    return (
        <div>
            <nav className='navbar'>

                <h1>Interview Experience</h1>
            </nav>
            <div className='head'>
                <h1>Interface for cracking the interviews</h1>
                <p>
                    Get the Inside Scoop on G.H.Raisoni college of Engineering & Managment [GHRCEM] Company Placements. Be the pro and Know with Real Interview Insights. Make Informed Decisions and Take Control of Your Career Journey Today!
                </p>
            </div>


            <div className='middle'>
                <div>
                    <button className='button fc-button' Click={() => handleChange()}>Create post</button>
                </div>
                <div>
                    <button className='button fc-button' >View post</button>
                    <div />

                </div>
            </div>

            <div className="container">
                <div className="heading">
                    <h3>Be Prepared for your Next interview
                        with Interview Experience</h3>
                </div>

                <div className="card-container">
                    <div className='card1'>
                        <div className="image-container">
                            <img src={Doubt} alt="" />
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
                        <div className="image-container">
                            <img src={Alumini} alt="" />
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
                        <div className="image-container">
                            <img src={Doubt} alt="" />
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
                        <div className="image-container">
                            <img src={Authenticity} alt="" />
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
    )
}

export default Interview




