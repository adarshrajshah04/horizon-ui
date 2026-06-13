import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1main = (props) => {
  console.log(props);
  
  return (
    <div className='px-18 py-10 h-[90vh] flex justify-between gap-10 items-center'>
      <Left/>
      <Right user={props.user}/>
      
    </div>
  )
}

export default Page1main
