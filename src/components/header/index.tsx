import Button from "./Button"
import Logo from "./Logo"
import Navbar from "./Navbar"

function Header() {
    return (
        <div className="flex justify-between items-center bg-primary px-20 pt-6">
            <Logo />
            <Navbar />
            <Button />

        </div>
    )
}

export default Header
