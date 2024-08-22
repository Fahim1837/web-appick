import hero from '../../assets/data/hero.json'
import line from '../../assets/svg/line.svg'
import up_right from '../../assets/svg/up_right.svg'
import instagram from '../../assets/svg/instagram.svg'
import twitter from '../../assets/svg/twitter.svg'
import discord from '../../assets/svg/discord.svg'

function Left() {
    return (
        <div className='pt-12 pl-20 pb-[86px]'>
            <div className='relative w-[630px]'>
                <h2 className='font-weight text-6xl text-white leading-normal'>
                    {hero[0].title}
                </h2>
                <img src={line} className='absolute top-[85px] right-[180px]' />
            </div>

            <div className='w-[527px] mt-2.5'>
                <p className='text-white/60 leading-9 mr-20'>
                    {hero[0].subtitle}
                </p>
            </div>

            <div className='flex mt-8 gap-5'>
                <div>
                    <button className='flex text-xl font-bold text-white py-3 pl-6 pr-5 gap-4 bg-secondary items-center'>
                        <p>{hero[0].button}</p>
                        <img src= {up_right} />
                    </button>
                </div>
                <div className='flex gap-[15px] items-center'>
                    <img src= {instagram}/>
                    <img src= {twitter}/>
                    <img src= {discord}/>
                </div>
            </div>
        </div>
    )
}

export default Left