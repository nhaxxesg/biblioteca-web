import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Sanciones() {
    const [sanciones] = useState([
        { ejemplar: "12345", titulo: "El principito", nombreLector: "Juan Pérez", dni: "12345678", fecha: "2024-11-05", detalles: "Retraso en la entrega", monto: "5.00" },
        { ejemplar: "67890", titulo: "Cien años de soledad", nombreLector: "Ana Gómez", dni: "87654321", fecha: "2024-11-01", detalles: "Libro dañado", monto: "10.00" },
        { ejemplar: "54321", titulo: "Don Quijote", nombreLector: "Luis Martínez", dni: "12349876", fecha: "2024-10-30", detalles: "Pérdida de ejemplar", monto: "15.00" },
        { ejemplar: "98765", titulo: "El alquimista", nombreLector: "Marta López", dni: "78945612", fecha: "2024-11-03", detalles: "Retraso en la entrega", monto: "7.50" },
        // Puedes agregar más datos aquí
    ]);

    const seleccionarSancion = (titulo) => {
        alert(`Sanción seleccionada: ${titulo}`);
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
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">ID Ejemplar</th>
                                    <th className="py-2 px-4 text-left">Título</th>
                                    <th className="py-2 px-4 text-left">Nombre Lector</th>
                                    <th className="py-2 px-4 text-left">DNI</th>
                                    <th className="py-2 px-4 text-left">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sanciones.map((sancion, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 px-4">{sancion.ejemplar}</td>
                                        <td className="py-2 px-4">{sancion.titulo}</td>
                                        <td className="py-2 px-4">{sancion.nombreLector}</td>
                                        <td className="py-2 px-4">{sancion.dni}</td>
                                        <td className="py-2 px-4">{sancion.fecha}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Campo de detalles de la sanción */}
                    <div className="mb-4">
                        <label className="block font-semibold text-gray-700 mb-1">Detalles de la sanción:</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-md h-24"
                            placeholder="Ingrese los detalles de la sanción aquí..."
                        ></textarea>
                    </div>

                    {/* Campo de monto */}
                    <div className="mb-4 w-1/4">
                        <label className="block font-semibold text-gray-700 mb-1">Monto:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="0.00"
                        />
                    </div>

                    
                </div>
            }
        >
        </AuthenticatedLayout>
    );
};

export default Sanciones;
