import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../lib/lib'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        const{nombre,segundoNombre,apellidos,nombreRepresentante,apellidoRepresentante,parentesco,telefono,direccion,direcciondos,ciudad,estado,pais} = req.body;
        const paciente = await db.paciente.create({
            data: {
                nombre: nombre,
                segundoNombre: segundoNombre,
                apellidos: apellidos,
                nombreRepresentante: nombreRepresentante,
                apellidoRepresentante: apellidoRepresentante,
                parentesco: parentesco,
                telefono: telefono,
                direccion: direccion,
                direcciondos: direcciondos,
                ciudad: ciudad,
                estado: estado,
                pais: pais,
            }
        });
        res.status(200).json({success: true, response: paciente});
    }else{
        res.status(405).json({error: 'No se pudo'});
    }
    
}