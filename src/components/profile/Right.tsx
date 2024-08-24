import shape1 from '../../assets/svg/shape1.svg'
import shape2 from '../../assets/svg/shape2.svg'
import shape3 from '../../assets/svg/shape3.svg'
import shape4 from '../../assets/svg/shape4.svg'

interface Props {
    title: string
    icon: string
    subtitle: string
}

const material = [
    {
        title: 'Material Limitations',
        icon: shape1,
        subtitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Unprofessional Mentor',
        icon: shape2,
        subtitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'Video Quality',
        icon: shape3,
        subtitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        title: 'High Price',
        icon: shape4,
        subtitle:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
]

function Material({ icon, title, subtitle }: Props) {
    return (
        <div>
            <img src={icon} alt="Icon" />
            <div className="mt-[30px]">
                <h3 className="text-text-100 font-semibold text-2xl w-max">
                    {title}
                </h3>
                <p className="text-text-50 leading-7">{subtitle}</p>
            </div>
        </div>
    )
}

function Right() {
    return (
        <div className="grid grid-cols-2 gap-y-15 gap-x-14">
            {material.map((item, index) => (
                <div key={index}>
                    <Material
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                </div>
            ))}
        </div>
    )
}

export default Right
