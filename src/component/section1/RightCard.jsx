import React from 'react'
import RightcardText from './RightcardText'

const RightCard = (props) => {
    // console.log(props.id);
    
  return (
    <div className='w-3/10 h-full rounded-3xl overflow-hidden relative shrink-0'>
      <img className='h-full object-cover' src={props.img} alt="" />
      <RightcardText tag={props.tag} id={props.id}/>
    </div>
  ) 
}

export default RightCard
