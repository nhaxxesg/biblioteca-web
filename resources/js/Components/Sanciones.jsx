import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Sanciones() {
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [sancionSeleccionada, setSancionSeleccionada] = useState(null);

    const sanciones = [
        { idEjemplar: "123", titulo: "El principito", nombreLector: "Juan Pérez", dni: "12345678", fecha: "2023-11-05", monto: "20.00", descripcion: "Libro devuelto en mal estado." },
        { idEjemplar: "124", titulo: "Cien años de soledad", nombreLector: "Maria García", dni: "87654321", fecha: "2023-10-15", monto: "15.00", descripcion: "Retraso en la devolución." },
        // Agrega más datos aquí si lo deseas
    ];

    const seleccionarSancion = (sancion) => {
        setMonto(sancion.monto);
        setDescripcion(sancion.descripcion);
        setSancionSeleccionada(sancion.idEjemplar); // Guarda el ID de la sanción seleccionada
    };

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Sanciones</h1>
                </div>
            }
            children={
                <div className="p-6">
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Título</th>
                                    <th className="py-2 px-4 text-left">Nombre Lector</th>
                                    <th className="py-2 px-4 text-left">DNI</th>
                                    <th className="py-2 px-4 text-left">Fecha</th>
                                    <th className="py-2 px-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sanciones.map((sancion, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${
                                            sancionSeleccionada === sancion.idEjemplar ? "bg-gray-200" : ""
                                        }`}
                                    >
                                        <td className="py-2 px-4">{sancion.titulo}</td>
                                        <td className="py-2 px-4">{sancion.nombreLector}</td>
                                        <td className="py-2 px-4">{sancion.dni}</td>
                                        <td className="py-2 px-4">{sancion.fecha}</td>
                                        <td className="py-2 px-4 text-center">
                                            <button
                                                onClick={() => seleccionarSancion(sancion)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                            >
                                                Seleccionar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold text-gray-700 mb-1">Detalles de la sanción:</label>
                        <textarea
                            value={descripcion}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md h-24"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold text-gray-700 mb-1">Monto:</label>
                        <input
                            type="text"
                            value={monto}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            }
        />
    );
}

export default Sanciones;
