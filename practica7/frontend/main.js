import mostrarGuerreroFavorito from "./src/elements/getFavorites";
import getWarriors from "./src/services/obtenerGuerreros";

document.addEventListener("DOMContentLoaded", getWarriors(),
mostrarGuerreroFavorito())