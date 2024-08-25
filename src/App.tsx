import { Route, Routes } from 'react-router-dom'
import Header from './components/header'

import Home from './pages/Home'

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
