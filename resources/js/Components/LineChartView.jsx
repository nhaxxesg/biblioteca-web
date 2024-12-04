import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFetch } from "./useFetch";

function LineChartView() {
  const { data, loading, error } = useFetch('http://127.0.0.1:8000/solicitud');

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar datos: {error}</p>;

  // Mapeo de números de meses a nombres de meses
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Procesar los datos para agrupar por mes y año
  const processedData = data.reduce((acc, item) => {
    const date = new Date(item.fSolicitud);
    const monthYear = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    const existing = acc.find(entry => entry.monthYear === monthYear);

    if (existing) {
      existing.cantidad += 1;
    } else {
      acc.push({ monthYear, cantidad: 1 });
    }

    return acc;
  }, []);

  return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={processedData} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="monthYear"
              interval={0}
              label={{ value: 'Mes y Año', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Cantidad de Solicitudes', angle: -90, position: 'insideleft' }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cantidad" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
  );
}

export default LineChartView;
