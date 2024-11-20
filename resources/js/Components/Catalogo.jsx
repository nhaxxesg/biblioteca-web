import React, { useState } from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import { useFetch } from "./useFetch";
import Loading from "./Loading";

function Catalog() {

    const [url, setUrl] = useState("http://127.0.0.1:8000/categoria");

    const { data: libro, loading: loadinglibro, error: errorlibro } = useFetch(
        url, true
    );

    const { data: categoria } = useFetch(
        "http://127.0.0.1:8000/category"
    );



    const handleCategoryChange = (event) => {
        const selectedId = event.target.value;
        setUrl(`http://127.0.0.1:8000/categoria/${selectedId}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Catalogo</h1>
                </div>
            }
            children={
                <div className="flex">
                    <div className="w-1/4 bg-[#f4f4f4] p-4 border-r border-gray-200">

                        <div className="space-y-3">
                            <label className="block text-[#4A3B25] font-medium">
                                Selecciona un Área
                            </label>
                            <select
                                onChange={handleCategoryChange}

                                className="w-full p-3 border border-[#d6c8b2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A9B7D]"
                            >
                                {categoria?.map((Category) => (

                                    <option value={Category.idCategoria}>{Category.nombreC}</option>

                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-3/4 p-6 bg-[#f9f9f9] rounded-lg">
                        <h1 className="text-4xl text-center mb-6 text-[#000000]">
                            Libros
                        </h1>

                        <div>
                            {loadinglibro ? (
                                <Loading />
                            ) : (
                                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                    <thead className="bg-[#5ca4eb] text-white">
                                        <tr>
                                            <th className="py-2 px-4 text-left">Título</th>
                                            <th className="py-2 px-4 text-left">Autor</th>
                                            <th className="py-2 px-4 text-left">Estado</th>
                                            <th className="py-2 px-4 text-left">Categoria</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {libro?.map((Book) => (
                                            <tr key={Book.idLibro}>
                                                <td className="py-2 px-4">{Book.nombrelibro}</td>
                                                <td className="py-2 px-4">{Book.nombreautor}</td>
                                                <td className="py-2 px-4">{Book.disponibilidad}</td>
                                                <td className="py-2 px-4">{Book.categoria}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>

                    </div>
                </div>
            }
        />
    );
};

export default Catalog;
