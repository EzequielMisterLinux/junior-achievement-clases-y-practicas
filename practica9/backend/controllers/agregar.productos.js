import ProductModel from "../models/productos.model.js";


const AgregarProducto = async (req, res) => {
    
    const {
        nombre,
        descripcion,
        precio,
        disponibilidad
    } = req.body

    if (!nombre || !descripcion || !precio || !disponibilidad) {
        return res.status(400).json({
            msj : "todos los campos del producto son requiridos"
        })
    }


    try {
        
        let guardandoInformacion = await ProductModel({
            nombre,
            descripcion,
            precio,
            disponibilidad
        })

        guardandoInformacion.save()

        res.status(201).json({msj:"producto creado exitosamente", guardandoInformacion})


    } catch (error) {
        console.error(error);
        
    }
}

export default AgregarProducto