import play from '../../assets/svg/play_button.svg'
import pause from '../../assets/svg/pause_button.svg'
import { useState } from 'react'


interface Props {
    pic: string, 
    title: string,
    teacher: {
        name: string,
        designation: string,
        pic: string,
    },
    student: {
        num: string,
        sub: string,
        pic: string,
    },
    cost: string,
    per: string,
}

function Card(card: Props) {
    const [isPlay, setIsPlay] = useState (true)
    return (
        <div className="rounded-2xl bg-white w-[413px]">
            <div className='relative'>
                <img src={card.pic} alt="Video" />
                <img 
                src={isPlay ? play : pause} 
                className='absolute top-[40%] left-[40%] cursor-pointer'
                onClick={() => setIsPlay (!isPlay)}
                />
                
            </div>

            {/* TEXT DIV */}
            <div className='pl-7 pr-5 pt-7 pb-10'>
                <h2 className='font-semibold text-2xl text-text-100'>
                    {card.title}
                </h2>

                {/* TUTOR & STUDENT DIV */}
                <div className='flex mt-5 pr-[50px] justify-between'>

                    {/* TUTOR DIV */}
                    <div className="flex gap-[10px]">
                        <img src={card.teacher.pic} alt="Profile" />
                        <div>
                            <h4 className="font-semibold text-lg leading-9 text-text-100">
                                {card.teacher.name}
                            </h4>
                            <p className="text-xs leading-3 text-text-50">
                                {card.teacher.designation}
                            </p>
                        </div>
                    </div>

                    {/* STUDENT DIV */}
                    <div className="flex gap-1 items-center">
                        <img src={card.student.pic} alt="Profile" />
                        <div>
                            <h4 className="font-semibold text-lg leading-9 text-text-100">
                                {card.student.num}
                            </h4>
                            <p className="text-xs leading-3 text-text-50">
                                {card.student.sub}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BUTTON  */}
            <div className='flex justify-between items-center pl-[30px] pr-9 pb-[18px]'>
                <button className='font-semibold text-xs leading-7 text-white bg-primary rounded-[10px] py-3 px-6'>
                    Buy Now
                </button>
                <h3 className='font-semibold text-2xl text-text-100'>
                    {card.cost}
                    <span className='text-xs leading-7 text-text-50'>{card.per}</span>
                </h3>
            </div>
        </div>
    )
}

export default Card
