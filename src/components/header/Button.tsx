import { useNavigate } from 'react-router-dom'
import menu from '../../assets/svg/menu_bar.svg'
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
    const navigate = useNavigate()
    return (
            <button className="py-2 rounded-lg" onClick={() => navigate('/register')}>
                <img src= {menu} alt="Menu" />
            </button>
    )
}

export default Button1
