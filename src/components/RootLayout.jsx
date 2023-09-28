
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import SearchBar from './layouts/SearchBar'
import Footer from './layouts/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <SearchBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout