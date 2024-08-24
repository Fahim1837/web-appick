import Review from './Review'
import left from '../../assets/svg/arrow_left2.svg'
import right from '../../assets/svg/arrow_right2.svg'

const data = {
    title: ['What do they ', 'say?'],
    subtitle: 'This is an honest review from members who have joined us',
}

function Testimoni() {
    return (
        <div className="py-[87px] px-20">
            <div className="text-center">
                <h3 className="font-semibold leading-normal text-4xl text-text-100">
                    {data.title[0]}
                    <span className="text-secondary font-semibold leading-normal text-4xl">
                        {data.title[1]}
                    </span>
                </h3>
                <p className="leading-9 text-text-50 mx-auto">
                    {data.subtitle}
                </p>
            </div>

            <div className="my-[50px]">
                <Review />
            </div>
            <div className="flex justify-center">
                <button>
                    <img src={left} />
                </button>
                <button>
                    <img src={right} />
                </button>
            </div>
        </div>
    )
}

export default Testimoni
