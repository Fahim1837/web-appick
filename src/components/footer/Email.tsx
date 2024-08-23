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
                <h2 className="text-white text-4xl leading-normal">
                    {email.title}
                </h2>
                <p className="text-white leading-9">{email.subtitle}</p>
            </div>
            <div className="mt-15 flex gap-[15px] justify-center ">
                <input
                    type="text"
                    placeholder={email.input}
                    className="py-[5px] pl-[30px] w-[380px] rounded-md bg-white/[8%] text-white leading-[50px] outline-none"
                />
                <button className="py-[5px] px-[25px] bg-secondary text-white leading-[50px] tracking-tighter rounded">
                    {email.button}
                </button>
            </div>
        </div>
    )
}

export default Email
