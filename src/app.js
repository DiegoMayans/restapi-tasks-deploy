// APP CONFIG
// Usamos import from mediante babel
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import TasksRoutes from './routes/tasks.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares

// Cors permite habilitar la comunicación entre dominios. Uso a modo de ejemplo (no sirve para nada en la app)
const corsOptions = {};
app.use(cors(corsOptions));

// Morgan nos sirve para ver peticiones en consola 
app.use(morgan('dev'));

// Convierte el req.body a json para que express pueda entenderlo
app.use(express.json());
// Hace lo mismo que express.json pero permite tambien convertir form-data a json
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/', (req, res) => {
    res.json({ "message": 'Welcome to my app' });
});

app.use('/api/tasks', TasksRoutes);

export default app;