import React, { useState } from "react";
import { useFetch } from "./useFetch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Loading from "./Loading";
import { useForm } from "@inertiajs/react";

function Prestamos() {

    const [url, setUrl] = useState("http://127.0.0.1:8000/categoria");
    const { data: libro, loading, error } = useFetch(url, true);
    const { data: catalogo } = useFetch("http://127.0.0.1:8000/category");


    const [writelabel, setwritelabel] = useState(null);
    const libroseleccionado = libro?.find(book => book.idlibro === writelabel);


    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");

    const filteredBooks = libro
        ? libro.filter((book) => {
            const matchesTitle = book.nombrelibro?.toLowerCase().includes(searchTitle.toLowerCase());
            const matchesAuthor = book.nombreautor?.toLowerCase().includes(searchAuthor.toLowerCase());
            return matchesTitle && matchesAuthor;
        })
        : [];

    const handleBookSelection = (idLibro) => {
        setData("idlibro", idLibro);
        setwritelabel(idLibro);
    };

    const handleCategoryChange = (event) => {
        const selectedId = event.target.value;
        setUrl(`http://127.0.0.1:8000/categoria/${selectedId}`);
    };

    const { data, setData, post, errors, reset } = useForm({
        idLector: "1",
        idlibro: "",
        fSolicitud: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("solicitud.store"), {
            onSuccess: () => {
                reset();
                setwritelabel(null);
            }
        });
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

                    <div className="grid grid-cols-3 gap-5">
                        <form onSubmit={handleSubmit} className="col-start-1 col-span-2">
                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">Fecha Solicitud:</label>
                                <input type="date"
                                    value={data.fSolicitud}
                                    onChange={(e) => setData("fSolicitud", e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                ></input>
                            </div>
                            <div>
                                <button type="submit" className="mt-4 bg-[#dabef8] text-black text-sm px-4 py-2 rounded hover:bg-[#c596f8] w-64" >Enviar Solicitud</button>
                            </div>
                        </form>

                        <div>
                            {libroseleccionado && (
                                <div className="mt-4 p-4 border rounded bg-gray-100">
                                    <h3 className="text-lg font-bold">Libro seleccionado:</h3>
                                    <p>Nombre: {libroseleccionado.nombrelibro}</p>
                                    <p>Autor: {libroseleccionado.nombreautor}</p>
                                    <p>Categoría: {libroseleccionado.categoria}</p>
                                    <p>Disponibilidad: {libroseleccionado.disponibilidad}</p>
                                </div>
                            )}
                        </div>

                        <div className="col-start-1 row-start-2">

                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-1">Buscar por Título:</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={searchTitle}
                                    onChange={(e) => setSearchTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-start-2 row-start-2">
                            <div className="mb-4">
                                <label className="block font-semibold text-gray-700 mb-1">Buscar por Autor:</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={searchAuthor}
                                    onChange={(e) => setSearchAuthor(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6 col-start-1 col-span-4 row-start-3">
                            <label className="block font-semibold text-gray-700 mb-1">Filtrar por Categoría:</label>
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
                                <thead className="bg-[#5ca4eb] text-white">
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
                                    {filteredBooks?.length > 0 ? (
                                        filteredBooks.map((book) => (
                                            <tr key={book.idlibro}>
                                                <td className="py-2 px-4">{book.nombrelibro}</td>
                                                <td className="py-2 px-4">{book.nombreautor}</td>
                                                <td className="py-2 px-4">{book.disponibilidad}</td>
                                                <td className="py-2 px-4">{book.categoria}</td>
                                                <td className="py-2 px-4 text-center">
                                                    {book.disponibilidad !== "Prestado" ? (
                                                        <button
                                                            onClick={() => handleBookSelection(book.idlibro)}
                                                            className={`px-3 py-1 rounded ${writelabel === book.idlibro
                                                                    ? "bg-[#f1c71c] text-white"
                                                                    : "bg-green-500 text-white hover:bg-green-600"
                                                                }`}
                                                        >
                                                            {writelabel === book.idlibro ? "Seleccionado" : "Seleccionar"}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-red-500 text-white px-3 py-1 rounded cursor-not-allowed"
                                                            disabled
                                                        >
                                                            Bloqueado
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                No se encontraron resultados.
                                            </td>
                                        </tr>
                                    )}
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


