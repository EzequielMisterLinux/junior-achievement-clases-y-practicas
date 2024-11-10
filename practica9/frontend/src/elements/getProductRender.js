import deleteProductByID from "../services/deleteProductApi"
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
    <button id="delete-${item._id}" value="${item._id}" ">borrar</button>
    <!-- Open the modal using ID.showModal() method -->

    <button class="btn" onclick="my_modal_1.showModal()">open edit</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box border-spacing-1 bg-fuchsia-300">
    <h3 class="text-lg font-bold">Editando producto!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
          <input placeholder="${item.nombre}"/>
          <br/>
          <input placeholder="${item.descripcion}"/>
          <br/>
          <input placeholder="${item.precio}"/>
          <br/>
                  <select id="opcions">
        <option value="true" >Si esta disponible</option>
        <option value="false" >No esta disponible</option>
        </select>
        
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    
    `

    app.appendChild(contenedorDeProductos)
        

    let deleteProducto = document.getElementById(`delete-${item._id}`)
    
    deleteProducto.addEventListener("click", async() => {
        const response = await deleteProductByID(deleteProducto.value)
        console.log(await response);
        
    })
    


    });


    
}

export default getProductos