import { useEffect, useState } from "react"

export default function Snippets(){

    const [color1, setColor1] = useState("bg-blue-300");

    function cambiaRojo(){
        setColor1("bg-red-300");
    }

    const [color2, setColor2] = useState("bg-blue-300");
    let flag = true;

    function interruptorColor(){
        if (flag){
            setColor2("bg-red-300");
            flag = false;
        } else {
            setColor2("bg-blue-300");
            flag = true;
        }
    }

    const [color3, setColor3] = useState("blue");
    const [posicion, setPosicion] = useState(0);


    function gestionClick(valorOpcion){
        setOpcion(valorOpcion);
    }
    function BarraDeNavegacion(){
        return(
            <>
                <button onClick={gestionCondicion}>Pagina 1</button>
                <button onClick={() => gestionClick(1)}>Pagina 2</button>
                <button onClick={() => gestionClick(2)}>Pagina 3</button>
                <button onClick={() => gestionClick(3)}>Pagina 4</button>
                <button>Pagina 5</button>
            </>
        )
    }

    function ContenidoNav1(){
        return(
                <div id="contenidonav1">
                    <h2>Titulo 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque accusamus harum perferendis dolorem porro, optio nobis inventore placeat, totam ea dignissimos nam id? Quis numquam suscipit id. Iure, distinctio aspernatur! </p>
                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
        )
    }

    function ContenidoNav2(){
        return(
            <div id="contenidonav2">
                <h2>Titulo 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod quae non eos magni, dolor quis id laudantium natus ducimus laboriosam voluptas tempore praesentium vero animi tempora excepturi nemo recusandae! </p>
                <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
            </div>
        )
    }

    function ContenidoNav3(){
        return(
            <div id="contenidonav3">
                <h2>Titulo 3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae excepturi quisquam perferendis tenetur. Aspernatur, dolores ducimus. Modi ea, rerum nesciunt dolore velit nam odio, at pariatur nobis magnam quo?</p>
            </div>
        )
    }

    function ContenidoNav4(){
        return(
            <div id="contenidonav4">
                <h2>Titulo 4</h2>
                <p>Lorem ipsum dolor sit,  nobis magnam quo?</p>
            </div>
        )
    }

    const [condicion, setCondicion] = useState(true);
    const gestionCondicion =  ()=> {
        condicion ? setCondicion (false) : setCondicion(true);
    
    }

    const [opcion, setOpcion] = useState(1);

    function menuOpciones(){
        switch(opcion){
            case 1:
                return <ContenidoNav2 />;
            break;
            case 2:
                return <ContenidoNav3 />;
            break;
            case 3:
                return <ContenidoNav4 />;
            break;
            default:
                <p>Nada por aqui</p>
        }
        
    }
    
    return(
        <>
        <div id="contenedorprincipal">
            <div id="contenido">
                <section id="ejercicio">
                    <h2>Modificando en DOM con JS</h2>
                    <p>Utilizando los Hooks useEffect, Useref, useState, podemos modificar diferentes aspectos del DOM,
                        como contenido de algun elemento HTML, o inclusdo cambiar nombres de clases para lograr diferentes efectos</p>
                    <div id="ejemplo1">
                        <div id="elementoejemplo1" className={"w-30 h-30 " + color1}></div>
                        <button onClick={cambiaRojo}>cambiar a rojo</button>
                    </div>
                    <div id="ejemplo2">
                        <div id="elementoejemplo2" className={"w-30 h-30 " + color2}></div>
                        <button onClick={interruptorColor}>Intercambia color</button>
                    </div>
                    <div id="ejemplo3">
                        <div id="elementoejemplo3" className={`w-30 h-30`} style={{backgroundColor: color3}}></div>
                        <div id="botonera" className="flex flex-wrap gap-4 m-4">
                            <button className="bg-red-500"type="button" onClick={() => setColor3("red")}>Cambiar a Rojo</button>
                            <button className="bg-blue-500"type="button" onClick={() => setColor3("blue")}>Cambiar a Azul</button>
                            <button className="bg-green-500"type="button" onClick={() => setColor3("green")}>Cambiar a Verde</button>
                            <button className="bg-yellow-500"type="button" onClick={() => setColor3("yellow")}>Cambiar a Amarillo</button>
                        </div>
                    </div>
                    <div id="ejemplo4">
                        <div id="elementoejemplo4" className="w-30 h-30 bg-blue-600" style={{transform: `translateX(${posicion}%)`}}></div>
                        <input type="range" min="1" max="740" defaultValue={posicion} onChange={(e) =>setPosicion(e.target.value)}/>
                        <p>valor del rango: {posicion}</p>
                    </div>
                </section>
                <hr />
                <section id="barranav">
                    <h2>Barra de Navegacion</h2>
                    <div id="contenedornav" className="flex max-[660px]:flex-col gap-5 justify-center p-4 [&>button]:p-5 bg-gray-300 [&>button]:bg-cyan-400 [&>button]:hover:bg-amber-400 [&>button]:hover:-translate-y-2 [&>button]duration-500 [&>button]:transform">
                        <BarraDeNavegacion></BarraDeNavegacion>
                    </div>
                        <ContenidoNav3 />

                    {/*condicion ? <ContenidoNav1 /> : <ContenidoNav2 />*/}

                    {menuOpciones ()}

                    
                </section>
            </div>
        </div>
        </>
    )
}