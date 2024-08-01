interface props{
    children: string,
}

function OutlinedButton(props: props){
    return(
        <button className={`font-sans font-semibold text-primary border-solid border-primary hover:bg-slate-100 border-2 p-1`}>
            {props.children}
        </button>
    )
}

export default OutlinedButton