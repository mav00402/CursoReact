//Imports Dependencias
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';;
import { useState } from 'react';

//CSS
import './css/general.css'

const raiz = document.getElementById("root");

function Cabecera(){
    return(
        <header className='bg-amber-200 text-center p-4'>
            <h1>Ejercicios Funciones</h1>
        </header>
    )
}

function Contenido(){
    const [campoNombre, setCampoNombre] = useState('');
    
    const gestionaCambio = event =>{
        setCampoNombre(event.target.value);
        //console.log('el valor es: ', event.target.value);
    }

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0); //En esta variable de estado guardamos el resultado

    const gestionaEnvio = event =>{
        console.log('corre gestionaEnvio: ')
        event.preventDefault(); //Previene que lapagina se actualice

        //accedemos a los valores de entrada
        console.log("numero 1: ", numero1);
        console.log("numero 2: ", numero2);

        //Los valores que vienen de las variables de estado a travez del useState 
        //son cadenas de caracteres. la funcion parseInt los transforma
        //a numeros enteros
        setResultado(parseInt(numero1) + parseInt(numero2));
        

        //Limpiamos los valores de entrada
        setNumero1(0);
        setNumero2(0);
    }
    return(
        <div>
            <h2>Funciones en JS</h2>
            <p>Las funciones son el bloque de constricción principal en toda la programación. Son bloques de código reutilizables diseñados para realizar una tarea en particular. Estas se ejecutan cuando son "llamadas" o "invocadas"</p>
            <p>Ver ejemplo en codigo fuente.</p>
            <p>Las funciones estan compuestas por una cabecera que contiene la plabra clave "function", seguido del identidicador de la funcion con sus parametros, "miFuncion(). Opcionalemnte las funciones pueden retornar un valor al lugar donde fueron invocadas con la palabra clave "retuen"</p>
            <p>La siguiente frase fue generada por una funcion: {miFuncion()}</p>
            <p>Podemos definir parametros en la funcion, que son valores que esta recibe para ser procesados. Los enviamos al momento de invokar a la funcion en forma de argumentos</p>
            <p>Invocamos a la funcion con un parametro del tipo string: {miFuncion2("Maxi")}</p>
            <p>Se pueden definir la cantidad que querramos de parametros, siempre que los enviemos en el orden correcto. Estos deben estar separados por una coma (.)</p>
            <p>Esta funcion devuelve la suma de 2 numeros enviados como argumentos: {miFuncion3(3, 6)}</p>
            <h2>Ejercicio</h2>
            <p>Mostrar la resta de 2 numeros: </p>
            <p>Mostrar la multiplicacion de 2 numeros: {multiplica(5, 8)}</p>
            <p>Mostrar la division de 2 numeros: </p>
            <h2>Funciones flecha</h2>
            <p>Otra manera de utilizar las funciones es definirlas como variables: let miFuncion = function(a, b) &#123;return a * b&#125;</p>
            <p>Promedio de 3 numeros: {promedioTres(5, 8, 7)}</p>
            <p>Con las funciones flecha podemos expresar estas funciones de manera mas corta: let miFuncion = (a, b) =&gt; a * b</p>
            <p>Promedio de 3 numero con funcion flecha: {promedioTresFlecha(6, 9, 2)}</p>
            <p>De esta manera podemos simplificar la sintaxis omitiendo la palabra clave function, la palabra clave return y las llaves</p>
            <p>funcion hola: {hola()}</p>
            <p>Si la funcion solo tiene una sentencio como valor de retorno, podemos remover las llaves y el return </p>
            <p>funcion hola reducida: {hola1()}</p>
            <h2>Capturando datos de entrada</h2>
            <p>Los valores utilizados por las funciones pueden ser literales (escritos en el codigo) o valores obtenidos desde el DOM (ej: un inputbox). Para ello utilizamos la funcion useState</p>
            <p>pasos a seguir:
                <ul>
                    <li>Declarar la variable de estado que monitorea el valor del campo de entrada</li>
                    <li>agregar la propidad  onChange al campo de entrada</li>
                    <li>utilizar event.target.value para obtener el valor del campo de entrada y actualizar la variable de estado</li>
                </ul>
            </p>
            <h3>Entrada de datos;</h3>
            <input className="border border-b-cyan-400 m-4" 
                type="text" 
                id="campoNombre" 
                name="campoNombre" 
                onChange={gestionaCambio} 
                value={campoNombre}/>
            <h4>Mensaje: {campoNombre}</h4>
            <p>Utilizamos el hook useState para monitorear el valor del campo de entrada, establecemos la propiedad onChange del campo para que cada vez que su valor cambie se invoque a la funcion gestionaCambio.<br/>Podemos acceder al valor del elemento de entrada como event.target.calue en la funcion gestionaCambio (event es solo el nombre del parametro que recibe el evento de cambio, puede llamarse de cualquier manera), la propiedad target en el evento se refiere al elemento de entrada.<br/>Se puede utilizar la variable de estado campoNombre para acceder al valor del campo de entrada en cualquier lugar fuera de la funcion gestionaCambio</p>
            <h3>Ejercicios</h3>
            <p>Crear 2 campos de entrada:</p>
            {/*
            Para hacer funcionar el boton, meti todos los elementos
            en un formulario. la propiedad onSubmit ejecuta la funcion
            al momento de tocar el boton, a diferencia del type="button" que 
            necesita el onClick para ejecutar la funcion
            */}
            <form onSubmit={gestionaEnvio}>
                <input className='border border-amber-500' 
                    type="text" 
                    id="numero1" 
                    name="numero1"
                    onChange={event => setNumero1(event.target.value)}
                    />
                <input className='border border-amber-500' 
                    type="text" 
                    id="numero2" 
                    name="numero2"
                    onChange={event => setNumero2(event.target.value)}
                    />
                <button className="bg-red m-4" type="submit">Sumar</button>
                <h4>Resultado : {resultado}</h4>
            </form>
            
        </div>
    )
}

//Ejemplo 1
function miFuncion(){
    return "Hola Mundo"
}

//Ejemplo 2: con parametros
function miFuncion2(nombre){
    return "Hola, mi nombre es: " + nombre;
}

//Ejemplo 3: multiples parametros
function miFuncion3(n1, n2){
    return n1 + n2;
}

function multiplica(n1, n2){
    return n1 * n2;
}

//funcion simple
let promedioTres = function(a, b, c){return (a + b + c) / 3}

//funcion Flecha
let promedioTresFlecha = (a, b, c) => (a + b + c) / 3

let hola = () => {
    return "hola mundo";
}

let hola1 = () => "hola mundo";

createRoot(raiz).render(
    <StrictMode>
        <Cabecera />
        <Contenido />
    </StrictMode>
)