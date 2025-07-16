interface IReusable {
    id: number,
    text: string
}

export default function ReusableComponent({ id, text }: IReusable) {
    return (
        <div>
            <h3>id : {id}</h3>
            <p>text : {text}</p>
        </div>
    )
}
