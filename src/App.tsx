import Header from './components/header'
import useWindowDimensions from './hooks/useWindowDimension'

function App() {
    // console.log(window)
    // console.log(window.innerHeight, window.innerWidth)
    // console.log(window.location)
    // console.log(window.screen)
    const { width, height } = useWindowDimensions()
    console.log(width, height)
    return (
        <div className="app">
            Hello World
            {width < 600 && <h1>Hello Dear</h1>}
            <Header />
        </div>
    )
}

export default App
