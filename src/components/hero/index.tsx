import useWindowDimensions from '../../hooks/useWindowDimension'
import Left from './Left'
import Right from './Right'

function Hero() {
    const isMobile = useWindowDimensions()
    return (
        <div className="flex bg-primary sm:text-center">
            <Left />
            {!isMobile && <Right />}
        </div>
    )
}

export default Hero
