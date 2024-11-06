import React, { useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
const Catalog = () => {
    const items = [
        {
            code: "001",
            title: "El Gran Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            status: "Disponible",
        },
        {
            code: "002",
            title: "Cien Años de Soledad",
            author: "Gabriel García Márquez",
            year: 1967,
            status: "No Disponible",
        },
        {
            code: "003",
            title: "1984",
            author: "George Orwell",
            year: 1949,
            status: "Disponible",
        },
        {
            code: "004",
            title: "Moby Dick",
            author: "Herman Melville",
            year: 1851,
            status: "No Disponible",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("Todos");

    const handleStatusFilter = (status) => setFilterStatus(status);

    const filteredItems = items
        .filter(
            (item) => filterStatus === "Todos" || item.status === filterStatus
        )
        .filter(
            (item) =>
                item.code.includes(searchTerm) ||
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const highlightMatch = (text) => {
        const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
        if (index === -1) return text;
        return (
            <>
                {text.slice(0, index)}
                <span className="bg-yellow-200">
                    {text.slice(index, index + searchTerm.length)}
                </span>
                {text.slice(index + searchTerm.length)}
            </>
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-gray-800">
                    Sistema de Catalogos
                </h1>
            }
            children={
                <div className="max-w-4xl mx-auto p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                    <h1 className="text-4xl font-serif text-center mb-6 text-[#4A3B25]">
                        Catálogo de Libros
                    </h1>

                    {/* Búsqueda y Filtros */}
                    <div className="flex gap-4 mb-4 justify-center">
                        <input
                            type="text"
                            placeholder="Buscar por código o título"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-3 border border-[#d6c8b2] rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B7D] font-serif"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleStatusFilter("Todos")}
                                className={`px-4 py-2 border-b-2 transition-all duration-200 ${
                                    filterStatus === "Todos"
                                        ? "border-b-[#4A3B25] text-[#4A3B25] font-semibold"
                                        : "border-b-transparent text-[#4A3B25] hover:border-b-[#7A9B7D] hover:text-[#7A9B7D]"
                                }`}
                            >
                                Todos
                            </button>
                            <button
                                onClick={() => handleStatusFilter("Disponible")}
                                className={`px-4 py-2 border-b-2 transition-all duration-200 ${
                                    filterStatus === "Disponible"
                                        ? "border-b-[#4A3B25] text-[#4A3B25] font-semibold"
                                        : "border-b-transparent text-[#4A3B25] hover:border-b-[#7A9B7D] hover:text-[#7A9B7D]"
                                }`}
                            >
                                Disponible
                            </button>
                            <button
                                onClick={() =>
                                    handleStatusFilter("No Disponible")
                                }
                                className={`px-4 py-2 border-b-2 transition-all duration-200 ${
                                    filterStatus === "No Disponible"
                                        ? "border-b-[#4A3B25] text-[#4A3B25] font-semibold"
                                        : "border-b-transparent text-[#4A3B25] hover:border-b-[#7A9B7D] hover:text-[#7A9B7D]"
                                }`}
                            >
                                No Disponible
                            </button>
                        </div>
                    </div>

                    {/* Tabla de Resultados */}
                    <table className="min-w-full bg-white rounded-lg shadow-lg border border-[#e0e0e0]">
                        <thead className="bg-[#009789] ">
                            <tr>
                                <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                    Código
                                </th>
                                <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                    Título
                                </th>
                                <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                    Autor
                                </th>
                                <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                    Año de Publicación
                                </th>
                                <th className="py-3 px-5 text-left text-[#4A3B25] font-semibold">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <tr
                                        key={item.code}
                                        className="hover:bg-[#A7F3D0]  transition duration-200 ease-in-out"
                                    >
                                        <td className="py-2 px-5 border-b text-center font-serif">
                                            {item.code}
                                        </td>
                                        <td className="py-2 px-5 border-b text-center font-serif">
                                            {highlightMatch(item.title)}
                                        </td>
                                        <td className="py-2 px-5 border-b text-center font-serif">
                                            {item.author}
                                        </td>
                                        <td className="py-2 px-5 border-b text-center font-serif">
                                            {item.year}
                                        </td>
                                        <td
                                            className={`py-2 px-5 border-b text-center font-serif ${
                                                item.status === "Disponible"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {item.status}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="py-2 border-b text-center font-serif"
                                    >
                                        No se encontraron resultados
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        ></AuthenticatedLayout>
    );
};

export default Catalog;
