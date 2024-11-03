import ProductModel from "../models/productos.model.js";


const BorrandoProducto = async (req, res) => {
    
    const {id} = req.params

    try {

        const borrarProducto = await ProductModel.findByIdAndDelete(id)

        res.status(200).json({
            msj : "producto eliminado exitosamente", borrarProducto
        })

    } catch (error) {

        res.status(500).json({
            msj : "hubo un problema al borrar el producto"
        })
        
    }

}

export default BorrandoProducto