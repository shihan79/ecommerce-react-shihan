import React from 'react'

import { AiFillCar } from "react-icons/ai";

import Flex from './Flex';




const Facility = () => {
  return (
    <Flex className ='items-centre gap-x-4'>
    <AiFillCar />
    <p className='font-dm font-normal text-base'>two years warrenty</p>
    </Flex>
  )
}

export default Facility