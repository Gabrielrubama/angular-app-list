const Producto = require("../models/Producto");




exports.crearProducto = async(req, res) => {
        try {
            let producto;

            //creamos el producto
            producto = new Producto(req.body);

            await producto.save();
            res.status(200).send(producto);

        } catch (error) {
            console.log(error);
            res.status(500).send('Error encontrdo')
        }
};

exports.obtenerProductos = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Error encontrdo')
    }
};

exports.actualizarProductos = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No exite el producto'})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id },producto, { new: true })
        res.json(producto);

        
    } catch (error) {
        console.log(error);
            res.status(500).send('Error encontrdo')
    }
};


exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No exite el producto'})
        }

        res.json(producto);
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Error encontrdo')
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        
        if (!producto) {
            res.status(404).json({ msg: 'No exite el producto'})
        }

        await Producto.findByIdAndDelete({ _id: req.params.id })
        res.json({msg: 'producto eliminado exitosamente'});
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Error encontrdo')
    }
}