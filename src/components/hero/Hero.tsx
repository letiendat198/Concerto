import banner from '../../assets/banner.png'
import { Showcase } from './Showcases'

function Hero(){
    return(
        <div className="flex relative items-center justify-start grow max-w-full">
            <img className='object-fill min-w-full h-96' src={banner}/>
            <div className='absolute left-10 top-1/3'>
                <p className='text-contrast text-6xl font-bold'>Amazing concerts</p>
                <p className='absolute left-1/3 text-contrast text-6xl text-nowrap font-bold'>Amazing price</p>    
            </div>
            <div className='absolute right-10'>
                <Showcase/>    
            </div>
            
        </div>
    )
}

export default Hero