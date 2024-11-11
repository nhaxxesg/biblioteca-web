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

    const { data, loading, error } = useFetch(
        "http://127.0.0.1:8000/loan/1"
    );
    
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
                                {/* <select
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">El principito</option>
                                <option value="">Breve historia del tiempo</option>

                            </select> */}
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
                                {/* <select name="" id="" className="w-full  border border-gray-300 rounded-md">
                                <option value="">1</option>
                                <option value="">2</option>

                            </select> */}
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


                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Título</th>
                                    <th className="py-2 px-4 text-left">Autor</th>
                                    <th className="py-2 px-4 text-left">Categoría</th>
                                    <th className="py-2 px-4 text-center">Seleccionar</th>
                                    <th className="py-2 px-4 text-center">Estado</th>
                                    <th className="py-2 px-4 text-center">Disponibilidad</th>
                                </tr>
                            </thead>
                            {error && <li>Error: {error}</li>}
                            <tbody>
                                {data?.map((Loan) => (
                                    <tr className="border-b">
                                        <td className="py-2 px-4">{Loan.libro}</td>
                                        <td className="py-2 px-4">{Loan.autor}</td>
                                        <td className="py-2 px-4">{Loan.category}</td>
                                        <td className="py-2 px-4 text-center">
                                            <button
                                                onClick={() => seleccionarLibro(Loan.titulo)}
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            >
                                                Seleccionar
                                            </button>
                                        </td>
                                        <td className="py-2 px-4">{Loan.estado}</td>
                                        <td className="py-2 px-4">{Loan.disponibilidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {loading && <Loading></Loading>}

                    </div>

                </div>
            }
        >

        </AuthenticatedLayout>
    );
};

export default Prestamos;


