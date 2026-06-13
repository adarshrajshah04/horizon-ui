import React from 'react'
import LeftText from './LeftText'
import LeftIcon from './LeftIcon'

const Left = () => {
  return (
    <div className='w-1/4 h-full  flex flex-col justify-between'>
      <LeftText/>
      <LeftIcon/>
      
    </div>
  )
}

export default Left
