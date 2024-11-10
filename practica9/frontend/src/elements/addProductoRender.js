import AgregarProductos from "../services/addProductsApi";
const FormularioParaCrearProducto = () => {
    try {
        let agregarProducto = document.getElementById("form-add")
        agregarProducto.innerHTML = `
        <input type="text"id="nombre">
        <input type="text" id="descripcion">
        <input type="number" id="precio">
        <select id="opcions">
        <option value="true" >Si esta disponible</option>
        <option value="false" >No esta disponible</option>
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

    
        const transformandoABooleano = () => {
            console.log(options.value);
            
            return options.value === "true"
        }

        let booleandata = transformandoABooleano()

        const data = {
            "nombre":nombre.value,
            "descripcion": descripcion.value,
            "precio": transform,
            "disponibilidad": Boolean(booleandata)
        }
            let response = await AgregarProductos(data)
            console.log(await response);
                
        })
        
    } catch (error) {
        console.error(error);   
    }
}
FormularioParaCrearProducto()

