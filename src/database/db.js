import mongoose from 'mongoose';
import colors from 'colors';

(async () => {
    try {
        const db = await mongoose.connect(process.env.URI);
        console.log("Conectado a MongoDB: ".green + `${db.connection.name}`.yellow);
    } catch (error) {
        console.log(`fallo la conexion a MongoDB ${error}`.red);
    }
})();