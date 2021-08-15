// Al ejecutar el método config se va a llamar a la variable env
import { config } from 'dotenv';
config();

// Exportamos la var de entorno con otro nombre
export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksdb'
}