import media from '../../assets/data/media.json'
import uber from '../../assets/image/uber.png'
import google from '../../assets/image/google.png'
import paypal from '../../assets/image/paypal.png'
import microsoft from '../../assets/image/microsoft.png'
import dribble from '../../assets/image/dribble.png'

function Media() {
    return (
        <div className="mt-[100px] mx-[200px] mb-[54px] flex flex-col justify-center sm:m-[50px]">
            <h2 className="m-auto text-text-100 w-auto font-semibold text-4xl sm:text-lg">
                {media.title[0]}
                <span className="text-secondary w-auto font-semibold text-4xl sm:text-lg">
                    {media.title[1]}
                </span>
                {media.title[2]}
            </h2>
            <p className="w-[545px] text-text-50 m-auto leading-9 text-center mt-2.5 mb-[50px] sm:mb-5 sm:w-full sm:leading-7">
                {media.subtitle}
            </p>
            <div className="flex justify-between items-center sm:grid sm:grid-cols-2 sm:gap-x-[90px] sm:gap-y-5 place-items-center ">
                <img src={uber} className="h-6 " />
                <img src={google} />
                <img src={paypal} />
                <img src={microsoft} />
                <img src={dribble} className='col-span-2'/>
            </div>
        </div>
    )
}

export default Media
