import foody from '../assets/images/foody.png'
import cartIcon from '../assets/icons/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <nav id='header' className='bg-indigo-700 text-white'>
    <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>
        <div className='logo-wrapper pl-4 flex items-center'>
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
        <img src={foody} alt="logo" className='w-40 h-40 object-cover ' />
        </Link>
        </div>
        <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
        </div>
        <div className='flex items-center justify-center space-x-4'>
            <Link to="/cart">
              <img src={cartIcon} alt="" />
            </Link>
            <Link to="/login">Login In</Link>
            <Link to="/register">Sign Up</Link>
        </div>
    </div>
   </nav>
  )
}

export default Header