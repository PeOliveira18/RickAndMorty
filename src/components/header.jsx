import foto from '../assets/images/name.png'

function Header() {
    return (  
        <header className='flex justify-center'>
            <img src={foto} alt="Rick and Morty Logo" className='w-[378px] h-[161px]'/>
        </header>
    );
}

export default Header;