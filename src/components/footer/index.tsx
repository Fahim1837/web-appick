import Logo from '../header/Logo'
import Navbar from '../header/Navbar'
import Email from './Email'
import curve1 from '../../assets/svg/curve1.svg'
import curve2 from '../../assets/svg/curve2.svg'

function Footer() {
    return (
        <div className="bg-primary  px-20 pt-[118px] pb-10 sm:pt-25 sm:pl-12 sm:pb-12 ">
            <Email />
            <div className='relative'>
                <img src={curve1} className='absolute bottom-0  sm:left-[-40px] sm:top-[100px]' />
                <img src={curve2} className='absolute right-20 bottom-10 sm:top-0 sm:bottom-0 sm:right-[-30px]' />
            </div>
            <div className="mt-[150px] flex justify-between items-center sm:flex-col-reverse sm:gap-[50px] sm:mt-[50px]">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}

export default Footer
