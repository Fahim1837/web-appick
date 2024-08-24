import tutor1 from '../../assets/image/tutor_1.png'
import tutor2 from '../../assets/image/tutor_2.png'
import tutor3 from '../../assets/image/tutor_3.png'
import blank_pic from '../../assets/image/blank_profile.png'
import video1 from '../../assets/image/video_1.png'
import video2 from '../../assets/image/video_2.png'
import video3 from '../../assets/image/video_3.png'
import Card from './Card'

const data = [
    {
        pic: video1,
        title: 'Basics of learning team management',
        teacher: {
            name: 'Jone Owel',
            designation: 'IT Manager',
            pic: tutor1
        },
        student: {
            num: '120',
            sub: 'Participant',
            pic: blank_pic
        },
        cost: '$120',
        per: '/25 Video'
    },
    {
        pic: video2,
        title: 'Learn basic database structure',
        teacher: {
            name: 'Roynaldo Jr',
            designation: 'data Science',
            pic: tutor2
        },
        student: {
            num: '55',
            sub: 'Participant',
            pic: blank_pic
        },
        cost: '$180',
        per: '/20 Video'
    },
    {
        pic: video3,
        title: 'Create dynamic website with basic php',
        teacher: {
            name: 'Markus Low',
            designation: 'Programmer',
            pic: tutor3
        },
        student: {
            num: '98',
            sub: 'Participant',
            pic: blank_pic
        },
        cost: '$135',
        per: '/20 Video'
    }
]
function CardGroup() {
  return (
    <div className='flex gap-5'>
        {data.map((item, index) => (
            <Card key={index} {...item}/>
        ))}
    </div>
  )
}

export default CardGroup