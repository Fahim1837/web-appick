import check1 from '../../assets/svg/check1.svg'
import check2 from '../../assets/svg/check2.svg'

interface Props {
    icon: string
    text: string
}

const data = [
    {
        price: '$50 ',
        time: '/ 1 month',
        popularity: undefined,
        cat: 'Base',
        sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        listing: [
            {
                icon: check2,
                text: 'Access all videos',
            },
            {
                icon: check2,
                text: 'Get Certificate',
            },
            {
                icon: check2,
                text: 'Chat support',
            },
            {
                icon: check2,
                text: 'Update Notification',
            },
            {
                icon: check2,
                text: 'Download material',
            },

        ]
    },
    {
        price: '$100 ',
        time: '/ 6 month',
        popularity: 'MOST POPULAR',
        cat: 'Pro',
        sub: 'Lorem Ipsum is simply dummy text of the printing ',
        listing: [
            {
                icon: check1,
                text: 'Access all videos',
            },
            {
                icon: check1,
                text: 'Get Certificate',
            },
            {
                icon: check1,
                text: 'Chat support',
            },
            {
                icon: check1,
                text: 'Update Notification',
            },
            {
                icon: check1,
                text: 'Download material',
            },

        ]
    },
    {
        price: '$200 ',
        time: '/ 12 month',
        popularity: undefined,
        cat: 'Enterprise',
        sub: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        listing: [
            {
                icon: check2,
                text: 'Access all videos',
            },
            {
                icon: check2,
                text: 'Get Certificate',
            },
            {
                icon: check2,
                text: 'Chat support',
            },
            {
                icon: check2,
                text: 'Update Notification',
            },
            {
                icon: check2,
                text: 'Download material',
            },

        ]
    }
]

function Checks({ icon, text }: Props) {
    return (
        <div className='flex gap-1'>
            <img src={icon} />
            <p>{text}</p>
        </div>
    )
}

interface Styles {
    div1: string,
    div2: string,
    popularity: {
        div1: string,
        div2: string
    },
    price: {
        h3: string,
        span: string
    },
    cat: {
        div: string,
        h3: string
    },
    desc: {
        div: string
    },
    listing: {
        div: string
    },
    button: {
        div: string,
        button: string
    }
}

export function Card (styles:Styles) {
    return (
        <div className='mt-[50px] flex gap-16'>
            {data.map((card, index) => (
                <div key={index} className= {styles.div1}>

                {/* MOST POPULAR */}
                {card.popularity && <div className={styles.popularity.div1}>
                    <div className= {styles.popularity.div2}>
                        {card.popularity}
                    </div>
                </div>}
    
                <div className= {styles.div2}>
                    {/* PRICE & TIME */}
                    <div>
                        <h3 className= {styles.price.h3}>
                            {card.price}
                            <span className= {styles.price.span}>{card.time}</span>
                        </h3>
                    </div>
    
                    {/* CATEGORY */}
                    <div className= {styles.cat.div}>
                        <h3 className= {styles.cat.h3}>{card.cat}</h3>
                    </div>
    
                    {/* DESCRIPTION */}
                    <div className= {styles.desc.div}>
                        <p>{card.sub}</p>
                    </div>
    
                    {/* LISTING */}
                    <div className= {styles.listing.div}>
                        {card.listing.map((item, index) => (
                            <Checks key={index} icon={item.icon} text={item.text} />
                        ))}
                    </div>
    
                    {/* BUTTON */}
                    <div className= {styles.button.div}>
                        <button className= {styles.button.button}>
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}


export default Card











// function Card() {
//     return (
//         <div className='bg-primary text-white rounded-3xl flex flex-col w-[292px] shadow-xl shadow-text-50'>

//             {/* MOST POPULAR */}
//             <div className='flex justify-end'>
//                 <div className='font-semibold text-[10px] leading-normal bg-secondary rounded-xl px-4 py-1.5 mt-5 mr-5 w-[120px]'>
//                     {data[1].popularity}
//                 </div>
//             </div>

//             <div className='ml-[30px]'>
//                 {/* PRICE & TIME */}
//                 <div>
//                     <h3 className='font-bold leading-normal text-4xl'>
//                         {data[1].price}
//                         <span className='font-normal leading-9'>{data[1].time}</span>
//                     </h3>
//                 </div>

//                 {/* CATEGORY */}
//                 <div className='mt-5'>
//                     <h3 className='font-bold leading-normal text-3xl'>{data[1].cat}</h3>
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className='mr-[30px] mt-1.5'>
//                     <p>{data[1].sub}</p>
//                 </div>

//                 {/* LISTING */}
//                 <div className='mt-5 flex flex-col gap-y-2.5'>
//                     {data[1].listing.map((item, index) => (
//                         <Checks key={index} icon={item.icon} text={item.text} />
//                     ))}
//                 </div>

//                 {/* BUTTON */}
//                 <div className='mt-[30px] mb-9'>
//                     <button className='font-semibold leading-9 rounded-3xl bg-secondary px-16 py-1.5'>
//                         Choose Plan
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function CardInactive() {
//     return (
//         <div className='mt-[90px] w-[270px]'>
//             {/* PRICE & TIME */}
//             <div>
//                 <h3 className='text-text-100 font-bold leading-normal text-4xl'>
//                     {data[0].price}
//                     <span className='text-text-50 font-normal leading-9'>{data[0].time}</span>
//                 </h3>
//             </div>

//             {/* CATEGORY */}
//             <div className='mt-1.5'>
//                 <h3 className='font-bold leading-normal text-3xl'>{data[0].cat}</h3>
//             </div>

//             {/* DESCRIPTION */}
//             <div className='mr-[30px] text-text-50'>
//                 <p>{data[0].sub}</p>
//             </div>

//             {/* LISTING */}
//             <div className='mt-5 flex flex-col gap-y-2.5'>
//                 {data[0].listing.map((item, index) => (
//                     <Checks key={index} icon={item.icon} text={item.text} />
//                 ))}
//             </div>

//             {/* BUTTON */}
//             <div className='mt-6'>
//                 <button className='text-secondary/70 py-1.5 px-12 rounded-3xl'>
//                     Choose Plan
//                 </button>
//             </div>
//         </div>
//     )
// }