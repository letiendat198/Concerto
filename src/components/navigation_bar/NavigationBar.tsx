import FilledButton from "../buttons/FilledButton"

function NavigationBar(){
    return(
        <nav className="flex items-center justify-between bg-primary pl-2 pr-2">
            <div className="flex items-center justify-around gap-2">
                <div className="flex items-center justify-center">
                    <p className="font-sans font-bold text-2xl text-contrast">Concerto</p>    
                </div>
                <div className="flex items-center justify-around gap-2">
                    <FilledButton>Concerts</FilledButton>
                    <FilledButton>Sports</FilledButton>
                    <FilledButton>Arts, Threater & Comedy</FilledButton>
                    <FilledButton>Family</FilledButton>
                </div>    
            </div>
            <div className="flex items-center justify-around gap-2">
                <FilledButton>Log In</FilledButton>
                <FilledButton>Register</FilledButton>
            </div>
        </nav>
    )
}
export default NavigationBar