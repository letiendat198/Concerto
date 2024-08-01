import banner from '../../assets/banner.png'
import { Showcase } from './Showcases'

function Hero(){
    return(
        <div className="flex relative items-center justify-start grow max-w-full">
            <img className='object-fill min-w-full h-64 lg:h-96' src={banner}/>
            <div className='absolute max-lg:top-1/2 max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 lg:left-10 lg:top-1/3'>
                <p className='text-contrast text-4xl lg:text-6xl font-bold text-nowrap'>Amazing concerts</p>
                <p className='absolute  lg:left-1/3 text-contrast text-4xl lg:text-6xl text-nowrap font-bold'>Amazing price</p>    
            </div>
            <div className='absolute right-10 hidden lg:block'>
                <Showcase/>    
            </div>
            
        </div>
    )
}

export default Hero