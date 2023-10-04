
import Container from '../Container'
import Flex from '../Flex'
import { FaBars,FaShoppingCart } from 'react-icons/fa'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiSolidUser} from 'react-icons/bi'
import {RxTriangleDown} from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../../slices/breadCrumSlices'
import { useEffect, useState } from 'react'
import { decrement, increment, removeFromCart, setShowCart } from '../../slices/cartSlices'

const SearchBar = () => {
  const dispatch = useDispatch()
  const handleBreadCrum = (name) => {
     dispatch(pageName(name))
}
const handleIncrement = (item) =>{
          dispatch(increment(item))
}
const handleDecrement = (item) => {
           dispatch(decrement(item))
}
// const [open,setOpen] = useState(false)
const [total,setTotal] = useState(0)
const cart = useSelector(state => state.cart.cartItem)
const showCart = useSelector(state=>state.cart.showCart)
console.log(showCart)
// console.log(cart)
useEffect(()=>{
    let total = 0
    cart.map(item=>{
      total += item.price*item.quantity
    })
    setTotal(total)
},[cart])
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
                <FaShoppingCart onClick={()=>dispatch(setShowCart(true))}/> {cart.length}
                </Flex>
            </Flex>
            { showCart && <div className='w-2/6 bg-black text-white h-screen absolute top-0 right-0 z-10'>
            <FaShoppingCart onClick={()=>dispatch(setShowCart(false))}/>
            <ul className='flex justify-between py-5 px-2 bg-ash text-black'>
              <li>Action</li>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>

            </ul>
              {cart.length==0 ? <h1 className=' text-center'>Cart is empty</h1> :cart.map((item,index) => (
                <ul key={index} className='flex justify-between py-5 px-2 border-b border-solid border-white'>
                  <TiDeleteOutline onClick={()=>dispatch(removeFromCart(item))} />
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li className='border border-solid border-white px-4 py-1'>
                  <button className='mr-2' onClick={()=>handleDecrement(item)}>-</button>
                  {item.quantity}
                  <button className='ml-2' onClick={()=>handleIncrement(item)}>+</button>
                  </li>
                <li>{item.price*item.quantity}</li>                
               </ul>
               
              )

              )}
              <h2 className='absolute bottom-5 right-5'>Total:{total}</h2>
            
            </div>}
        </Container>
    </section>
  )
}

export default SearchBar