import { useState } from "react"

//Componentes
import FuncionUseState from "./usestate"
import FuncionUseEffect from "./useeffect"

export default function Hooks (){
    const [nombre, setNombre] = useState("Marcelo")
    return(
        <div className="contenido [&>p]:m-4 [&>h1,h2,h3]:m-4 [&>h1,h2,h3]:font-bold">
            <h1>React Hooks</h1>
            <p>Los ganchos (Hooks) permiten a los componenetes funcionales acceder al estado y otras
                propiedades sin la utilizacion de clases.<br></br> Proveen una API mas directa a conceptos de react
                como props, states, context, etc...
            </p>
            <p>Son en definitiva funciones que permiten "engarchar a propiedades de react desde componenetes funcionales"</p>
            <h2>Ejemplo:</h2>
            <div className="p-4">
                <p>Hola mi nombre es: {nombre}</p>
                <button type="button" onClick={() => setNombre("Alejandro")}>Cambiar nombre</button>
            </div>
            <p>Se deben importar los Hooks desde react,
            </p>
            <h2>Reglas de Hooks</h2>
            <p>Hay 3 reglas para los Hooks:
                <ul>
                    <li>Solo puedes ser llamados dentro de componenetes funcionales</li>
                    <li>Solo pueden ser llamados en el nivel superior de un componenete</li>
                    <li>No pueden ser condicionales</li>
                </ul>
            </p>
            <FuncionUseState />
            <FuncionUseEffect />

        </div>

        
        
    )
}