// src/Components/Catalog.jsx

import React, { useState } from 'react';

const Catalog = () => {
    const items = [
        { code: '001', title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald', year: 1925, status: 'Disponible' },
        { code: '002', title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', year: 1967, status: 'No Disponible' },
        { code: '003', title: '1984', author: 'George Orwell', year: 1949, status: 'Disponible' },
        { code: '004', title: 'Moby Dick', author: 'Herman Melville', year: 1851, status: 'No Disponible' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter(item =>
        item.code.includes(searchTerm) || item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#f9f9f9] rounded-lg shadow-md">
            <h1 className="text-4xl font-serif text-center mb-6 text-[#4A3B25]">Catálogo de Libros</h1>
            <input
                type="text"
                placeholder="Buscar por código o título"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="mb-4 p-3 border border-[#d6c8b2] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#7A9B7D] font-serif"
            />
            <table className="min-w-full bg-white rounded-lg shadow-lg border border-[#e0e0e0]">
                <thead className="bg-[#e3d3b0]">
                    <tr>
                        <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">Código</th>
                        <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">Título</th>
                        <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">Autor</th>
                        <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">Año de Publicación</th>
                        <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <tr key={item.code} className="hover:bg-[#f2e7d5] transition duration-200 ease-in-out">
                                <td className="py-2 px-5 border-b text-center font-serif">{item.code}</td>
                                <td className="py-2 px-5 border-b text-center font-serif">{item.title}</td>
                                <td className="py-2 px-5 border-b text-center font-serif">{item.author}</td>
                                <td className="py-2 px-5 border-b text-center font-serif">{item.year}</td>
                                <td className="py-2 px-5 border-b text-center font-serif">{item.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="py-2 border-b text-center font-serif">No se encontraron resultados</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Catalog;
