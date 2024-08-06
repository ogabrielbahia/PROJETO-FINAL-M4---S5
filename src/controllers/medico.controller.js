import medico from "../models/medico.model";

export const consultaMedicos = (req, res) => {
    res.json(medico);
}