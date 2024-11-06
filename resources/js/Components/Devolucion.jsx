import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sanciones from "./Sanciones";

// Función para calcular la diferencia en días entre dos fechas
const calcularDiasRetraso = (fechaEstimada, fechaReal) => {
    const fechaEstimadaDate = new Date(fechaEstimada);
    const fechaRealDate = new Date(fechaReal);
    const diferenciaTiempo = fechaRealDate - fechaEstimadaDate;
    const diasRetraso = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diasRetraso > 0 ? diasRetraso : 0; // Solo contar días positivos
};

function Devoluciones() {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleSancionesClick = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    // Lista de devoluciones con fecha estimada y real
    const devoluciones = [
        {
            libro: "El principito",
            fechaPrestamo: "2024-10-31",
            fechaDevolucionEstimada: "2024-11-05",
            fechaDevolucionReal: "2024-11-06",
            estado: "Devuelto",
        },
        {
            libro: "50 Sombras de Grey",
            fechaPrestamo: "2024-11-01",
            fechaDevolucionEstimada: "2024-11-08",
            fechaDevolucionReal: null, // Aún no devuelto
            estado: "Pendiente",
        },
    ];

    return (
        <AuthenticatedLayout
            header={<h1 className="text-3xl font-bold text-gray-800">Devoluciones</h1>}
        >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Lista de Devoluciones</h2>
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Libro</th>
                            <th className="py-2 px-4 text-left">Fecha Préstamo</th>
                            <th className="py-2 px-4 text-left">Fecha Devolución Estimada</th>
                            <th className="py-2 px-4 text-left">Fecha Devolución Real</th>
                            <th className="py-2 px-4 text-left">Estado</th>
                            <th className="py-2 px-4 text-left">Días de Retraso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devoluciones.map((devolucion, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4">{devolucion.libro}</td>
                                <td className="py-2 px-4">{devolucion.fechaPrestamo}</td>
                                <td className="py-2 px-4">{devolucion.fechaDevolucionEstimada}</td>
                                <td className="py-2 px-4">
                                    {devolucion.fechaDevolucionReal ? devolucion.fechaDevolucionReal : "No devuelto"}
                                </td>
                                <td className="py-2 px-4">{devolucion.estado}</td>
                                <td className="py-2 px-4">
                                    {devolucion.fechaDevolucionReal
                                        ? `${calcularDiasRetraso(devolucion.fechaDevolucionEstimada, devolucion.fechaDevolucionReal)} días`
                                        : "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}

export default Devoluciones;
