import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
    // console.log(props);
    
    return (
        <div id='right' className='w-3/4 h-full px-10 py-5  flex gap-10 flex-nowrap overflow-x-auto'>
            {props.user.map(function (elem,idx) {
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
            })}
        </div>
    )
}

export default Right
