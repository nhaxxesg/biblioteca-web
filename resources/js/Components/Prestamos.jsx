import React, { useState } from "react";
import { useFetch } from "./useFetch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Loading from "./Loading";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inertia } from '@inertiajs/inertia';

function Prestamos() {
    const [currentPage, setCurrentPage] = useState(1);
    const [url, setUrl] = useState(`http://127.0.0.1:8000/categoria/1?page=${currentPage}`);
    const { data: libro, loading, error } = useFetch(url, true);
    const { data: catalogo } = useFetch("http://127.0.0.1:8000/category");

    const [writelabel, setwritelabel] = useState(null);
    const libroseleccionado = libro?.find(book => book.idLibro === writelabel);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");
    const TotalLibros = libro ? libro.length : 0;
    const [PaginaFinal, setPaginaFinal] = useState(false);
    const [idCatalogo, setidCatalogo] = useState(1);

    const filteredBooks = libro
        ? libro.filter((book) => {
            const matchesTitle = book.titulo?.toLowerCase().includes(searchTitle.toLowerCase());
            const matchesAuthor = book.autor?.toLowerCase().includes(searchAuthor.toLowerCase());
            return matchesTitle && matchesAuthor;
        })
        : [];

    const handleBookSelection = (idLibro) => {
        setData("idLibro", idLibro);
        setwritelabel(idLibro);
    };

    const handleCategoryChange = (event) => {
        const selectedId = event.target.value;
        setCurrentPage(1);
        setUrl(`http://127.0.0.1:8000/categoria/${selectedId}?page=1`);
        setPaginaFinal(false); 
        setidCatalogo(selectedId);
        
    };

    const handlePageChange = (direction) => {
        const newPage = currentPage + direction;
        if (newPage > 0) {
            if (TotalLibros === 20) {
                setCurrentPage(newPage);
                setUrl(`http://127.0.0.1:8000/categoria/${idCatalogo}?page=${newPage}`);
                setPaginaFinal(false); 
            }else{
                setPaginaFinal(true);

            }
        }
    };

    const { data, setData, post, errors, reset } = useForm({
        idLector: "1",
        idLibro: "",
        fSolicitud: formattedDate,
        estado: "Pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("solicitud.store"), {
            onSuccess: () => {
                reset();
                setwritelabel(null);
                toast.success("Préstamo registrado exitosamente.", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                setTimeout(() => {
                    Inertia.visit('/mainmenu');
                }, 1500);
            },
            onError: () => {
                toast.error("Hubo un error al registrar el préstamo.", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            },
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
                                <button
                                    type="submit"
                                    className="mt-4 bg-[#dabef8] text-black text-sm px-4 py-2 rounded hover:bg-[#c596f8] w-64"
                                >
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                        <div>
                            {libroseleccionado && (
                                <div className="mt-4 p-4 border rounded bg-gray-100">
                                    <h3 className="text-lg font-bold">Libro seleccionado:</h3>
                                    <p>Nombre: {libroseleccionado.titulo}</p>
                                    <p>Autor: {libroseleccionado.autor}</p>
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
                                    <option value={Category.idCategoria} key={Category.idCategoria}>
                                        {Category.nombre}
                                    </option>
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
                                <tbody>
                                    {filteredBooks?.length > 0 ? (
                                        filteredBooks.map((book) => (
                                            <tr key={book.idLibro}>
                                                <td className="py-2 px-4 uppercase">{book.titulo}</td>
                                                <td className="py-2 px-4 uppercase">{book.autor}</td>
                                                <td className="py-2 px-4">
                                                    {book.disponibilidad !== 0 ? "Disponible" : "No disponible"}
                                                </td>
                                                <td className="py-2 px-4 uppercase">{book.categoria}</td>
                                                <td className="py-2 px-4 text-center">
                                                    {book.disponibilidad !== 0 ? (
                                                        <button
                                                            onClick={() => handleBookSelection(book.idLibro)}
                                                            className={`px-3 py-1 rounded ${writelabel === book.idLibro
                                                                ? "bg-[#f1c71c] text-white"
                                                                : "bg-green-500 text-white hover:bg-green-600"
                                                                }`}
                                                        >
                                                            {writelabel === book.idLibro ? "Seleccionado" : "Seleccionar"}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-red-500 text-white px-3 py-1 rounded opacity-50 cursor-not-allowed"
                                                            disabled
                                                        >
                                                            No Disponible
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-4 text-center text-gray-600">
                                                No se encontraron libros que coincidan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => handlePageChange(-1)}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <span className="justify-center">Página {currentPage}</span>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => handlePageChange(1)}
                            disabled={PaginaFinal === true}
                        >
                            Siguiente
                        </button>
                    </div>
                    <ToastContainer />
                </div>
            }
        />
    );
}

export default Prestamos;
