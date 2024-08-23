import hero from '../../assets/data/hero.json'
import lady3 from '../../assets/image/lady3.png'
import profile1 from '../../assets/image/profile1.png'

function ActionButton() {
    return (
        <div className=" flex flex-col justify-center bg-white/75 rounded-xl">
            <div className="px-4 py-3">
                <div className="flex gap-2 items-center">
                    <img src={profile1} />
                    <div>
                        <h3 className="font-semibold text-xs">
                            {hero[1].title}
                        </h3>
                        <p className="text-[10px]">{hero[1].subtitle}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-1.5">
                    <button className="bg-[#FF4F8E] px-6 py-1.5 rounded-md font-semibold text-xs text-white">
                        Join Now
                    </button>
                </div>
            </div>

            <div></div>
        </div>
    )
}

function Right() {
    return (
        <div className="pt-16 pl-24 pr-[124px]">
            <div className="pl-[100px] absolute">
                <img src={lady3} className="relative bottom-0" />
            </div>

            {/* JOIN NOW MODAL */}
            <div className="relative left-0 top-[200px] z-10">
                <ActionButton />
            </div>
        </div>
    )
}

export default Right
