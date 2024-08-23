import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Join from './components/join'
import Media from './components/media'
import Price from './components/price'
import Profile from './components/profile'
import Subscribe from './components/subscribe'

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Media />
            <Subscribe />
            <Profile />
            <About />
            <Join />
            <Price />
            <Footer />
        </div>
    )
}

export default App
