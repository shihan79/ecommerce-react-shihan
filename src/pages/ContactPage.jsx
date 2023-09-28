
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PortionHeading from '../components/PortionHeading'
import Button from '../components/Button'
import Image from '../components/Image'
import map from '../assets/map.png'
import { pageName } from '../slices/breadCrumSlices'

const ContactPage = () => {
    const page = useSelector(state => state.breadCrum.previousName)
    const dispatch = useDispatch()
    console.log(page)
    const handleBreadcrum = (page) => {
            dispatch(pageName(page))
    }
  return (
    <Container>
        <SubHeading text="Contacts" className="text-49 mt-32"/>
        <Flex>
            <Link onClick={()=>handleBreadcrum(page)} to={page == "Home" ? "/" : page == "Sign Up" ? "/sign-up" : `/${page.toLowerCase()}`}>{page !='Contacts' && page} </Link>
            <p className='first-letter:uppercase ml-2'>{window.location.pathname}</p>
        </Flex>
        <SubHeading text="Fill up a Form" className="mb-10 mt-14"/>
        <div>
        <PortionHeading text="Name" className="mb-2.5"/>
        <input type="text" placeholder='Your Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <div className='my-6'>
        <PortionHeading text="Email" className="mb-2.5"/>
        <input type="text" placeholder='Your email here' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <div>
        <PortionHeading text="message" className="mb-2.5"/>
        <input type="text" placeholder='Your message here' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <Button text="Post" className="mb-40 mt-8"/>
        <Image src={map}/>
    </Container>
  )
}
 
export default ContactPage