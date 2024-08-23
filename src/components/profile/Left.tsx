import profile2 from '../../assets/image/profile2.png'
const profile = {
    title: ['Why do we ', 'exist? '],
    subtitle:
        'Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills',
    card: {
        name: 'Jerony Pulquosta',
        bio: 'CEO Skill Shoot',
        pic: profile2,
    },
    summary: [
        {
            num: '100+',
            sub: 'Updated Material',
        },
        {
            num: '15K',
            sub: 'Member Join',
        },
    ],
}
function Summary() {
    return (
        <div className="flex gap-16">
            {profile.summary.map((item) => (
                <div>
                    <h4 className="font-bold text-3xl text-text-100 leading-normal">
                        {item.num}
                    </h4>
                    <p className="text-xs leading-7 text-text-50">{item.sub}</p>
                </div>
            ))}
        </div>
    )
}

function Card() {
    return (
        <div className="flex gap-3">
            <img src={profile.card.pic} alt="Profile" />
            <div>
                <h4 className="font-semibold text-lg leading-9 text-text-100">
                    {profile.card.name}
                </h4>
                <p className="text-xs leading-3 text-text-50">
                    {profile.card.bio}
                </p>
            </div>
        </div>
    )
}
function Left() {
    return (
        <div>
            <div className="mb-[30px]">
                <h2 className="font-semibold text-4xl text-text-100 mb-5">
                    {profile.title[0]}
                    <span className="font-semibold text-4xl text-secondary">
                        {profile.title[1]}
                    </span>
                </h2>
                <p className="text-text-50 w-[434px]">{profile.subtitle}</p>
            </div>

            <Card />
            <hr className="w-10/12 border-text-100/20 my-7" />
            <Summary />
        </div>
    )
}

export default Left
