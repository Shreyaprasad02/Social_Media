import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
const Search =()=>{
    return(
        <>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap- [10px] bg-white p-5 shadow-1g shadow-greyIsh-700'>
        
        <div className='flex gap-2 items-center'>
        <AiOutlineSearch className='text-[25px] icon'/> 
        <input type ="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...'/>
        
         </div>
         <button className ='bg-green-600 h-full px-5 p-5 rounded-[10px] text-white
          cursor-pointer hover:bg-green-600'>Search</button>
       
         </div>
         


        
        <div className='searchDiv grid gp-10 <form action=""> bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action="">
        </form>
        <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="relevance" className= "text-[#808080] font-semibold">Sort by: </label>
        <select name="" id="elevance" className="bg-white rounded-[3px] px-4 py-1">
                <option value="*">Sort By</option>
        <option> Relevance</option>
              <option>Newest First</option>
              <option>Highest Salary</option>
        </select>
</div>

  
        <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="Type" className= "text-[#808080] font-semibold">type: </label>
        <select name="" id="elevance" className="bg-white rounded-[3px] px-4 py-1">
                <option value="*">Select Type</option>
        <option> Full-Time</option>
              <option>Remote</option>
              <option>Contract</option>
              <option>Part-Time</option>
        </select>
</div>


        <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="Level" className= "text-[#808080] font-semibold">Level: </label>
        <select name="" id="elevance" className="bg-white rounded-[3px] px-4 py-1">
                <option value="*">Select Level</option>
        <option value="internship">Internship</option>
        <option value="entry">Entry Level</option>
        <option value="mid">Mid Experience</option>
        <option value="mid">Senior</option>
        </select>
</div>
<span className='text-[#a1a1a1] cursor-pointer'>Clear</span>
</div>



        </div>
        </>
        
        
        
        )
       
}
export default Search;