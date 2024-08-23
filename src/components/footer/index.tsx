import Logo from '../header/Logo'
import Navbar from '../header/Navbar'
import Email from './Email'

function Footer() {
    return (
        <div className="bg-primary  px-20 pt-[118px] pb-10">
            <Email />
            <div className="mt-[150px] flex justify-between items-center">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}

export default Footer
