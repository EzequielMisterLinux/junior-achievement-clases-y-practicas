import obtenerTodosLosPokemones from "./src/api/get-pokemons";

let head = document.getElementById("header")

const Header = () => {

    let header = document.createElement("header")

    header.innerHTML= `
    
    <ul>
    
        <li>Buscar Pokemones</li>
        <li>acerca del programador</li>
    </ul>

    `
    head.appendChild(header)


}


document.addEventListener('DOMContentLoaded', Header(),obtenerTodosLosPokemones())