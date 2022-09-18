import React from 'react'

const CustomInput = ({plh,onChange}) => {
  return (
    <input placeholder={plh} onChange={onChange} className=' mr-2 bg-white placeholder-gray-500 rounded w-80 text-white h-14 px-2.5'></input>
  )
}

export default CustomInput