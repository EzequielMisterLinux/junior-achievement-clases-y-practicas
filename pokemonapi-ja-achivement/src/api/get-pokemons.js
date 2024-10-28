
const obtenerTodosLosPokemones = async () => {
    
    try {

        const respuestaDelServidor = await fetch("https://pokeapi.co/api/v2/pokemon")

        let informacionDeLosPokemones = await respuestaDelServidor.json()

        let {results} = await informacionDeLosPokemones
        
        let app = document.getElementById("app")
        for(let item of results){

            let nombre = await item.name            

            let url = item.url

            
            const respuestaDelServidor = await fetch(url)

            let informacionCompleta = await respuestaDelServidor.json()  
            
            
            let {sprites} = await informacionCompleta

            let {front_default} = await sprites

            let {other} = await sprites

            let {showdown} = await other

            let {front_default: front} = await showdown

            console.log(front);
            
            
            
            
            
            let imagen = front_default

           let contedorDePokemones = document.createElement("section")

           contedorDePokemones.innerHTML = `
            
                <p>${nombre}</p>
                <img src=${front} />
            
            `

            app.appendChild(contedorDePokemones)
            

        }
        
        
    } catch (error) {
        console.error(error);
        
    }

}

export default obtenerTodosLosPokemones