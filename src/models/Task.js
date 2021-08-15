import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean
    }
}, {
    timestamps: true,
    versionKey: false
});

// Este modulo permite realizar la paginación
taskSchema.plugin(mongoosePaginate);

// El model es para interactuar con la db en el código, ya q nos devuelve un objeto con métodos
// El Schema es para la base de datos
export default model('Task', taskSchema);

