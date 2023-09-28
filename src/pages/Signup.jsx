
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Paragraph from '../components/Paragraph'
import PortionHeading from '../components/PortionHeading'
// import Input from '../components/Input'
import Button from '../components/Button'
import { pageName } from '../slices/breadCrumSlices'


const Signup = () => {
    const page = useSelector(state => state.breadCrum.previousName)
    const dispatch = useDispatch()
    console.log(page)
    const handleBreadcrum = (page) => {
            dispatch(pageName(page))
    }
  return (
    <Container>
        <SubHeading text='Signup' />
        <Flex className='mt-3'>
            <Link onClick={()=>handleBreadcrum(page)}  to={page == 'Home' ? '/' :page == 'Sign Up'? '/sign-up': `/${page.toLowerCase()}`}>
              <p>{page != 'Sign Up' && page} /</p>
              </Link>
              
            <p className='first-letter:uppercase ml-2'>{window.location.pathname.replace('/','').replace('-',' ')}</p>
        </Flex>
        <Paragraph classname='max-w-644 mt-32  text-76' text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
        <div className='w-full bg-ash0 mt-16 h-[1px]'></div>
        <SubHeading text="Your Personal Details"className='mt-[120px] mb-10'/>
        <Flex className="gap-x-10">
         <div>
         <PortionHeading text="First Name" className="mb-2.5"/>
          <input type="text" placeholder='First Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
         </div>
         <div>
          <PortionHeading text="Last Name" className="mb-2.5"/>
          <input type="text" placeholder='Last Name' className='border-b border-solid border-ash0 w-507
          placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4' />
         </div>
        </Flex>
        <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Email address" className="mb-2.5"/>
        <input type="text" placeholder='company@domain.com' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Telephone" className="mb-2.5"/>
        <input type="text" placeholder='Your phone number' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        </Flex>
        <div className='w-full bg-ash0 mt-16 h-[1px]'></div>
        <SubHeading text="New Customer" className="mb-10 mt-14"/>
        <Flex>
        <div>
        <PortionHeading text="Address 1" className="mb-2.5"/>
        <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Address 2" className="mb-2.5"/>
        <input type="text" placeholder='—' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        </Flex>
        <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="City" className="mb-2.5"/>
        <input type="text" placeholder='Your city' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Post Code" className="mb-2.5"/>
        <input type="text" placeholder='05228' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>
       <Flex className='gap-x-10 mt-6'>
        <div>
        <PortionHeading text='Country' className='mb-2.5'/>
        <select className='border-b border-solid border-ash0 w-507 pb-4'>
          <option value="">Please Select</option>
        </select>
        </div>
       </Flex>
       <div className='w-full h-[1px] bg-ash0 mt-16'></div>
       <SubHeading text="Your Password" className="mb-10 mt-14"/>
       <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Password" className="mb-2.5"/>
        <input type="text" placeholder='Password' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <div>
        <PortionHeading text="Repeat Password" className="mb-2.5"/>
        <input type="text" placeholder='Repeat Password' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>
       <div className='w-full h-[1px] bg-ash0 mt-16'></div>
       <div className='mt-16 mb-36'>
        <input type="radio" />
         <label htmlFor="" className='ml-5 font-dm font-normal text-xs'>I have read and agree to the Privacy Policy</label>
         
         <div>
        <label htmlFor="" className='font-dm font-normal text-xs mr-8'>Subscribe Newsletter</label>
        <input type="radio" />
        <label htmlFor="" className='font-dm font-normal text-xs mr-10'>Yes</label>
        <input type="radio" />
        <label htmlFor="" className='font-dm font-normal text-xs '>No</label>
       </div>
       <Button text="Log in" className="mt-6" />  
       </div>
       
    </Container>
  )
}

export default Signup