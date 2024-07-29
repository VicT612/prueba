import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/lib'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        const{alergias, inmunizacion, horaRegistro, turno, pacienteId} = req.body;
        const historial = await db.historial.create({
            data: {
                alergias: alergias,
                inmunizacion: inmunizacion,
                horaRegistro: horaRegistro,
                turno: turno,
                pacienteId: pacienteId,
            }
        });
        res.status(200).json({success: true, response: historial});
    }else{
        res.status(405).json({error: 'No se pudo'});
    }
}
