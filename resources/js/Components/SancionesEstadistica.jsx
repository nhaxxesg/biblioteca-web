import React from 'react';
import { useFetch } from "./useFetch";


function SancionesEstadistica() {

    const { data } = useFetch("http://127.0.0.1:8000/sanction/1");
    const recordCount = data ? data.length : 0;

    return (
        <div className='p-6 border border-[#acacaf] rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-zinc-100'>
            <h2>Total De Sanciones</h2>
            {recordCount !== 0 ? (
                <div>
                    <p>Sanciones <strong>{recordCount}</strong></p>
                </div>
            ) : (
                <div>
                    <p>No cuentas con sanciones</p>
                </div>
            )}


        </div>
    );
};
export default SancionesEstadistica;