import listaPersonas from '../json/personas.json'
import listaPelis from '../json/peliculas.json'


export default function ContenidoDinamico(){

    function Ficha(){
        return(
            <div id='contenedorelementos' className='flex flex-wrap gap-4 bg-blue-100 [&_p]: m-0'>
                
                {
                    listaPelis.map((peli, indice) => (
                    <div id='elemento' key={indice} className='w-2/5 border-black border rounded-sm bg-gradient-to-r from-amber-200 to-yellow-500'>
                        <h4>{peli.titulo}</h4>
                        <img className= 'w-full' src={peli.imagen} alt='imagen 1'></img>
                        <p>Duracion: {peli.duracion}</p>
                        <p>Genero: {peli.genero}</p>
                        <p>Director: {peli.director}</p>
                    </div>
                    ))
                }
            </div>

        )
    }

    return(
        <div>
            <h2>Creacion dinamica</h2>
            <p>Utilizando las funcionalidades de react, podemos generar elementos HTML de manera automatica. Para esto utilizamos 2 cosas, una lista de objetos y la funcion map()</p>
            <h3>JSON</h3>
            <p>Es el acronimo de JavaScript Objet Notation, es un formato que define objetos de JavaScript de manera estandarizada. Esos estan contenidos en su propio archivo con extension .json y se pueden importar directamente a los componentenes de react</p>
            <h3>Tabla Dinamica</h3>
            <p>En este ejemplo, vamos a cargar una tabla con contenido de un archivo .json</p>
            <div>
                <table className='table-auto border border-b-emerald-400 w-2xl [&_th]:border [&_td]:border [&_td]:px-1'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>email</th>
                            <th>curso</th>
                            <th>nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPersonas.map((persona, indice) => (
                                <tr key={indice}>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.email}</td>
                                    <td>{persona.curso}</td>
                                    <td>{persona.nota}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h3>Contenedores dinamicos</h3>
            <p>No solamente podemos generar tablas. el contenido donamico puede ser cualquier cosa,
                desde un tag p hasta un tag div, con multiples elementos internos. Es importate primero definir
                un estructura estable ya que que el contenido se ira cargando
            </p>
            <div>
                <Ficha />
            </div>
        </div>
    )
}