import React, { useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import { useFetch } from "./useFetch";
import Loading from "./Loading";

function Catalog() {


    const { data, loading, error } = useFetch(
        "http://127.0.0.1:8000/libroautor"
    );

    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-gray-800">
                    Sistema de Catálogos
                </h1>
            }
            children={
                <div className="flex">
                    {/* Barra lateral */}
                    <div className="w-1/4 bg-[#f4f4f4] p-4 border-r border-gray-200">
                        <h2 className="font-semibold text-lg text-[#4A3B25] mb-4">
                            Filtrar por Área
                        </h2>

                        <div className="space-y-3">
                            <label className="block text-[#4A3B25] font-medium">
                                Selecciona un Área
                            </label>
                            <select

                                className="w-full p-3 border border-[#d6c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A9B7D]"
                            >
                                <option value="Todos">Todas las Áreas</option>
                                {data?.map((Category) => (

                                    <option>{Category.categoria}</option>

                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Contenido principal (Tabla de Libros) */}
                    <div className="w-3/4 p-6 bg-[#f9f9f9] rounded-lg">
                        <h1 className="text-4xl font-serif text-center mb-6 text-[#4A3B25]">
                            Catálogo de Libros
                        </h1>

                        {/* Búsqueda y Filtros */}
                        <div className="flex gap-4 mb-4 justify-center">
                            <input
                                type="text"
                                placeholder="Buscar por código o título"
                                className="p-3 border border-[#d6c8b2] rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B7D] font-serif"
                            />
                        </div>

                        {/* Filtro de Estado */}
                        <div className="flex gap-2 mb-4 justify-center">
                            <button

                                className={'px-4 py-2 border-b-2 transition-all duration-200'}
                            >
                            </button>
                        </div>

                        {/* Tabla de Resultados */}
                        <table className="min-w-full bg-white rounded-lg shadow-lg border border-[#e0e0e0]">
                            {error && <li>Error: {error}</li>}
                            <thead className="bg-[#009789]">
                                <tr>
                                    <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                        Título
                                    </th>
                                    <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                        Autor
                                    </th>
                                    <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                        Estado
                                    </th>
                                    <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                        Categoria
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.map((Book) => (
                                    <tr>
                                        <td>{Book.nombrelibro}</td>
                                        <td>{Book.nombreautor}</td>
                                        <td>{Book.disponibilidad}</td>
                                        <td>{Book.categoria}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {loading && <Loading></Loading>}
                    </div>
                </div>
            }
        />
    );
};

export default Catalog;
