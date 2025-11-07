//componentes
import FormularioFinal from "./formulariofinal"

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
                <h2 className="m-4 text-3xl font-bold">El elemento &lt;label&gt;</h2>
                <p>El eleemto lebel define una etiqueta para muchos elementos de formulario. Es muy util para los 
                usuario con lector de pantalla ya que este sera leido cuando el usuario enfoca el elemento de entrada
                </p>
                <p>Este elemento tambien ayuda a usuarios que tienen dificultad clickeando en regiones muy pequeñas (tales como
                    botones radio o checkboxes), porque cuando el usuario clickea el texto dentro del &lt;label&gt;activa dichos botones.
                </p>
                <p>Tambien podemos utilizar un atributo llamado for para emparejar un elemento de entrada con la etiqueta, para 
                    hacerlo el ID de la entrada debe coincidir con el for del label
                </p>
            <div>
                <h3 className="m-4 text-2xl font-bold">Ejemplo:Radio</h3>
                <div className="radios">
                    <form>
                        <input type="radio" id="html" name="leng_fav" value="HTML"></input>
                        <label form="html">HTML</label><br></br>
                        <input type="radio" id="css" name="leng_fav" value="CSS"></input>
                        <label form="css">CSS</label><br></br>
                        <input type="radio" id="javascript" name="leng_fav" value="JavaScript"></input>
                        <label form="javascript">JavaScript</label>
                    </form>
                <h3 className="m-4 text-2xl font-bold">Ejemplo:Checkbox</h3> 
                    <form>
                        <input type="checkbox" id="vehiculo1" name="vehiculo1" value="Moto"></input>
                        <label form="vehiculo1">Tengo una moto</label><br></br>
                        <input type="checkbox" id="vehiculo2" name="vehiculo2" value="Auto"></input>
                        <label form="vehiculo2">Tengo una auto</label><br></br>
                        <input type="checkbox" id="vehiculo3" name="vehiculo3" value="Bici"></input>
                        <label form="vehiculo3">Tengo una bici</label><br></br>
                    </form>
                </div>

            </div>
            <FormularioFinal />
        </>
    )
}