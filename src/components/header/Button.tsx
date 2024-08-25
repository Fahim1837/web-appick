import { Link, useNavigate } from 'react-router-dom'
import menu from '../../assets/svg/menu_bar.svg'
import Navbar from './Navbar'
import { useState } from 'react'
function Button1() {
    const navigate = useNavigate()
    return (
        <nav className="flex gap-[20px] list-none items-center text-white">
            <li>Login</li>
            <button className="bg-secondary px-11 py-2 rounded-lg" onClick={() => navigate('/register')}>
                Register
            </button>
        </nav>
    )
}

export function Button2() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='relative'>
            <button className="py-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
                <img src={menu} alt="Menu" />
            </button>
            {isOpen && (<div
                className='bg-white z-10 absolute top-10 right-1'
                onClick={() => setIsOpen(!isOpen)}
            >
                <nav className="flex gap-[30px] list-none  sm:flex-col sm:gap-2.5 sm:leading-7 sm:text-xs sm:p-3">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/subscribe">Subscribe</Link>
                    <Link to="/about">About</Link>
                    <Link to="/testimoni">Testimoni</Link>
                </nav>
                <button className="bg-secondary px-11 py-2 rounded-lg mb-2 mx-1" onClick={() => navigate('/register')}>
                    Register
                </button>
            </div>)}
        </div>
    )
}

export default Button1
