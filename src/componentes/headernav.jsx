import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
export default function HeaderNav(){

    const refNav = useRef(0);

    function switchNav(){    
        refNav.current.classList.toggle("max-[660px]:-translate-y-full");
    }

    return(
        <>
            <header className=" bg-gray-600 text-white flex items-center justify-between px-2 h-10 [&_a]:mx-4 [&_button]:p-5 [&_button]:invisible [&_button]:max-[660px]:visible">
                <h1 className="text-blue-100"><a href="/">CFL-414</a></h1>
                <nav className="max-[660px]:-translate-y-full [&_a]:hover:text-blue-300 [&_a]text-blue-100 duration-350 max-[660px]:gap-2 max-[660px]:fixed max-[660px]:flex max-[660px]:flex-col  max-[660px]:top-0 max-[660px]:left-0 max-[660px]:w-full max-[660px]:h-full max-[660px]:items-center max-[660px]:justify-center max-[660px]:bg-blue-600" ref={refNav}> 
                    <a href="/">Inicio</a>
                    <a href="objetos">Objetos</a>
                    <button className="absolute top-2 right-2" onClick={switchNav}>
                        <FaTimes />
                    </button>
                </nav>
                <button onClick={switchNav}>
                    <FaBars />
                </button>
            </header>
        </>
    )
}