import React from "react";
import '../../components/jobProfile.css';

const Navbar =()=>{
    return(
        <div className='navBar flex justify-between items-center p-[3rem]'> 
        <div className="logoDiv">
           <h1 className="logo  text-[25px] text-emerald-400">
                <strong>Job</strong>Search</h1>
        </div>
        
        <div className="menu flex gap-8">
        
        <li className="menulist text-[#6f6f6f] hover:text-bluecolor  text-xl">Jobs</li>
        <li className="menulist text-[#6f6f6f] hover:text-bluecolor text-xl">Companies</li>
        </div>    
        
        </div>
        
    )
       
    
}
export default Navbar