import mongoose from 'mongoose';
import config from './config'

// Encerramos la función flecha en paréntesis para que se ejecute inmediatamente
(async () => {
    try {
        const db = await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();