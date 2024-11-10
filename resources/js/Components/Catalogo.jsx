import React, { useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

const Catalog = () => {
    // Datos de ejemplo para los libros
    const items = [
        { code: "001", title: "El Gran Gatsby", author: "F. Scott Fitzgerald", year: 1925, status: "Disponible", area: "Ficción" },
        { code: "002", title: "Cien Años de Soledad", author: "Gabriel García Márquez", year: 1967, status: "No Disponible", area: "Ficción" },
        { code: "003", title: "1984", author: "George Orwell", year: 1949, status: "Disponible", area: "Ciencias" },
        { code: "004", title: "Moby Dick", author: "Herman Melville", year: 1851, status: "No Disponible", area: "Historia" },
    ];

    // Estados para los filtros y la búsqueda
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("Todos");
    const [filterArea, setFilterArea] = useState("Todos");

    // Filtrado de libros
    const filteredItems = items
        .filter(
            (item) => filterStatus === "Todos" || item.status === filterStatus
        )
        .filter((item) => filterArea === "Todos" || item.area === filterArea)
        .filter(
            (item) =>
                item.code.includes(searchTerm) ||
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // Función para resaltar la búsqueda en el título
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
                                value={filterArea}
                                onChange={(e) =>
                                    setFilterArea(e.target.value)
                                }
                                className="w-full p-3 border border-[#d6c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A9B7D]"
                            >
                                <option value="Todos">Todas las Áreas</option>
                                <option value="AP">Agropecuaria</option>
                                <option value="AR">Arte</option>
                                <option value="BI">Biología</option>
                                <option value="BE">Botánica y Ecología</option>
                                <option value="CI">Computación</option>
                                <option value="CO">Contabilidad</option>
                                <option value="Cu">Cusco</option>
                                <option value="DE">Diccionarios y Enciclopedias</option>
                                <option value="EP">Economía y Política</option>
                                <option value="EE">Educación</option>
                                <option value="ED">Electricidad</option>
                                <option value="EA">Electrónica</option>
                                <option value="EF">Enfermería</option>
                                <option value="ES">Estadística</option>
                                <option value="FI">Filosofía</option>
                                <option value="FS">Física</option>
                                <option value="GA">Gastronomía, Alimentación y Recetas</option>
                                <option value="GE">Geografía</option>
                                <option value="HP">Historia del Perú</option>
                                <option value="IN">Inglés</option>
                                <option value="IC">Investigación Científica</option>
                                <option value="LC">Laboratorio Clínico</option>
                                <option value="LE">Lenguaje</option>
                                <option value="LI">Literatura</option>
                                <option value="MT">Matemática</option>
                                <option value="MA">Mecánica Automotriz</option>
                                <option value="MP">Mecánica Producción</option>
                                <option value="MD">Medicina</option>
                                <option value="MG">Minería y Geología</option>
                                <option value="PS">Psicología</option>
                                <option value="QM">Química</option>
                                <option value="RI">Religión</option>
                                <option value="TU">Turismo</option>
                                <option value="EF">Textos de Coordinación de Enfermería</option>
                                <option value="CO-L">Textos de Coordinación de Contabilidad</option>
                                <option value="RP">Revistas</option>
                                <option value="C&E">Contadores & Empresas</option>
                                <option value="AE">Actualidad Empresarial</option>
                                <option value="PIONER">Pioner</option>
                                <option value="CO-P">Proyectos de Contabilidad</option>
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="p-3 border border-[#d6c8b2] rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-[#7A9B7D] font-serif"
                            />
                        </div>

                        {/* Filtro de Estado */}
                        <div className="flex gap-2 mb-4 justify-center">
                            {["Todos", "Disponible", "No Disponible"].map(
                                (status) => (
                                    <button
                                        key={status}
                                        onClick={() => setFilterStatus(status)}
                                        className={`px-4 py-2 border-b-2 transition-all duration-200 ${
                                            filterStatus === status
                                                ? "border-b-[#4A3B25] text-[#4A3B25] font-semibold"
                                                : "border-b-transparent text-[#4A3B7D] hover:border-b-[#7A9B7D] hover:text-[#7A9B7D]"
                                        }`}
                                    >
                                        {status}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Tabla de Resultados */}
                        <table className="min-w-full bg-white rounded-lg shadow-lg border border-[#e0e0e0]">
                            <thead className="bg-[#009789]">
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
                                            className="hover:bg-[#A7F3D0] transition duration-200 ease-in-out"
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
                </div>
            }
        />
    );
};

export default Catalog;
