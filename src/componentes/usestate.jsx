import { useState } from "react";

export default function FuncionUseState(){
    return(
       <div className="contenido [&>p]:m-4 [&>h1,h2,h3]:m-4 [&>h1,h2,h3]:font-bold">
        <h2>Hook useState</h2>
        <p>Este Hooks se utiliza para mantener un seguimiento del estado de la aplicacion. Los estados generalmente 
            se refieren a datos o propiedades de la aplicacion que necesitan ser monitoreados.</p>
        <p>El primer paso es importarlo desde react: import {useState} from 'react'</p>  
        <p>Luego inicializamos nuestro estado invocando a useState en nuestro componenete funcional. usestate 
            <ul>
                <li>El estado actual</li>
                <li>Una funcion que actualiza el estado</li>
            </ul>
        </p> 
        <h2>Ejemplo</h2>
            <code>
            import &#123; useState &#125; from 'react'; <br/>
            function ColorFavorito() &#123;<br/>
                const [color, setColor] = useState("Azul");
            &#125;
            </code> 
            <p>El primer valor, color, es nuestro estado actual, el segundo valor, setColor es la funcion que se 
                utiliza para actualizar nuestro estado. Estos nombres son variables que pueden llevar el nombre que quieran.
            </p>
            <p>Por ultimo establecemos el estado inicial en azul con la llamada a useState()</p>
       </div>
    )
}