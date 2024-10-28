import express from "express"
import AgregarProducto from "../controllers/agregar.productos.js"

const rutasDeLosProductos = express.Router()

rutasDeLosProductos.post("/crear-producto", AgregarProducto)


export default rutasDeLosProductos