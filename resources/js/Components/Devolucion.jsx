import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useFetch } from "./useFetch";
import Loading from "./Loading";

function Devoluciones() {

    const { data, loading } = useFetch(
        "http://127.0.0.1:8000/devolucion/1"
    );


    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-3xl font-bold text-gray-800">Devoluciones</h1>
            }
            children={

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Lista de Devoluciones</h2>

                    {loading ? (
                        <Loading />
                    ) : (
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-[#5ca4eb] text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Libro</th>
                                    <th className="py-2 px-4 text-left">Fecha Préstamo</th>
                                    {/* <th className="py-2 px-4 text-left">Fecha Devolución Estimada</th> */}
                                    <th className="py-2 px-4 text-left">Fecha Devolución Real</th>
                                    {/* <th className="py-2 px-4 text-left">Estado</th> 
                                <th className="py-2 px-4 text-left">Días de Retraso</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((devolucion) => (
                                    <tr key={devolucion.idPrestamo}>
                                        <td className="py-2 px-4">{devolucion.titulo}</td>
                                        <td className="py-2 px-4">{devolucion.fPrestamo}</td>
                                        <td className="py-2 px-4">{devolucion.fDevoluciones}</td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    )}
                </div>
            }

        >

        </AuthenticatedLayout>
    );
}

export default Devoluciones;
