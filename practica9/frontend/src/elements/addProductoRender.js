import AgregarProductos from "../services/addProductsApi";

const FormularioParaCrearProducto = () => {

    try {
        
        let agregarProducto = document.getElementById("form-add")

        agregarProducto.innerHTML = `
        <input type="text"id="nombre">
        <input type="text" id="descripcion">
        <input type="number" id="precio">
        <select id="opcions">
        <option value="true" id="siesverdadero">Si esta disponible</option>
        <option value="false" id="siesfalso">No esta disponible</option>
        </select>

       <button id="btnagregar">agregar producto</button> 

        `


        
        let btnagregar = document.getElementById("btnagregar")

        btnagregar.addEventListener('click', async() => {

        let nombre = document.getElementById("nombre")
        let descripcion = document.getElementById("descripcion")
        let precio = document.getElementById("precio")
        let options = document.getElementById("opcions")

        



        let transform = parseFloat(precio.value)

        const transformToBoolean = () => {
            if (options.value = "true") {
                const siesverdadero = "true"
                const myBooleano = new Boolean(siesverdadero);
                console.log(myBooleano);
                
                return myBooleano
                }else if (options.value = "false") {
                    const sinoesVerdadero = "false"
                    const myBooleanoFalse = new Boolean(sinoesVerdadero);
                    console.log(myBooleanoFalse);
                    
                    return myBooleanoFalse
                }
        }

        let transformDataBoolean = transformToBoolean()
        



        const data = {
            "nombre":nombre.value,
            "descripcion": descripcion.value,
            "precio": transform,
            "disponibilidad": transformDataBoolean
        }
            let response = await AgregarProductos(data)
            console.log(await response);
            

            
        })
        
        
        
        

    } catch (error) {
        console.error(error);
        
    }

}




FormularioParaCrearProducto()

let options = document.getElementById("opcions") 
const myBooleano = new Boolean(options.value);
console.log(myBooleano);

console.log(options.value);

let siesVerdadero = document.getElementById("siesverdadero");

let sinoesVerdadero = document.getElementById("siesfalso")

console.log(siesVerdadero.value);

console.log(sinoesVerdadero.value);
