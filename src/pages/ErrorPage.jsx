
import Image from '../components/Image'
import Error from '../assets/error.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const ErrorPage = () => {
  return (
  <section className='py-20'>
      <Container>
        <Image src={Error}/>
        <p className='font-dm dont-normal text-base max-w-644 my-16'>The page you were looking for couldnot be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className='max-w-644 relative border border-solid border-black'>
                <input type="text" className='w-full py-4 px-5' placeholder='search Products' />
                <AiOutlineSearch className='absolute top-1/2 right-4 -translate-y-1/2'/>                
              </div>
              <Link to='/'><Button className='mt-16' text='Back To Home'/></Link>
    </Container>
  </section>
  )
}

export default ErrorPage