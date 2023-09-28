
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Container from '../Container'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/breadCrumSlices'
const Navbar = () => {
    const dispatch = useDispatch()
    const handleBreadCrum = (name) => {
        dispatch(pageName(name))
    }

    
  return (
    <nav className='py-8'>
        <Container>
    <Flex>
        <div className='w-1/5'>
            <Image src={Logo}/>
        </div>
        <Flex className='w-4/5 justify-end'>
            <ul className='flex gap-x-10'>
            <Link onClick={()=> handleBreadCrum('Login')} to='/login'>
               <List text='Login'/>
               </Link>
               <Link onClick={()=> handleBreadCrum('Home')} to='/'>
               <List text='Home'/>
               </Link>
                <Link onClick={()=> handleBreadCrum('Shop')} to='/shop'>
                <List text='Shop'/>
                </Link>
                <List text='About'/>
               <Link onClick={() => handleBreadCrum('Contacts')} to ='/contacts'>
               <List text='Contacts'/>
               </Link>
                <List text='Journal'/>                          
            </ul>
        </Flex>
    </Flex>
    </Container>
    </nav>
  )
}

export default Navbar