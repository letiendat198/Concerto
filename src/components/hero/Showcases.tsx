import tet_banner from '../../assets/tet_banner.png'
import bp_banner from '../../assets/born_pink_banner.png'
import guts_banner from '../../assets/guts_banner.png'

export function Showcase(){
    return(
        <div className='flex items-center justify-center gap-2 grow'>
            <img className="mb-16 top-0 left-0 object-cover h-48 w-36" src={tet_banner}/>
            <img className="object-cover h-48 w-36" src={bp_banner}/>
            <img className="mt-16 object-cover h-48 w-36" src={guts_banner}/>
        </div>
    )
}