import Checks, { CheckProps } from './Checks'

interface Styles {
    div1: string
    div2: string
    popularity: {
        div1: string
        div2: string
    }
    price: {
        h3: string
        span: string
    }
    cat: {
        div: string
        h3: string
    }
    desc: {
        div: string
    }
    listing: {
        div: string
    }
    button: {
        div: string
        button: string
    }
}

interface Card {
    price: string
    time: string
    popularity: string | undefined
    cat: string
    sub: string
    listing: CheckProps[]
}

interface CardProps {
    styles: Styles
    card: Card
    index: number
    handleClick: (index: number) => void
}

function Card({ styles, card, index, handleClick }: CardProps) {
    // const [num, setNum] = useState (1)
    return (
        <div
            className={styles.div1}
            onClick={() => {
                handleClick(index)
            }}
        >
            {/* MOST POPULAR */}
            {card.popularity && (
                <div className={styles.popularity.div1}>
                    <div className={styles.popularity.div2}>
                        {card.popularity}
                    </div>
                </div>
            )}

            <div className={styles.div2}>
                {/* PRICE & TIME */}
                <div>
                    <h3 className={styles.price.h3}>
                        {card.price}
                        <span className={styles.price.span}>{card.time}</span>
                    </h3>
                </div>

                {/* CATEGORY */}
                <div className={styles.cat.div}>
                    <h3 className={styles.cat.h3}>{card.cat}</h3>
                </div>

                {/* DESCRIPTION */}
                <div className={styles.desc.div}>
                    <p>{card.sub}</p>
                </div>

                {/* LISTING */}
                <div className={styles.listing.div}>
                    {card.listing.map((item, index) => (
                        <Checks key={index} icon={item.icon} text={item.text} />
                    ))}
                </div>

                {/* BUTTON */}
                <div className={styles.button.div}>
                    <button className={styles.button.button}>
                        Choose Plan
                    </button>
                </div>
            </div>
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
