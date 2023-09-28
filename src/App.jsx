// import Logo from "../src/assets/Logo.png"
// import Image from "./components/Image"
// import List from "./components/List"
// import Facility from "./components/Facility"
// import SubHeading from "./components/SubHeading"
// import PortionHeading from "./components/PortionHeading"
// import Button from "./components/Button"
import Product from "./components/Product"
// import PrevArrow from "./components/PrevArrow"
// import NextArrow from "./components/NextArrow"

import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider,} from "react-router-dom";

import RootLayout from "./components/RootLayout"
import ErrorPage from "./pages/ErrorPage"
// import Input from "./components/Input"
import Signup from "./pages/Signup"

import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter(
  createRoutesFromElements(
 <Route path="/" element={<RootLayout />}>
  <Route
      path="/login"
      element={<LoginPage />}      
     > </Route>
     <Route
      path="/"
      element={<HomePage />}      
     > </Route>
     <Route
      path="/shop"
      element={<Product />}      
     > </Route>
     <Route
      path="/sign-up"
      element={<Signup />}      
     > </Route>
     <Route
      path="/contacts"
      element={<ContactPage />}      
     > </Route>
     
     <Route
      path="*"
      element={<ErrorPage />}      
     > </Route>
 </Route>
     
  )
);



function App() {
  // const settings = {
  //   arrows:true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />
  // };

  return (
    <>
      {/* <h1 className="bg-red-500">mern 2204</h1>
      <List text='list item'/>
      <Image src={Logo} />
      <Facility />
      <SubHeading text='subheading'className='text-49'/>
      <PortionHeading text='PortionHeading' className='text-39'/>
      <Button text='add to cart' className='hover:bg-black'/>
      <div className="w-96">
      <Product heading='Basic Crew Neck Tee' />
      </div>
      <Slider {...settings}>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
          <div>
          <Product heading='Basic Crew Neck Tee' />
          </div>
        </Slider> */}
        {/* <Input placeholder='ami tmi' type='text' title='First Name'/> */}
        
        <RouterProvider  router={router}/>
    </>
  )
}

export default App
