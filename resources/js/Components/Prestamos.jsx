import React, { useState } from "react";
import { useFetch } from "./useFetch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Loading from "./Loading";

function Prestamos() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [libros] = useState([
        { titulo: "El principito", autor: "Antoine de Saint-Exupéry", categoria: "Ficción" },
        { titulo: "El principitote", autor: "royer", categoria: "Ciencia" },
    ]);

    const [url, setUrl] = useState("http://127.0.0.1:8000/categoria");

    const { data: libro, loading, error } = useFetch(
        url, true
    );

    const { data: catalogo } = useFetch(
        "http://127.0.0.1:8000/category"
    );

    const handleCategoryChange = (event) => {
        const selectedId = event.target.value;
        setUrl(`http://127.0.0.1:8000/categoria/${selectedId}`);
    };




    const filtrarLibros = () => {
        return libros.filter(libro =>
            libro.titulo.toLowerCase().includes(titulo.toLowerCase()) &&
            libro.autor.toLowerCase().includes(autor.toLowerCase()) &&
            (categoria === "" || libro.categoria === categoria)
        );
    };

    const seleccionarLibro = (titulo) => {
        alert(`Libro seleccionado: ${titulo}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Préstamo de Libros</h1>
                </div>
            }
            children={
                <div className="p-6">

                    <div className="grid grid-cols-4 grid-rows-2 gap-5">
                        <div className="col-start-1 col-end-3 row-start-1">

                            <label className="block font-semibold text-gray-700 mb-1">Seleccionar Semestre:</label>
                            <select name="" id="" className="w-full  border border-gray-300 rounded-md">
                                <option value="">I</option>
                                <option value="">II</option>
                                <option value="">III</option>
                                <option value="">IV</option>
                                <option value="">V</option>
                                <option value="">VI</option>


                            </select>

                        </div>

                        <div className="row-start-2 col-start-1 ">
                            <label className="block font-semibold text-gray-700 mb-1">Nombre y Apellidos:</label>
                            <p>prueba</p>
                        </div>
                        <div className="row-start-2 col-start-2">
                            <label className="block font-semibold text-gray-700 mb-1">Tipo Usuario:</label>
                            <p>prueba</p>
                        </div>
                        <div className="col-start-3 row-start-1">

                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-1">Buscar por Título:</label>
                                <input
                                    type="text"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="col-start-3  row-start-2">
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-1">Buscar por Autor:</label>
                                <input
                                    type="text"
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mb-6 col-start-4 row-start-1">
                            <label className="block font-semibold text-gray-700 mb-1">Filtrar por Categoría:</label>
                            <select
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Todas</option>
                                <option value="Ficción">Ficción</option>
                                <option value="No ficción">No ficción</option>
                                <option value="Ciencia">Ciencia</option>
                            </select>
                        </div>

                        <div className="mb-6 col-start-1 col-span-4 row-start-3">
                            <select
                                onChange={handleCategoryChange}

                                className="w-full p-3 border border-[#d6c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A9B7D]"
                            >
                                {catalogo?.map((Category) => (

                                    <option value={Category.idCategoria}>{Category.nombreC}</option>

                                ))}
                            </select>
                        </div>


                    </div>

                    <div className="overflow-x-auto">

                        {loading ? (
                            <Loading />
                        ) : (

                            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                <thead className="bg-blue-500 text-white">
                                    <tr>
                                        <th className="py-2 px-4 text-left">Título</th>
                                        <th className="py-2 px-4 text-left">Autor</th>
                                        <th className="py-2 px-4 text-left">Disponibilidad</th>
                                        <th className="py-2 px-4 text-center">Categoría</th>
                                        <th className="py-2 px-4 text-center">Seleccionar</th>
                                    </tr>
                                </thead>
                                {error && <li>Error: {error}</li>}

                                <tbody>
                                    {libro?.map((Book) => (
                                        <tr key={Book.idLibro}>
                                            <td className="py-2 px-4">{Book.nombrelibro}</td>
                                            <td className="py-2 px-4">{Book.nombreautor}</td>
                                            <td className="py-2 px-4">{Book.disponibilidad}</td>
                                            <td className="py-2 px-4">{Book.categoria}</td>
                                            <td className="py-2 px-4 text-center">
                                                {Book.disponibilidad !== "Prestado" ? (
                                                    <>
                                                        
                                                        <button
                                                            onClick={() => seleccionarLibro(Loan.titulo)}
                                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                                        >
                                                            Seleccionar
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        
                                                        <button
                                                            className="bg-red-500 text-white px-3 py-1 rounded cursor-not-allowed"
                                                            disabled
                                                        >
                                                            Bloqueado
                                                        </button>
                                                    </>
                                                )}
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        )}
                    </div>

                </div>
            }
        >

        </AuthenticatedLayout>
    );
};

export default Prestamos;


