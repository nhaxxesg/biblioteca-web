import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Devoluciones() {
    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Devolución de Libros</h1>
                </div>
            }
            children={
                <div className="p-6">
                    {/* Fila de información del usuario */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Nombre y Apellidos:</label>
                            <p>Juan Pérez</p>
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Tipo de Usuario:</label>
                            <p>Estudiante</p>
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Seleccionar Semestre:</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                            </select>
                        </div>
                    </div>

                    {/* Campos de filtro */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Buscar por Título:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ingresa el título"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Buscar por Autor:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ingresa el autor"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Filtrar por Estado:</label>
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Todos</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Devuelto">Devuelto</option>
                            </select>
                        </div>
                    </div>

                    {/* Tabla de devoluciones */}
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-blue-500 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Título</th>
                                    <th className="py-2 px-4 text-left">Autor</th>
                                    <th className="py-2 px-4 text-left">Estado</th>
                                    <th className="py-2 px-4 text-center">Fecha de Devolución</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2 px-4">El principito</td>
                                    <td className="py-2 px-4">Antoine de Saint-Exupéry</td>
                                    <td className="py-2 px-4">Pendiente</td>
                                    <td className="py-2 px-4 text-center">10/11/2024</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Breve historia del tiempo</td>
                                    <td className="py-2 px-4">Stephen Hawking</td>
                                    <td className="py-2 px-4">Devuelto</td>
                                    <td className="py-2 px-4 text-center">05/11/2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        >
        </AuthenticatedLayout>
    );
}

export default Devoluciones;
