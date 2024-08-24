import cube from '../../assets/svg/cube.svg'
import ornamen from '../../assets/svg/ornamen.svg'
import CardGroup from './CardGroup'

const data = {
    title: 'Popular courses of the week',
    subtitle:
        'List of the most popular lists that are often studied by our members',
}

function Product() {
    return (
        <div className="bg-primary">
            <div className="pt-[75px] pb-[50px] text-center">
                <h3 className="font-semibold leading-normal text-4xl text-white">
                    {data.title}
                </h3>
                <p className="leading-9 text-white/60 w-[347px] mx-auto">
                    {data.subtitle}
                </p>
            </div>
            <div></div>
            <div>
                <img src={cube} alt="Cube" />
                <img src={ornamen} alt="Ornamen" />
            </div>
            <div className='px-20 pt-[50px] pb-[75px]'>
                <CardGroup />
            </div>
        </div>
    )
}

export default Product
