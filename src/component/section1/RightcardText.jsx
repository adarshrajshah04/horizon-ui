import React from 'react'

const RightcardText = (props) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between'>
        <h1 className='w-10 h-10 bg-white rounded-[50%] flex justify-center items-center font-bold'>{props.id+1}</h1>
        <div className='text-white'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nisi?
            <div className='flex justify-between mt-5'>
                <button className='bg-blue-700 px-4 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-700 p-3 rounded-full'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightcardText
