export interface CheckProps {
    icon: string
    text: string
}

function Checks({ icon, text }: CheckProps) {
    return (
        <div className="flex gap-1">
            <img src={icon} />
            <p>{text}</p>
        </div>
    )
}

export default Checks
