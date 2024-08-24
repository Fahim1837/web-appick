import reviewer1 from '../../assets/image/reviewer_1.png'
import reviewer2 from '../../assets/image/reviewer_2.png'
import reviewer3 from '../../assets/image/reviewer_3.png'
import star from '../../assets/svg/star.svg'

const data = [
    {
        pic: reviewer1,
        star: star,
        name: 'Jason Bay',
        desc: 'I am quite satisfied, because the skills I want or dream of can really be mastered'
    },
    {
        pic: reviewer2,
        star: star,
        name: 'Nany Brugman',
        desc: 'I am quite satisfied, because the skills I want or dream of can really be mastered'
    },
    {
        pic: reviewer3,
        star: star,
        name: 'Alexa Nowan',
        desc: 'I am quite satisfied, because the skills I want or dream of can really be mastered'
    },
]

interface Props {
    pic: string,
    star: string,
    name: string,
    desc: string
}

function Card ({pic, star, name, desc}:Props) {
    return (
        <div className='flex flex-col px-12 pt-12 pb-4'>
            <div className='flex flex-col items-center gap-4'>
                <img src={pic} alt="Profile" className='w-[75px] h-[75px]' />
                <img src={star} alt="Ratings" />
            </div>
            <div className='flex flex-col text-center mt-6 gap-2.5'>
                <h3 className='text-2xl text-text-100'>{name}</h3>
                <p className='leading-9 text-text-50'>{desc}</p>
            </div>
        </div>
    )
}

function Review() {
  return (
    <div className='flex gap-5'>
        {data.map ((item, index) => (
            <Card key={index} {...item}/>
        ))}
    </div>
  )
}

export default Review