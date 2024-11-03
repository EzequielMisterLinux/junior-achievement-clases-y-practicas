import express from "express"
import AgregarProducto from "../controllers/agregar.productos.js"
import ObteniendoTodosLosProductos from "../controllers/ver-todos-productos.js"
import BorrandoProducto from "../controllers/delete.productos.js"
import ActualizarProducto from "../controllers/actualizando.producto.js"

const rutasDeLosProductos = express.Router()

rutasDeLosProductos.post("/crear-producto", AgregarProducto)

rutasDeLosProductos.get("/obtener-productos", ObteniendoTodosLosProductos)

rutasDeLosProductos.delete("/borrar-productos/:id", BorrandoProducto)

rutasDeLosProductos.put("/actualizar-productos/:id", ActualizarProducto)

export default rutasDeLosProductos