
interface props{
    children: string,
}

function FilledButton(props: props){
    return(
        <button className={`font-sans font-semibold bg-primary hover:bg-primary-100 text-contrast p-2`}>
            {props.children}
        </button>
    )
}

export default FilledButton