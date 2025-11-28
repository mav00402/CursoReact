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
            </div>
        </div>
        </>
    )
}