import curve1 from '../../assets/svg/circle.svg'
import curve2 from '../../assets/svg/cube.svg'


function Text() {
    return (
        <div className="flex justify-between items-center  ">
                <div className="">
                    <h2 className="text-text-100 text-4xl font-semibold leading-normal">
                        <span className="text-secondary text-4xl font-semibold leading-normal">Improve </span>
                        your skills, and reach your career as soon as possible
                    </h2>
                </div>
                <div className="flex gap-5 h-full w-3/4 justify-end">
                    <button className="bg-secondary font-bold text-white leading-normal text-lg px-[25px] py-[15px] rounded">Join Now</button>
                    <button className="bg-primary font-bold text-white leading-normal text-lg px-[25px] py-[15px] rounded">Subscribe Course</button>
                </div>
            </div>
    )
}

function Join() {
    return (
        <div className='bg-text-0 mx-20 py-[70px] px-[67px] rounded-2xl relative'>
            <Text/>
            <div>
                <img src={curve1} alt="Circle" className='absolute top-0 left-0' />
                <img src={curve2} alt="Cube" className='absolute bottom-[-20px] right-[40%]' />
            </div>
        </div>
    )
}

export default Join
