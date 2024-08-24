import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex gap-[30px] list-none text-white/60">
            <Link to="/">Home</Link>
            <Link to="/courses">Course</Link>
            <Link to="/subscribe">Subscribe</Link>
            <Link to="/about">About</Link>
            <Link to="/testimoni">Testimoni</Link>
        </nav>
    )
}

export default Navbar
