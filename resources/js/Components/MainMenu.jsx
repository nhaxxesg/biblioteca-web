import React from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function MainMenu() {
    const handleButtonClick = (buttonName) => {
        Inertia.visit(route(buttonName));
    };

    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-gray-800">
                    Sistema de Biblioteca
                </h1>
            }
            children={
                <div className="min-h-screen space-y-100 flex flex-col items-center justify-center bg-[#e6e6e6]">
                    <div className="grid grid-cols-6 gap-4 ">
                        <div className="col-start-1 row-start-1  w-30 h-25 ">
                            <button
                                className="w-full h-full rounded-lg shadow-md "
                                onClick={() =>
                                    handleButtonClick("menuprestamos")
                                }
                            >
                                <img
                                    src="/assets/libros.png"
                                    alt="Imagen 1"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>

                        <div className="col-start-2 row-start-1 bg-[#e0e0e0] w-30 h-25">
                            <h1 className="text-center ">Prestados</h1>
                            <h1>Nro de libros Prestados:</h1>
                        </div>

                        <div className="col-start-3 row-start-1 w-30 h-25">
                            <button
                                className="w-full h-full rounded-lg shadow-md "
                                onClick={() => handleButtonClick("Botón 2")}
                            >
                                <img
                                    src="/assets/libro.png"
                                    alt="Imagen 2"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>

                        <div className="col-start-4 row-start-1 bg-[#e0e0e0] w-30 h-25">
                            <h1 className="text-center ">Catalogo</h1>
                        </div>
                        <div className="col-start-5 row-start-1 w-30 h-25">
                            <button
                                className="w-full h-full rounded-lg shadow-md "
                                onClick={() => handleButtonClick("Botón 3")}
                            >
                                <img
                                    src="/assets/devolucion.png"
                                    alt="Imagen 2"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>
                        <div className="col-start-6 row-start-1 bg-[#e0e0e0] w-30 h-25">
                            <h1 className="text-center ">Libros Devueltos</h1>
                        </div>
                        <div className="col-start-1 row-start-2 w-30 h-25">
                            <button
                                className="w-full h-full rounded-lg shadow-md "
                                onClick={() => handleButtonClick("Botón 4")}
                            >
                                <img
                                    src="/assets/estadistica.png"
                                    alt="Imagen 2"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>
                        <div className="col-start-2 row-start-2 bg-[#e0e0e0] w-30 h-25">
                            <h1 className="text-center ">
                                Informacion del usuario
                            </h1>
                        </div>
                        <div className="col-start-3 row-start-2 w-30 h-25">
                            <button
                                className="w-full h-full rounded-lg shadow-md "
                                onClick={() => handleButtonClick("Botón 5")}
                            >
                                <img
                                    src="/assets/sancion.png"
                                    alt="Imagen 2"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </div>
                        <div className="col-start-4 row-start-2 bg-[#e0e0e0] w-30 h-25">
                            <h1 className="text-center ">Sanciones</h1>
                        </div>
                    </div>
                </div>
            }
        ></AuthenticatedLayout>
    );
}

export default MainMenu;
