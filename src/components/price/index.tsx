import Card, { CardInactive, Text } from './Card'


function Price() {
    return (
        <div className='my-25 mx-[215px]'>
            <Text />
            <div className='mt-[50px] flex gap-16'>
                <CardInactive />
                <Card />
                <CardInactive />
            </div>
        </div>
    )
}

export default Price
