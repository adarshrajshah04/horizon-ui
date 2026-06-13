import React from 'react'
import Navbar from './Navbar'
import Page1main from './Page1main'


const Section1 = (props) => {
  
  return (
    <div className= 'w-full h-screen overflow-hidden'>
      <Navbar/>
      <Page1main user={props.user} />
   
    </div>
  )
}

export default Section1
