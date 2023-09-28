import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-dm text-sm ${className}`}>{text}</li>
  )
}

export default List