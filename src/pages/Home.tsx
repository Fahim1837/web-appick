import About from '../components/about'
import Hero from '../components/hero'
import Join from '../components/join'
import Media from '../components/media'
import Price from '../components/price'
import Product from '../components/product'
import Profile from '../components/profile'
import Subscribe from '../components/subscribe'
import Testimoni from '../components/testimony'
import useWindowDimensions from '../hooks/useWindowDimension'

function Home() {
    const isMobile = useWindowDimensions()
    return (
        <div>
            <Hero />
            <Media />
            {!isMobile && <Subscribe />}
            <Profile />
            {!isMobile && <Product />}
            <About />
            <Join />
            <Price />
            <Testimoni />
        </div>
    )
}

export default Home
