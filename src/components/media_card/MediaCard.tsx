import FilledButton from "../buttons/FilledButton"
import OutlinedButton from "../buttons/OutlinedButton"

interface props{
    src: string,
    title: string,
    children?: string,
    onClick?: ()=>void
}

export function MediaCard(props: props){
    return(
        <div className="flex md:h-52 h-40 shadow-lg hover:shadow-2xl p-2">
            <img className="object-cover max-w-36" src={props.src}/>
            <div className="flex grow flex-col justify-between pl-2 overflow-hidden">
                <div className="flex flex-col">
                    <p className="text-2xl font-sans font-bold truncate">{props.title}</p>
                    <p className="line-clamp-2 md:line-clamp-5">{props.children}</p>    
                </div>  
                <div className="flex justify-end">
                    <FilledButton>Find Tickets</FilledButton>
                </div>
            </div>
        </div>    
    )
}