import data from '../../assets/data/subscribe.json'
import bg from '../../assets/image/discount_bg.png'
import boy1 from '../../assets/image/boy1.png'

interface Props {
    className: string
}

function Text({ className }: Props) {
    return (
        <div className={className}>
            <h2 className="text-text-100 font-semibold text-4xl w-[586px] leading-normal">
                {data.title[0]}
                <span className="text-secondary font-semibold text-4xl">
                    {data.title[1]}
                </span>
                {data.title[2]}
            </h2>
            <button className="bg-primary px-[25px] py-[15px] mt-7 font-bold text-lg rounded text-white">
                {data.button}
            </button>
        </div>
    )
}

function Subscribe() {
    return (
        <div className="relative">
            <div className="mx-20 relative mt-[190px]">
                <img src={bg} className="relative" />
                <img src={boy1} className=" z-10 absolute bottom-0 right-28" />
            </div>
            <Text className="absolute top-10 left-36" />
        </div>
    )
}

export default Subscribe
