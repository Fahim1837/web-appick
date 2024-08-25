import { Route, Routes } from 'react-router-dom'
import Header from './components/header'

import Home from './pages/Home'
import Courses from './pages/Courses'
import Register from './pages/Register'
import Testimoni from './pages/Testimoni'
import About from './pages/About'
import Subscribe from './pages/Subscribe'

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/register" element={<Register />} />
                <Route path="/testimoni" element={<Testimoni />} />
                <Route path="/about" element={<About />} />
                <Route path="/subscribe" element={<Subscribe />} />
            </Routes>
        </div>
    )
}

export default App
