const data = {
    title: ['Subscribe ', 'with us now'],
    subtitle:
        'by subscribing now you will be able to access the material easily and cheaply, so you will be very efficient and benefit',
}

function Text() {
    return (
        <div>
            <h2 className="text-text-100 font-semibold text-4xl text-center sm:text-lg">
                <span className="text-secondary font-semibold text-4xl text-center sm:text-lg">
                    {data.title[0]}
                </span>
                {data.title[1]}
            </h2>
            <p className="text-text-50 w-[545px] text-center leading-9 m-auto sm:text-xs sm:leading-7 sm:w-[300px] sm:mt-5">
                {data.subtitle}
            </p>
        </div>
    )
}

export default Text
