
import Container from '../Container'
import Flex from '../Flex'
import { FaBars,FaShoppingCart } from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import {RxTriangleDown} from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../../slices/breadCrumSlices'
import { useState } from 'react'

const SearchBar = () => {
  const dispatch = useDispatch()
  const handleBreadCrum = (name) => {
     dispatch(pageName(name))
}
const [open,setOpen] = useState(false)
const cart = useSelector(state => state.cart.cartItem)
console.log(cart)
  return (
    <section className='bg-ash py-10'>
        <Container>
            <Flex>
              <Flex className='w-1/5 items-center gap-x-2.5'><FaBars />Shop by Category</Flex>
              <div className='w-3/5 relative'>
                <input type="text" className='w-full py-4 px-5' placeholder='search Products' />
                <AiOutlineSearch className='absolute top-1/2 right-4 -translate-y-1/2'/>
              </div>
              <Flex className='w-1/5 gap-x-10 justify-end'>
                <Flex>
                <Link onClick={()=> handleBreadCrum('Sign Up')} to='/sign-up'>
                <BiSolidUser />
                </Link>
                <RxTriangleDown />
                </Flex>
                <FaShoppingCart onClick={()=> setOpen(!open)}/> {cart.length}
                </Flex>
            </Flex>
            {open && <div className='w-2/6 bg-red-500 h-screen absolute top-0 right-0 z-10'>
            <FaShoppingCart onClick={()=> setOpen(!open)}/>
            <ul>
              {cart.map((item) => {
               return <li>{item.title}-{item.quantity}</li>
              }

              )}
            </ul>
            </div>}
        </Container>
    </section>
  )
}

export default SearchBar