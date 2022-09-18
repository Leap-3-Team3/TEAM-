import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
const HomeDetail = ({position,img, title, desc, link}) => {
    let classIMG = position === 'right' ? 'bg-left' : 'bg-right'
    let classDESC = position === 'right' ? 'w-1/2 p-48 justify-start items-center' : 'w-1/2 p-48 items-center'
    let classCONTAINER = position === 'right' ? 'w-full h-[800px] flex flex-row' : 'w-full h-screen flex flex-row-reverse'
  return (
    <div className={classCONTAINER}>
        <div className='w-1/2 justify-start items-center flex h-[1000px]'>
            <div className={`h-4/5 w-full bg-no-repeat ${img} bg-contain ${classIMG}`}></div>
        </div>
        <div className={classDESC}>
            <h1 className='text-5xl text-black font-bold w-[512px] text-left tracking-wide'>{title}</h1>
            <div className='text-lg text-gray-600 font-medium mt-5 w-96 text-left'>{desc}</div>
            <div className='underline text-sky-500 align-center underline-offset-1 flex flex-row cursor-pointer'>Learn more <BsArrowRight/></div>
        </div>
    </div>
  )
}
//left py-48 justify-start
// right p-48
export default HomeDetail