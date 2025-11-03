export default function ClaseForm(){
    return(
        <>
            <h2 className="m-4 text-3xl font-bold"  >Formularios</h2>
            <p className="m-3">Los Formularios HTML se utilizan para recolectar entrads del usuario. Esta info recolectada se enviara
            a un servidor externo para ser procesada, aunque podemos utilizar funciones de JS para modificar contenido del DOM local.
            </p>
            <div>
            <p className="m-4">Ejemplo</p>
            <form className="m-4 border border-black">
                <label>Nombre:</label><br></br>
                <input className="border-red-600 border rounded-2xl" type="text" /><br></br>
                <label>Apellido:</label><br></br>
                <input className="border-red-600 border rounded-2xl" type="text" /><br></br>
                <input className="bg-amber-300 hover:bg-blue-700 p-2" type="submit" value="Enviar"/>
            </form>
            </div>
            <h2 className="m-4 text-3xl font-bold">El elemento &lt;form&gt;</h2>
            <p className="m-4">Este es un elemento contenedor para diferentes tipos de elementos de entrada, tales como0:
                campo de texto, check boxes, botones radius, botones de envio, etc...
            </p>
            <h2 className="m-4 text-3xl font-bold">El elemento &lt;input&gt;</h2>
            <p className="m-4">Este elemento es el mas utilizado en un formulario. Puede mostrarse de diversas maneras dependiendo
                de su atributo type
            </p>
            <table className="m-4 border-collapse border">
                <tr>
                    <th>Type</th>
                    <th>Descripcion</th>
                </tr>
                <tr>
                    <td>type="text"</td>
                    <td>Muestra un campo para introducir una sola linea de texto</td>
                </tr>
                <tr>
                    <td>type="radio"</td>
                    <td>Muestra un boton redondo que se puede utilizar para seleccionar una de varias opciones</td>
                </tr>
                <tr>
                    <td>type="checkbox"</td>
                    <td>Muestra una caja de seleccion, para elegir entre cero o multiples selecciones</td>
                </tr>
                <tr>
                    <td>type="submit"</td>
                    <td>Muestra un boton para enviar la informacion del formulario</td>
                </tr>
                <tr>
                    <td>type="button"</td>
                    <td>Muestra un boton clickleable</td>
                </tr>
            </table>
        </>
    )
}