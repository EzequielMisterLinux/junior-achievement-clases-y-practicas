import express from "express"
import { configDotenv } from "dotenv"
import MongoConexion from "./database/conexion.mongodb.js"
import rutasDeLosProductos from "./routers/product.routers.js"
import cors from "cors"
configDotenv()

let puerto = process.env.PORT


const app = express()
app.use(cors())
app.use(express.json())
MongoConexion()
app.use("/api", rutasDeLosProductos)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(puerto, () => console.log(`servidor corriendo en  http://localhost:${puerto}`))
