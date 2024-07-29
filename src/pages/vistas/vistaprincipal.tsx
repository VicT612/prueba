import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

interface FormState{
    nombre: string,
    segundoNombre: string,
    apellidos: string,
    nombreRepresentante: string,
    apellidoRepresentante: string,
    parentesco: string,
    telefono: string,
    direccion: string,
    direcciondos: string,
    ciudad: string,
    estado: string,
    pais: string,   
}

export default function VistaPrincipal(){    

    const [form, setForm] = useState<FormState>({
        nombre: '',
        segundoNombre: '',
        apellidos: '',
        nombreRepresentante: '',
        apellidoRepresentante: '',
        parentesco: '',
        telefono: '',
        direccion: '',
        direcciondos: '',
        ciudad: '',
        estado: '',
        pais: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{   
            const response =  await axios.post('/api/registrocliente/registrate', form);
            console.log('success:',response.data.success);
        }catch(error){
            console.error(error);
        }
    };

    return (
        <div className='p-4'>
            <form className='' onSubmit={handleSubmit}>
                <h1 className='text-xl font-bold mb-4'>Datos de filiación</h1>
                <h3 className=''>Nombre</h3>
                <input type='text' className='w-full p-2 border rounded'name='nombre' value={form.nombre} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Nombre</label>
                <input type='text' className='w-full p-2 border rounded'name='segundoNombre' value={form.segundoNombre} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Segundo Nombre</label>
                <input type='text' className='w-full p-2 border rounded'name='apellidos' value={form.apellidos} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Apellidos</label>
                <br />
                <h3 className=''>Representante</h3>
                <input type='text' className='w-full p-2 border rounded' name='nombreRepresentante' value={form.nombreRepresentante} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Nombre</label>
                <input type='text' className='w-full p-2 border rounded'name='apellidoRepresentante' value={form.apellidoRepresentante} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Apellidos</label>
                <input type='text' className='w-full p-2 border rounded'name='parentesco'value={form.parentesco} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Parentezco</label>
                <br />
                <h3 className=''>Contacto Telefónico</h3>
                <input type='number' placeholder='(000) 000-0000' className='w-full p-2 border rounded' name='telefono' value={form.telefono} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Favor ingrese un numero de telefono valido</label>
                <br />
                <h3 className=''>Residencia</h3>
                <input type='text' className='w-full p-2 border rounded'name='direccion' value={form.direccion} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Direccion</label>
                <input type='text' className='w-full p-2 border rounded' name='direcciondos' value={form.direcciondos} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Direccion 2</label>
                <input type='text' className='w-full p-2 border rounded' name='ciudad' value={form.ciudad} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Ciudad</label>
                <input type='text' className='w-full p-2 border rounded' name='estado' value={form.estado} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Estado/Provincia</label>
                <input type='text'className='w-full p-2 border rounded' name='pais' value={form.pais} onChange={handleChange}/><label className='block text-sm font-semibold mb-1'>Pais</label>
                <select className='w-full p-2 border rounded' name='pais' value={form.pais} onChange={handleChange}>
                    <option value='Colombia'>Colombia</option>
                    <option value='Bolivia'>Bolivia</option>
                    <option value='Peru'>Peru</option>
                </select>
                <br/>
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600' >Seguir</button>
            </form>
        </div>
    );
}