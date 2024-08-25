import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex gap-[30px] list-none text-white/60 sm:flex-col sm:gap-2.5 sm:leading-7 sm:text-xs">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/subscribe">Subscribe</Link>
            <Link to="/about">About</Link>
            <Link to="/testimoni">Testimoni</Link>
        </nav>
    )
}

export default Navbar
