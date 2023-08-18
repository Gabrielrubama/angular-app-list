const mongoose = require('mongoose');
// require('dotenv').config({ path: 'varibles.env' });

// const conectarDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB_MONGO, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         })
//             console.log('DB conectada')
//     } catch (error) {
//         console.log(error);
//         process.exit(1); //paramos la app
//     }
// }

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/meanproductos");
    console.log("Conectado a mi base de datos");
    
  } catch (error) {
    console.log(error);
    throw new Error("No se ha podido conectar a la base de datos.");
  }
};

module.exports = connection;