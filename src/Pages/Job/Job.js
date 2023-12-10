import React, { useState } from 'react'
import './Job.css'

const Job = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <div className='job'>
        <nav>
          <a href='/' className='flexitems-center gap-2 text-2x1 text-blue'>Job Portal</a>
        </nav>
      </div>
    </>
  )
}

export default Job
