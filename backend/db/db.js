import mongoose from 'mongoose';

const conectarBD = async() => {

    return await mongoose.
    connect ("mongodb+srv://admin:UdeaCiclo4@cluster0.ycv0k.mongodb.net/SoftBox?retryWrites=true&w=majority")
    .then(()=> {
        console.log("Conexion Exitosa");
    })
    .catch((e) => {
        console.error("Error en la conexion a la bd", e);
    });
};

export { conectarBD };
