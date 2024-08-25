import lady2 from '../../assets/image/lady2.png'
import useWindowDimensions from '../../hooks/useWindowDimension'
import Right, { Right2 } from './Right'

function About() {
    const isMobile = useWindowDimensions()
    return (
        <div>
            {!isMobile && <div className="my-25 ml-[123px] mr-[175px] gap-[150px] flex">
                <img src={lady2} alt="Skill Shoot" />
                <Right />
            </div>}
            {isMobile && <Right2 />}
        </div>
    )
}

export default About
