const express = require('express');
const connection = require('./config/db.js')
const cors = require('cors')

//creamos el servidor
 const app= express();

 //conctamos a la base de datos
 connection();
 app.use(cors());

app.use(express.json());

 app.use('/api/productos', require('./routes/producto.js'));

 app.listen(4000, () => {
    console.log('Server on port 4000')
 });