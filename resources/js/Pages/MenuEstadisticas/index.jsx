import LineChartView from "@/Components/LineChartView";
import SancionesEstadistica from "@/Components/SancionesEstadistica";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Estadistica() {
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h1 className="text-3xl font-bold text-gray-800">Estadisticas</h1>
                }
                children={
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <h1 className="text-center font-bold text-2x1">Solicitudes por Mes</h1>
                            <LineChartView />
                        </div>

                        <div className="">
                            <SancionesEstadistica />
                        </div>
                    </div>

                }
            >
            </AuthenticatedLayout>
        </div>

    );
};
export default Estadistica;