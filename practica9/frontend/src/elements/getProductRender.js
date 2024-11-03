import fetchProductos from "../services/fetchProductsApi"



let app = document.getElementById("app")
let contenedorDeProductos = document.createElement("div")


const getProductos = async () => {
    let fetchProducto = await fetchProductos()
    console.log(fetchProducto);

    let {obteniendoProductos} = await fetchProducto

    


    obteniendoProductos.forEach(item => {
        
            console.log(item.nombre);
            console.log(item.descripcion);
            console.log(item.precio);
            console.log(item.disponibilidad);

    let app = document.getElementById("app")
    let contenedorDeProductos = document.createElement("div")

    contenedorDeProductos.innerHTML = `
    <p>${item.nombre}</p>
    <p>${item.descripcion}</p>
    <p>${item.precio}</p>
    <p>${item.disponibilidad}</p>
    `

    app.appendChild(contenedorDeProductos)
        
    });


    
}

export default getProductos