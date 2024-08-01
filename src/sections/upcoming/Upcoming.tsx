import { MediaCard } from "../../components/media_card/MediaCard";
import tet_banner from '../../assets/tet_banner.png'
import guts_banner from '../../assets/guts_banner.png'
import bp_banner from '../../assets/born_pink_banner.png'

export function Upcoming(){
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">Upcoming Concerts</p>
            <div className="grid grid-cols-12 gap-2 p-2">
                <div className="sm:col-span-6 lg:col-span-4 col-span-12">
                    <MediaCard src={tet_banner} title="The Eras Tour">The cultural phenomenon continues as pop icon Taylor Swift performs hit songs in a once-in-a-lifetime concert experience. Includes three songs from the tour not shown in theatres: `Long Live', `The Archer' and `Wildest Dreams'.</MediaCard>               
                </div>
                <div className="sm:col-span-6 lg:col-span-4 col-span-12">
                    <MediaCard src={guts_banner} title="Guts World Tour">The Guts World Tour is the ongoing second concert tour and first arena tour by the American singer-songwriter and actress Olivia Rodrigo in support of her second studio album, Guts (2023)</MediaCard> 
                </div>
                <div className="sm:col-span-6 lg:col-span-4 col-span-12">
                    <MediaCard src={bp_banner} title="Born Pink World Tour">Born Pink World Tour is the ongoing second worldwide concert tour by South Korean girl group Blackpink in support of their second Korean studio album Born Pink. By the end of July, Hanoi will be the next stop for the girls’ World Tour. Blackpink in Hanoi will be a highlight event of the year, drawing audience in Vietnam and around the world, especially youngsters to enjoy the concert and experience Vietnam Tourism.</MediaCard> 
                </div>
            </div>
        </div>
    )
}