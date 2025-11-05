export default function Pruebas (){
    return(
        <form className="bg-amber-200 p-4 flex md:flex-row flex-col">
            <div className="[&>input]:border-2 [&>input]:border-blue-500 [&>input]:rounded-s-sm [&>input]:bg-amber-50 ">
                <label for="fnombre">Nombre:</label><br></br>
                <input type="text" name="fnombre" id="fnombre"></input><br></br>
                <label for="fapellido">Apellido:</label><br></br>
                <input type="text" name="fapellido" id="fapellido"></input><br></br>
                <label for="fdni">DNI:</label><br></br>
                <input type="text" name="fdni" id="fdno"></input><br></br>
                <label for="fmail">Nombre:</label><br></br>
                <input type="text" name="fmail" id="fmail"></input><br></br>
                <label for="ftelefono">Telefono:</label><br></br>
                <input type="text" name="ftelefono" id="ftelefono"></input><br></br>
                {/*<label>El type="date" nos nuestra un calendario que varia segun el navegador</label><br></br>*/}
                <label for="fnac">Fecha de Nacimiento:</label><br></br>
                <input type="date" name="fnac" id="fnac"></input><br></br>
            </div>
            

            <div className="formradios m-4">
                <p className="font-bold text-sm">Tipo de vehiculo: </p>
                <input type="radio" id="fauto" name="fvehiculo" value="Auto"></input>
                <label for="fvehiculo">Tengo auto</label><br></br>
                <input type="radio" id="fmoto" name="fvehiculo" value="Moto"></input>
                <label for="fvehiculo">Tengo moto</label><br></br>
                <input type="radio" id="fbici" name="fvehiculo" value="Bici"></input>
                <label for="fvehiculo">Tengo bici</label><br></br>
                <input type="radio" id="fnada" name="fvehiculo" value="Nada"></input>
                <label for="fvehiculo">No tengo vehiculo</label><br></br>
            </div>

            <div className="formcheckbox m-4">
                <p className="font-bold text-sm">Estudios: </p>
                <input type="checkbox" id="festudio1" name="festudio1" value="Primario"></input>
                <label for="festudio1">Primario</label><br></br>
                <input type="checkbox" id="festudio2" name="festudio2" value="Secundario"></input>
                <label for="festudio2">Secundario</label><br></br>
                <input type="checkbox" id="festudio3" name="festudio3" value="Terciario"></input>
                <label for="festudio3">Terciario</label><br></br>
            </div>
            
        </form>
    )
}