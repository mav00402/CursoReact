import { useEffect, useState } from "react"

export default function FuncionUseEffect() {

    const [cuenta, setCuenta] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCuenta((cuenta) => cuenta + 1);
        }, 1000)
    })

    return (
        <div>
            <h2>Hook useEffect</h2>
            <p>Este hook nos permite realizar side effect (efectos secundarios), que son efectos observables en la pagina</p>
            <p>Algunos ejemplos de sie effect son: obtencion de datos, actualizaciones directar del DOM y temporizadores</p>
            <p>Useeffect acepta 2 argumentos , el segundo siendo opcional</p>
            <code>useEffect(&lt;funcion&gt;, &lt;dependencias&gt;)</code>
            <h3>Ejemplo temporizador</h3>
            <p>Usamos la funcion setTimeout para contar 1 segundo luego del renderizado inicial</p>
            <p>Hola me renderice {cuenta} veces</p>
        </div>
    )
}