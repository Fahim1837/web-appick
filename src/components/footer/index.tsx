import Logo from '../header/Logo'
import Navbar from '../header/Navbar'
import Email from './Email'
import curve1 from '../../assets/svg/curve1.svg'
import curve2 from '../../assets/svg/curve2.svg'

function Footer() {
    return (
        <div className="bg-primary  px-20 pt-[118px] pb-10">
            <Email />
            <div className='relative'>
                <img src={curve1} className='absolute bottom-0' />
                <img src={curve2} className='absolute right-20 bottom-10' />
            </div>
            <div className="mt-[150px] flex justify-between items-center">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}

export default Footer
