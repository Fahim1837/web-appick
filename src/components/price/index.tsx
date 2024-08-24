import { useState } from 'react'
import Card from './Card'
import Text from './Text'

const styles = {
    active: {
        div1: 'bg-primary text-white rounded-3xl flex flex-col w-[292px] shadow-xl shadow-text-50',
        div2: 'ml-[30px]',
        popularity: {
            div1: 'flex justify-end',
            div2: 'font-semibold text-[10px] leading-normal bg-secondary rounded-xl px-4 py-1.5 mt-5 mr-5 w-[120px]',
        },
        price: {
            h3: 'font-bold leading-normal text-4xl',
            span: 'font-normal leading-9',
        },
        cat: {
            div: 'mt-5',
            h3: 'font-bold leading-normal text-3xl',
        },
        desc: {
            div: 'mr-[30px] mt-1.5',
        },
        listing: {
            div: 'mt-5 flex flex-col gap-y-2.5',
        },
        button: {
            div: 'mt-[30px] mb-9',
            button: 'font-semibold leading-9 rounded-3xl bg-secondary px-16 py-1.5',
        },
    },

    inactive: {
        div1: '',
        div2: 'mt-[90px] w-[270px]',
        popularity: {
            div1: 'flex justify-end mb-[-50px]',
            div2: 'font-semibold text-[10px] leading-normal bg-secondary rounded-xl px-4 py-1.5 mt-5 mr-5 w-[120px]',
        },
        price: {
            h3: 'text-text-100 font-bold leading-normal text-4xl',
            span: 'text-text-50 font-normal leading-9',
        },
        cat: {
            div: 'mt-1.5',
            h3: 'font-bold leading-normal text-3xl',
        },
        desc: {
            div: 'mr-[30px] text-text-50',
        },
        listing: {
            div: 'mt-5 flex flex-col gap-y-2.5',
        },
        button: {
            div: 'mt-6',
            button: 'text-secondary/70 py-1.5 px-12 rounded-3xl',
        },
    },
}

function Price() {
    // const [isActive, setIsActive] = useState([false, true, false])
    return (
        <div className="my-25 mx-[215px]">
            <Text />
            <div className="mt-[50px] flex gap-16">
                <Card {...styles.inactive} />
            </div>
        </div>
    )
}

export default Price
