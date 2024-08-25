import hero from '../../assets/data/hero.json'
import line from '../../assets/svg/line.svg'
import line3 from '../../assets/svg/line3.svg'
import up_right from '../../assets/svg/up_right.svg'
import instagram from '../../assets/svg/instagram.svg'
import twitter from '../../assets/svg/twitter.svg'
import discord from '../../assets/svg/discord.svg'
import useWindowDimensions from '../../hooks/useWindowDimension'

function Left() {
    const isMobile = useWindowDimensions()
    return (
        <div className="pt-12 pl-20 pb-[86px] sm:px-11">
            <div className="relative w-[630px] sm:w-[340px]">
                <h2 className="font-semibold text-6xl text-white leading-normal
                                sm:text-3xl sm:text-center sm:mx-auto"
                 >
                    {hero[0].title}
                </h2>
                {!isMobile && <img src={line} className="absolute top-[85px] right-[180px] " />}
                {isMobile && <img src={line3} className="absolute top-[35px] right-[60px] " />}
            </div>

            <div className="w-[527px] mt-2.5 text-center sm:w-[340px] sm:mx-auto">
                <p className="text-white/60 leading-9 mr-20 sm:mr-0">
                    {hero[0].subtitle}
                </p>
            </div>

            <div className="flex mt-8 gap-5 sm:flex-col sm:items-center">
                <div>
                    <button className="flex text-xl font-bold text-white py-3 pl-6 pr-5 gap-4 bg-secondary items-center">
                        <p>{hero[0].button}</p>
                        <img src={up_right} />
                    </button>
                </div>
                <div className="flex gap-[15px] items-center">
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={discord} />
                </div>
            </div>
        </div>
    )
}

export default Left
