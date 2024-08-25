import useWindowDimensions from '../../hooks/useWindowDimension'
import Button1, { Button2 } from './Button'
import Logo from './Logo'
import Navbar from './Navbar'

function Header() {
    const isMobile = useWindowDimensions()

    return (
        <div className="flex justify-between items-center bg-primary px-20 pt-6 sm:px-11">
            <Logo />
            {!isMobile && <Navbar />}
            {!isMobile && <Button1 />}
            {isMobile && <Button2 />}
        </div>
    )
}

export default Header
