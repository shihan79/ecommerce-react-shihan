import { useDispatch, useSelector } from "react-redux"
import Container from "../components/Container"
import SubHeading from "../components/SubHeading"
import Flex from "../components/Flex"
import { Link } from "react-router-dom"
import Paragraph from "../components/Paragraph"
import PortionHeading from '../components/PortionHeading'
import Button from '../components/Button'
import { pageName } from "../slices/breadCrumSlices"


const LoginPage = () => {
    const page = useSelector(state => state.breadCrum.previousName)
    const dispatch = useDispatch()
    console.log(page)
    const handleBreadcrum = (page) => {
            dispatch(pageName(page))
    }
  return (
    <Container>
        <SubHeading text='Login Page' className="text-49 mt-32"/>
        <Flex>
            <Link onClick={()=>handleBreadcrum(page)} to={page == 'Home' ? '/':page == 'Sign Up' ? '/sign-up': `/${page.toLowerCase()}`}>{page !='Login' && page} /</Link>
            <p className="first-letter:uppercase ml-2">{window.location.pathname.replace('/','')}</p>
        </Flex>
        <Paragraph classname='max-w-644 mt-32  text-76' text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
        <SubHeading text="Returning Customer" className="mb-10 mt-14"/>
        <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Email address" className="mb-2.5"/>
        <input type="text" placeholder='company@domain.com' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
          
        <PortionHeading text="Password" className="mb-2.5"/>
        <input type="text" placeholder='........' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-5xl placeholder:text-67 pb-4'/>
        </div>
        </Flex>
        <Button text="Log in" className="mt-8 text-black bg-white hover:bg-black hover:text-white"/>
        <div className='w-full h-[1px] bg-ash0 mt-16'></div>
        <SubHeading text="New Customer" className="mb-10 mt-14"/>
        <Paragraph classname='max-w-644  mb-14 text-76' text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
        
        <Button text="Continue" className="mb-40"/>
    </Container>
  )
}

export default LoginPage