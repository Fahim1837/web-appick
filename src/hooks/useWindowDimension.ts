import { useState, useEffect } from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    const handleResize = () => setWindowDimensions(getWindowDimensions())

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const isMobile = windowDimensions.width <= 450 ? true : false
    return isMobile
}


export default useWindowDimensions
