import fetchProductos from "../services/fetchProductsApi"



let app = document.getElementById("app")
let contenedorDeProductos = document.createElement("div")


const getProductos = async () => {
    let fetchProducto = await fetchProductos()
    

    let {obteniendoProductos} = await fetchProducto

    


    obteniendoProductos.forEach(item => {
        


            const disponibilidadtransform = () => {
                if (item.disponibilidad == true) {
                    return "si esta disponible";
                }else if (item.disponibilidad == false) {
                    return "no esta disponible";
    
                }
            }

            let valorDisponibilidad = disponibilidadtransform()


    let app = document.getElementById("app")
    let contenedorDeProductos = document.createElement("div")

    contenedorDeProductos.innerHTML = `
    <p>${item.nombre}</p>
    <p>${item.descripcion}</p>
    <p>${item.precio}</p>
    <p>${valorDisponibilidad}</p>
    `

    app.appendChild(contenedorDeProductos)
        
    });


    
}

export default getProductos