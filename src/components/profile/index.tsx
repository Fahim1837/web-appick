import Left from './Left'
import Right from './Right'

function Profile() {
    return (
        <div className="mt-[100px] mr-[110px] mb-[90px] ml-[80px] flex justify-between gap-[170px] sm:flex-col sm:mx-11 sm:mt-[50px] sm:gap-[50px]">
            <Left />
            <Right />
        </div>
    )
}

export default Profile
