//Import dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useState } from 'react';

//Import CSS
import './css/general.css'

import HeaderNav from './componentes/headernav';
import ContenidoDinamico from './componentes/contenido-dinamico';

const raiz = document.getElementById("root");

function Cabecera(){
    return(
        <header className='bg-amber-400 text-center p-4'>
            <h1>Ejercicios Funciones</h1>
        </header>
    )
}

function Contenido(){
    const [campoNombre, setCampoNombre] = useState ('');

    const gestionaCambio = event =>{
        setCampoNombre(event.target.value);
        console.log('El valor es: ' , event.target.value);
    }

    const [numero1, setNumero1] = useState(0);

    const gestiona1 = event =>{
        setNumero1(event.target.value);
    }

    const [numero2, setNumero2] = useState(0);

     const gestiona2 = event =>{
        setNumero2(event.target.value);
    }

    function funcionSumar(n1 ,n2){
        return n1 + n2;
    }


    return(
        <div>
            <h2>Funciones en JS</h2>
            <p>Las funciones son el bloque de construccion principal en toda la programación. Son bloques de codigo reutilizables
                diseñados para realizar una tarea en particular. Estas se ejecutan cuando son llamadas o invocadas.
            </p>
            <p>Ver ejemplo en codigo fuente</p>
            <p>Las funciones estan compuestas por una cabecera que contiene la palabra clave "function", seguido por el identificador
                de la funcion con sus parametros. Opcionalmente las funciones pueden retornar un valor al lugar donde fueron invocadas
                con la palabra clave "return"
            </p>
            <p>La siguiente frase fue generada por una funcion: {miFuncion}</p>
            <p>Podemos definir parametros en la funcion que son valores que esta recibe para ser procesados. Los enviamos al 
                momento de invocar a la funcion en forma de argumentos.
            </p>
            <p>Invocamos a la funcion con un parametro del tipo string: {miFuncion2("Marcelo")}</p>
            <p>Se pueden definir la cantidad que querramos de parametros, siempre que los enviemos en el orden correcto. Estos deben
                estar separados por una coma.
            </p>
            <p>Esta funcion devuelve la sumas de 2 numeros enviados como argumentos: {miFuncion3(3,6)}</p>
            <h2>Ejercicio</h2>
            <p>Mostar la resta de 2 numeros: {miFuncion4(10,6)} </p>
            <p>Mostar la multiplicacion de 2 numeros: {miFuncion5(4,6)}</p>
            <p>Mostar la division de 2 numeros: {miFuncion6(18,6)}</p>
            <h2>Funciones fecha</h2>
            <p>Otra manera de utilizar las funciones es definirlas como variables: let miFuncion = function(a, b) &#123;return a * b &#125;</p>
            <p>Promedio de 3 números: {promedioTres (5,8,7)}</p>
            <p>Con las funciones flecha podemos expresar estas funciones de manera mas corta: let miFuncion = (a, b) =&gt; a * b</p>
            <p>Promedio de 3 numeros con funcion flecha : {promedioTresFlecha(6,9,2)}</p>
            <p>De esta manera podemos simplificar la sintaxis omitiendo, la palabra clave function, la palabra clave return y las llaves</p>
            <p>Funcion hola: {hola()}</p>
            <p>Si la funcion solo tiene una sentencia como valor de retorno podemos remover las llaves y el return</p>
            <p>Funcion hola reducida: {hola1()}</p>
            <h2>Capturando datos de entrada</h2>
            <p>Los valores utilizados por las funciones pueden ser literales (escritos en el codigo) o valores obtenidos desde
                el DOM (ej: un inputbox). Para ello utilizamos la funcion useState.
            </p>
            <p>Pasos a seguir:
                <ul>
                    <li>Declarar la variable de estado que monitorea el valor del campo de entrada</li>
                    <li>Agregar la propiedad onChange al campo de entrada</li>
                    <li>Utilizar event.target.value para obtener el valor del campo de entrada y actualizar la varible de estado</li>
                </ul>
            </p>
            <h3>Entrada de datos</h3>
            <input className= "border border-b-cyan-400 mx-4 "
                type="text"
                id="campoNombre"
                name="campoNombre"
                onChange={gestionaCambio}
                value={campoNombre} />

            <h4>Mensaje: {campoNombre}</h4>
            <p>Utilizamos el hook useState para monitorear el valor del campo de entrada, establecemos la propiedad
                onChange el campo para que cada vez que su valor cambie se invoque a la funciona gestionaCambio.<br />
                Podemos acceder al valor del elemento de entrada como event.target.value (event es el nombre que recibe el
                parametro al momento del vamnbio, piuede llamar se cualqeoire manera), la proiedad target en el evento se refiere
                al elemento de entrada.<br />Se puede utiliza la variable de estado campoNombre para acceder al valor del campo de entrada
                en cualqueir lugar fuera de la funcion gestionaCambio.
            </p>
            <h3>Ejercicios</h3>
            <p>Crear 2 campos de entrada:</p>

            <input className= "border border-b-amber-700 mx-4 "
                type="text"
                id = "numero1"
                name = "numero1"
                onChange={gestiona1}
                value={numero1}
            />

            <input className= "border border-b-amber-600 mx-4 "
                type="text"
                id = "numero2"
                name = "numero2"
                onChange={gestiona2}
                value={numero2}
            />

            <input className='bg-red-500 m-4' type="button" value="sumar" onClick={funcionSumar}/>
            <h4>Resultado: {funcionSumar}</h4>
        </div>
    )
}

//Ejemplo 1
function miFuncion(){
    return "Hola Mundo"
}

//Ejemplo 2: con parametros
function miFuncion2(nombre){
    return "Mi, nombre es: " + nombre;
}

//Ejemplo 3: Multiparametros
function miFuncion3(n1,n2){
    return n1 + n2;
}

//Funciones de ejercios
function miFuncion4(n1,n2){
    return n1 - n2;
}

function miFuncion5(n1,n2){
    return n1 * n2;
}

function miFuncion6(n1,n2){
    return n1 / n2;
}

//Funcion simple
let promedioTres = function(a, b, c){return (a + b + c) / 3}

//Funcion flecha
let promedioTresFlecha = (a,b,c) => (a + b + c) /3

let hola = () => {
    return "Hola Mundo 1";
}

let hola1 = () => "Hola Mundo 2";

const rutasObjetos = createBrowserRouter([
    
    {
        path: "/",
        Component: ContenidoDinamico
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderNav />
        <RouterProvider router={rutasObjetos} />
    </StrictMode>
)