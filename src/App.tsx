import About from './components/about'
import Header from './components/header'
import Hero from './components/hero'
import Join from './components/join'
import Media from './components/media'
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
            <div className="mb-56" />
        </div>
    )
}

export default App
