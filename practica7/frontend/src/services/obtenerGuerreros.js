import axios from "axios";
import Swal from 'sweetalert2'

const getWarriors = async () => {
    
    try {

        const respuestaServidor = await axios.get("https://dragonball-api.com/api/characters")

        console.log(respuestaServidor);

        let items = respuestaServidor.data.items

        console.log(items);

        let app = document.querySelector("#app")

        for(let item of items){
            console.log(
                item.name,
            
                item.ki,
                item.image
            );

            let contenedorDeGuerreros = document.createElement("div")

            contenedorDeGuerreros.innerHTML = `
            
            <p>${item.name}</p>

            <img src=${item.image} height="300px">
            
            <p >${item.ki}</p>
            <button id="${item.id}">favoritos★</button>
            `



            app.appendChild(contenedorDeGuerreros)
            let warriorid = document.getElementById(`${item.id}`)
            console.log(warriorid);        
            
            warriorid.addEventListener('click', () => {

                Swal.fire({
                    title: "agregaste a este producto exitosamente!",
                    text: `agregaste ${item.name}`,
                    icon: "success"
                    });


                    let creandoFavorito = JSON.parse(localStorage.getItem('warriors')) || []

                    creandoFavorito.push({
                        "id": item.id,
                        "nombre": item.name,
                        "imagen": item.image,
                        "poder": item.ki
                    })


                    localStorage.setItem("warriors", JSON.stringify(creandoFavorito))

                    

                    console.log();
                    
            })

        }


        
        
    } catch (error) {
        console.error(error);
    }
}

export default getWarriors