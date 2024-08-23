import icon1 from '../../assets/image/icon1.png'
import icon2 from '../../assets/image/icon2.png'
import icon3 from '../../assets/image/icon3.png'
import icon4 from '../../assets/image/icon4.png'
import line from '../../assets/svg/line2.svg'

interface Props {
    icon: string
    text: string
}

const about = {
    title: ['Let us ', 'Skill Shoot'],
    curve: line,
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
        <div>
            <img src={icon} alt="icons" />
            <h3>{text}</h3>
        </div>
    )
}

function Right() {
    return (
        <div className="relative w-[630px] mt-12">
            {/* HEADING WITH CURVE */}
            <div>
                <h2 className="font-bold text-5xl text-text-100 leading-normal">
                    {about.title[0]}
                    <span className="font-bold text-5xl text-primary">
                        {about.title[1]}
                    </span>
                </h2>
                <img
                    src={about.curve}
                    className="absolute top-[60px] right-[40px]"
                />
                <p className="mt-9">{about.para1}</p>
                <p className="mt-6">{about.para2}</p>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-x-[106px] gap-y-[30px]">
                {about.card.map((item, index) => (
                    <Card key={index} icon={item.icon} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export default Right
