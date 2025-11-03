export default function Inicio(){
    //Este es el cuerpo basico de la función basico a exportar.
    //Estas funciones son las que llamamos componentes
    //Los nombres de estos componenetes deben iniciar con una mayuscula, siguiendo el formato UpperCamelCase
    //Para renderizar el HTML dentro de estas funciones, tenemos que escribirlo como argumento del return

    //primer ejemplo de un objeto, cada propiedad esta separa por coma
    //todo el objeto definido entre llaves es almacenado en la variable persona
    const persona = {nombre:'Susana', apellido:'Gimenez', edad:90, colorPelo:'amarillo'};
    console.log(persona);

    const taza = {material:"ceramico", tamanio:400, color:"multicolor"};
    //document.getElementById('tazaMaterial').innerHTML = taza.material;
    //document.getElementById('tazaTamanio').innerHTML = taza.tamanio;
    //document.getElementById('tazaColor').innerHTML = taza.color;

    return(
        <>
            <h2 className="text-bold text-2xl m-3 ">Extructuras de datos: Objetos</h2>
            <div className="m-3">
            <p>En JS, los objetos se pueden ver como  una coleccion de propiedades. Con una sintaxis de llave/
            valor, se inicia un conjunto limitado de propiedades; luego se pueden agregar y eliminar propiedades.
            Los valores de esta propiedades pueden ser de cualquier tipo incluido otros objetos, lo que permite
            constrir estructuras de datos complejas.
            </p>
            <p>Hay 2 tipos de propiedades de objetos que tiene ciertos atributos: la propiedad <i>data</i> y
            la propiedad <i>accesor</i></p>
            <p></p>
            </div>
            <h3 className="m-3 font-bold text-1x1">Propiedad Data</h3>
            <p className="m-4 ">La propiedad data, asocia una clave con un valor y tiene los siguientes atributos</p>
            <h3 className="m-3 font-bold text-1x1">Atributos de una propiedad DATA</h3>
            <table className="border-collapse borde border-grey-400">
                <thead>
                    <tr>
                        <th className="border">Atributo</th>
                        <th className="border">Tipo</th>
                        <th className="border">Descripcion</th>
                        <th className="border">Valor predeterminado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">[[Value]]</td>
                        <td className="border">Cualquier tipo de JS</td>
                        <td className="border">El valor recuperado por un captador de acceso get a la propiedad</td>
                        <td className="border">undefined</td>
                    </tr>
                    <tr>
                        <td className="border">[[Writeable]]</td>
                        <td className="border">Booleano</td>
                        <td className="border">Si es falso el [[Value]] de la propiedad no se puede cambiar</td>
                        <td className="border">false</td>
                    </tr>
                    <tr>
                        <td className="border">[[Enumerable]]</td>
                        <td className="border">Booleano</td>
                        <td className="border">Si es true, la propiedad se enumerara con bucles</td>
                        <td className="border">false</td>
                    </tr>
                    <tr>
                        <td className="border">[[Configurable]]</td>
                        <td className="border">Booleano</td>
                        <td className="border">Si es false, la propiedad no se puede eliminar, no se puede cambiar a una propiedad de ecceso descriptor y los atributos que no sean [[Value]] y [[Writeable]] no se pueden cambiar. </td>
                        <td className="border">false</td>
                    </tr>
                </tbody>
            </table>
            <div className="ejemplo">
                <h3 className="m-3 font-bold text-1x1">Objeto Literal</h3>
                <p>Un Objeto literal es una manera concisa de crear un objeto solo con llaves y valores</p>
                <code>
                    &#123;nombre:"susana", apellido:"Gimenez", edad:90, colorPelo:"amarillo"&#125;
                </code>
            </div>
            <p id="tazaMaterial"></p>
            <p id="tazaTamanio"></p>
            <p id="tazaColor"></p>
        </>
    )
}