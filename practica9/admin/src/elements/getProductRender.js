import deleteProductByID from "../services/deleteProductApi"
import fetchProductos from "../services/fetchProductsApi"
import Swal from "sweetalert2";
import { Howl } from "howler";
import confetti from "canvas-confetti";
import { Modal } from 'flowbite';
import updateProductById from "../services/updateProductById";

const getProductos = async () => {
    let fetchProducto = await fetchProductos()
    

    let {obteniendoProductos} = await fetchProducto

    

    let app = document.getElementById("app")

    app.textContent = ""

    app.innerHTML = `
    


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    nombre
                </th>
                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                    descripcion
                </th>
                <th scope="col" class="px-6 py-3">
                    precio
                </th>
                <th scope="col" class="px-6 py-3 hidden lg:table-cell">
                    disponibilidad
                </th>
                <th scope="col" class="px-6 py-3">
                    acciones
                </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>
<!-- Small Modal -->
<div id="small-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Small modal
                </h3>
                <button id="closeModalX" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
<div class="max-w-sm mx-auto ">
<div class="mb-5">
  <label for="nombreUpdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ingrese el nombre</label>

  <input type="text" id="nombreUpdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre" required />

</div>

<div class="mb-5">
  <label for="descripcionUpdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ingrese la descripcion</label>

  <input type="text" id="descripcionUpdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="descripcion" required />

</div>

<div class="mb-5">
  <label for="precioUpdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ingrese el precio</label>

  <input type="number" id="precioUpdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="precio" required />

</div>


<div class="mb-5">
<label for="opcionsUpdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione la disponibilidad</label>
<select id="opcionsUpdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

      <option value="true" >Si esta disponible</option>
      <option value="false" >No esta disponible</option>
  </select>


</div>

            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div class="mb-5 content-center justify-center">

<button id="Updatebtn" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">actualizar producto</button>

                <button id="closeModalUpdate" data-modal-hide="small-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cerrar</button>
            </div>
        </div>
    </div>
</div>

    `

    let fila = document.querySelector("tbody")
    obteniendoProductos.forEach(item => {
        


            const disponibilidadtransform = () => {
                if (item.disponibilidad == true) {
                    return "si esta disponible";
                }else if (item.disponibilidad == false) {
                    return "no esta disponible";
    
                }
            }

            let valorDisponibilidad = disponibilidadtransform()


            


    
    let contenedorDeProductos = document.createElement("tr")
    contenedorDeProductos.className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    

    contenedorDeProductos.innerHTML = `
    
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <p>${item.nombre}</p>
            </th>
            <td class="px-6 py-4 hidden md:table-cell">
                <p>${item.descripcion}</p>
            </td>
            <td class="px-6 py-4">
                <p>${item.precio}</p>
            </td>
            <td class="px-6 py-4 hidden lg:table-cell">
                <p>${valorDisponibilidad}</p>
            </td>
            <td class="px-6 py-4">
    
            <button id="delete-${item._id}" value="${item._id}" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">borrar</button>
    
    <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
    <!-- Modal toggle -->
    <button id="update-${item._id}" value=${item._id}  data-modal-target="small-modal" data-modal-toggle="small-modal" class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Small modal
    </button>
    </div>

            </td>
    

    
    `

    fila.appendChild(contenedorDeProductos)
        
    let updateProduct = document.getElementById(`update-${item._id}`)

    // set the modal menu element
const $targetEl = document.getElementById('small-modal');
const options = {
  placement: 'center',
  backdrop: 'dynamic',
  backdropClasses:
      'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  },
};

// instance options object
const instanceOptions = {
id: 'modalEl',
override: true
};
const modal = new Modal($targetEl, options, instanceOptions);


    updateProduct.addEventListener("click", () => {


      document.getElementById("nombreUpdate").placeholder = item.nombre
      document.getElementById("descripcionUpdate").placeholder = item.descripcion
      document.getElementById("precioUpdate").placeholder = item.precio
      document.getElementById("opcionsUpdate").value = (item.disponibilidad == true) ? "si esta disponible" : "No esta disponible"
      
      modal.show();



      let updateById = document.getElementById("Updatebtn")

      updateById.addEventListener("click", async() => {
  
        let nombre = document.getElementById("nombreUpdate").value
        let descripcion = document.getElementById("descripcionUpdate").value
        let precio = document.getElementById("precioUpdate").value
        let opctions = document.getElementById("opcionsUpdate").value
  
        const newData = {
          nombre: nombre,
          descripcion : descripcion,
          precio: precio,
          disponibilidad : opctions
        }
  
        await updateProductById(item._id, newData)
        await getProductos()
        await getProductos()
  
        
        modal.hide()
        Swal.fire({
          title: "producto actualizado!",
          text: "El producto se actualizo exitosamente!",
          icon: "success"
        });
  
  
      })
      
      
      
    })





    let closeModalUpdate = document.getElementById("closeModalUpdate")

    closeModalUpdate.addEventListener("click", () => {
      modal.hide()
    })

    let closeModalByX = document.getElementById("closeModalX")

    closeModalByX.addEventListener("click", () => {
      modal.hide()
    })

    let deleteProducto = document.getElementById(`delete-${item._id}`)
    
    deleteProducto.addEventListener("click", async() => {
       
        let soundWarning = new Howl({
            src: ["../../warning.mp3"],
            volume: 0.5,
          });

          let soundSuccess = new Howl({
            src: ["../../success.mp3"],
            volume: 0.5,
          });
  
          const lanzarConfetti = () => {
            confetti({
              particleCount: 100,
              startVelocity: 30,
              spread: 360,
              origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
              }
            });
          }

          const initSound = () => {
            soundWarning.play();
          }

          const initSoundSucess = () =>{
            soundSuccess.play()
          }

          initSound()

        Swal.fire({
            title: "Esta seguro de eliminarlo?",
            text: "Esta acción es inreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrarlo!"
          }).then(async(result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "eliminado!",
                text: "borrastes el producto exitosamente.",
                icon: "success"
              });
              const response = await deleteProductByID(deleteProducto.value)
              console.log(await response);
              await getProductos()
              initSoundSucess()
              lanzarConfetti()
            }
          });
    })
    


    });


    
}

export default getProductos