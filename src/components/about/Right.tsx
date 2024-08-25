import icon1 from '../../assets/image/icon1.png'
import icon2 from '../../assets/image/icon2.png'
import icon3 from '../../assets/image/icon3.png'
import icon4 from '../../assets/image/icon4.png'
import line from '../../assets/svg/line2.svg'
import line2 from '../../assets/svg/line3.svg'

interface Props {
    icon: string
    text: string
}

const data = {
    title: ['Let us ', 'Skill Shoot'],
    curve: line,
    curve2: line2,
    para1: 'We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.',
    para2: 'we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.',
    card: [
        {
            icon: icon1,
            text: '15K People Join',
        },
        {
            icon: icon2,
            text: 'Trusted Mentor',
        },
        {
            icon: icon3,
            text: '30+ Free Videos',
        },
        {
            icon: icon4,
            text: '100+ Premium Videos',
        },
    ],
}

function Card({ icon, text }: Props) {
    return (
        <div className='flex gap-1.5 items-center'>
            <img src={icon} alt="icons" className='sm:w-[30px] sm:h-[30px]' />
            <h3 className='font-semibold leading-9 text-sm text-text-100'>{text}</h3>
        </div>
    )
}

function Right() {
    return (
        <div className="relative w-[630px] mt-12">
            {/* HEADING WITH CURVE */}
            <div>
                <h2 className="font-bold text-5xl text-text-100 leading-normal">
                    {data.title[0]}
                    <span className="font-bold text-5xl text-primary">
                        {data.title[1]}
                    </span>
                </h2>
                <img
                    src={data.curve}
                    className="absolute top-[60px] right-[40px]"
                />
                <p className="mt-9">{data.para1}</p>
                <p className="mt-6">{data.para2}</p>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-y-[30px]">
                {data.card.map((item, index) => (
                    <Card key={index} icon={item.icon} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export function Right2 () {
    return (
        <div className='my-[50px] ml-11'>
            
            {/* HEADING WITH CURVE */}
            <div className='relative'>
                <h2 className='font-bold text-text-100 text-xl'>
                    {data.title[0]}
                    <span className='font-bold text-primary text-xl'>{data.title[1]}</span>
                </h2>
                <img src={data.curve2} className='absolute left-16 top-6' />
            </div>

            {/* PARAGRAPH */}
            <div className='mt-5 text-text-50'>
                <p className='leading-7 text-xs'>{data.para1}</p>
                <p className='leading-7 text-xs mt-[10px]'>{data.para2}</p>
            </div>

            {/* CARDS */}
            <div className="mt-7 grid grid-cols-2 gap-x-11 gap-y-5">
                {data.card.map((item, index) => (
                    <Card key={index} icon={item.icon} text={item.text} />
                ))}
            </div>
        </div>
    )
}


export default Right
