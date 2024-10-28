

const mostrarGuerreroFavorito = () => {

    let contenedorFavoritos = document.getElementById("favoritos")

    let guerreroFavorito = JSON.parse(localStorage.getItem("warriors")) || []

    console.log(guerreroFavorito);

    let favorito = document.createElement("div")

    // guerreroFavorito.forEach(item => {
    //     favorito.innerHTML = `
    //     <h1>guerreros favoritos</h1>
    //     <p>${item.nombre}</p>
    //     <img src=${item.imagen}>
        
    //     `
    //     contenedorFavoritos.appendChild(favorito)
    // });

    guerreroFavorito.map((item) => {
        favorito.innerHTML = `
        <h1>guerreros favoritos</h1>
        <p>${item.nombre}</p>
        <img src=${item.imagen}>
        
        `
        document.appendChild(favorito)
        
    })
    

}

export default mostrarGuerreroFavorito