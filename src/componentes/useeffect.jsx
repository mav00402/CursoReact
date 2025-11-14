import { useEffect, useState } from "react"

export default function FuncionUseEffect() {

    const [cuenta, setCuenta] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCuenta((cuenta) => cuenta + 1);
        }, 1000)
    },[])

    //Ejemplos de useEffect
    useEffect(() =>{
        //Corre en cada renderizado
    });

    useEffect(() => {
        //Corre solo en el primer render
    },[]);

    let propiedades, estados;
    useEffect(() =>{
        //Corre en el primer renderizado
        //Y cada vez que el valor de propiedades o estado cambie
    },[propiedades, estados]);

    //Ejmplo Practico
    const [cuenta2, setCuenta2] = useState(0);
    const [calculo, setCalculo] = useState(0);
    
    useEffect(() => {
        setCalculo(() => cuenta2 * 2);
    },[cuenta2]);


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
            <p>Podemos ver que el contador sigue actualizandose cuando solo deberia contar una vez, esto sucede ya que useEffect corre en cada renderizado. Esto significa que cuando el contador cambia, sucede un rnderizado, lo que activa otra vez el efecto</p>
            <p>Esto no es lo queríamos, hay varias maneras de controlar cuando corre este side effect.</p>
            <p>Deberiamos siempre incluir el segundo parametro que acepta un array. Opcionalmente podriamos pasar dependencias al useEffect de esta manera.</p>
            <h3>Ver ejemplos en el codigo fuente</h3>
            <h3>Ejemplo practico</h3>
            <p>Cuenta: {cuenta2}</p>
            <button onClick={() => setCuenta2((c) => c + 1)}>+</button>
            <p>Calculo: {calculo}</p>
        </div>
    )
}