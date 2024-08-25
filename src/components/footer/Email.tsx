const email = {
    title: 'Subscribe to get notified about update',
    subtitle:
        'By subscribing with your mail, you will accept our privacy policy',
    input: 'Enter your email',
    button: 'Subscribe us',
}

function Email() {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-white text-4xl sm:text-lg">
                    {email.title}
                </h2>
                <p className="text-white leading-9 sm:text-xs sm:leading-7 sm:mt-5">{email.subtitle}</p>
            </div>
            <div className="mt-15 flex gap-[15px] justify-center sm:flex-col sm:gap-5 sm:mt-[50px] sm:items-center">
                <input
                    type="text"
                    placeholder={email.input}
                    className="py-[5px] pl-[30px] w-[380px] rounded-md bg-white/[8%] text-white leading-[50px] outline-none sm:w-[300px]"
                />
                <button className="py-[5px] px-[25px] bg-secondary text-white leading-[50px] tracking-tighter rounded sm:w-max">
                    {email.button}
                </button>
            </div>
        </div>
    )
}

export default Email
