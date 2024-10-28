import ProductModel from "../models/productos.model.js";


const AgregarProducto = async (req, res) => {
    
    const {
        nombre,
        descripcion,
        precio,
        disponibilidad
    } = req.body

    try {
        
        let guardandoInformacion = await ProductModel({
            nombre,
            descripcion,
            precio,
            disponibilidad
        })

        guardandoInformacion.save()

        res.status(201).json({msj:"producto creado exitosamente"})


    } catch (error) {
        console.error(error);
        
    }
}

export default AgregarProducto