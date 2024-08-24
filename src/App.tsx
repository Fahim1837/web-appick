import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'

import Home from './pages/Home'

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
