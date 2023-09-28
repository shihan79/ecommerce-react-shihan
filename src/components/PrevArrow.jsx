import React from 'react'

import {FaAngleLeft} from 'react-icons/fa'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-[#979797] w-16 h-16 rounded-full inline-block flex rounded-full inline-block justify-center items-center`}
        // style={{ ...style, display: "inline-block", background: "green" }}
        onClick={onClick}
      ><FaAngleLeft/></div>
    )
}

export default PrevArrow