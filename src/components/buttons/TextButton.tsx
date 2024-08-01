
interface props{
    children: string,
    bgColor?: string,
    textColor?:string
}

function TextButton(props: props){
    return(
        <button className={`font-sans font-semibold p-2 ${props.bgColor} ${props.textColor}`}>
            {props.children}
        </button>
    )
}

export default TextButton