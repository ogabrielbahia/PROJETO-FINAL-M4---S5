import express from 'express';
import { pacienteRouter } from './src/routers/paciente.router.js';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', pacienteRouter)

app.listen(PORT,()=>{
    console.log("Aplication ready")
})