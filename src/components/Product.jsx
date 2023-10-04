
import Productimg from '../assets/Productimg.png'

import {AiFillHeart} from 'react-icons/ai'

import Badge from './Badge'
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, setShowCart } from '../slices/cartSlices'

const Product = ({heading}) => {
  const dispatch = useDispatch()
  const showCart = useSelector(state=>state.cart.showCart)
  console.log(showCart)
  const handleCart = () => {
       dispatch(addToCart({
        title : heading,
        price : 44,
        image : Productimg,
        quantity:1
       }))
       dispatch(setShowCart(true))
  }
  return (
   <div className='mx-3'>
     <div className='relative overflow-hidden group'>
    <img src={Productimg} className='w-full' />
    <Badge text='new' />
    <div className='absolute -bottom-32 left-0 p-6 bg-white-500 w-full group-hover:bottom-0'>
    <Flex className='items-center justify-end gap-x-2 '>
        <p>Add to wish List</p>
         <AiFillHeart />
    </Flex>
    <Flex className='items-center justify-end gap-x-2 my-3'>
        <p> Compare</p>
         <AiFillHeart />
    </Flex>
    <Flex className='items-center justify-end gap-x-2 cursor-pointer'>
        <p onClick={handleCart}>Add to Cart</p>
         <AiFillHeart />
    </Flex>
    </div>
    </div>
    
    <Flex className='justify-between mt-3'>
        <Link to='/'><PortionHeading text={heading}/></Link>
        <p className='font-dm font-reguler text-base '>$44.00</p>
    </Flex>

   </div>
    
  )
}

export default Product