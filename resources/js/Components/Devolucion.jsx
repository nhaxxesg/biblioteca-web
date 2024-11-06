import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sanciones from "./Sanciones";

function Devoluciones() {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleSancionesClick = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    return (
        <AuthenticatedLayout
            header={<h1 className="text-3xl font-bold text-gray-800">Devoluciones</h1>}
        >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Lista de Devoluciones</h2>
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">ID Devolución</th>
                            <th className="py-2 px-4 text-left">Libro</th>
                            <th className="py-2 px-4 text-left">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-2 px-4">1</td>
                            <td className="py-2 px-4">El principito</td>
                            <td className="py-2 px-4">2024-11-05</td>
                        </tr>
                    </tbody>
                </table>

                <button
                    onClick={handleSancionesClick}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Sanciones
                </button>

                {mostrarModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Sanciones</h3>
                                <button onClick={cerrarModal} className="button-close">
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <Sanciones />
                            </div>
                            <div className="modal-footer">
                                <button onClick={cerrarModal} className="button-close">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

export default Devoluciones;
