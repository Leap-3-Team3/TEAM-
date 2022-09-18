import React from 'react'

const CustomText = ({type, text, textColor, fontsize, alignment}) => {
    const textStyle = type === 'title' ? 'text-5xl font-bold tracking-wide text-left' : 'text-lg text-gray-600 font-medium mt-5 text-left'
    const Color = textColor
    const fontSize = fontsize
    const alignmentDirection = alignment 
  return (
    <div className={`${textStyle} ${Color} ${fontSize} ${alignmentDirection}`}>{text}</div>
  )
}
export default CustomText