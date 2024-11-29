import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Loading from "./Loading";

function Sanciones() {

  const { data, loading } = useFetch(
    "http://127.0.0.1:8000/sanction/1"
  );

  const [openModal, setOpenModal] = useState(null);
  const sancionSeleccionada = data?.find(sancion => sancion.idSancion === openModal);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (openModal) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [openModal]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setOpenModal(null);
    }, 300);
  };

  return (
    <AuthenticatedLayout
      header={
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Sanciones</h1>
        </div>
      }

      children={
        <div className="min-h-screen flex items-center justify-center">

          {loading ? (
            <Loading />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl p-4">
              {data?.map((sancion) => (
                <div className="p-6 border border-[#acacaf] rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-zinc-100">
                  <h2 className="text-lg font-semibold text-[#777777]">
                    Devolucion de: {sancion.titulo}
                  </h2>

                  <br />
                  {sancion.estado !== 0 ? (
                    <>
                      <p className="text-[#777777]">Fecha del Pago : {sancion.fPago}</p>
                      <br/>
                      <span
                        className="inline-block bg-[#b6ffb4] text-black-600 text-sm px-3 py-1 rounded-full"
                      >
                        Pagado

                      </span>
                    </>
                  ) : (
                    <>
                      <p className="text-[#777777]">Fecha del Pago: N/A</p>
                      <br/>
                      <span
                        className="inline-block bg-[#ffcaca] text-black-600 text-sm px-3 py-1 rounded-full"
                      >
                        No Pagado

                      </span>
                    </>
                  )}
                  <br />
                  <button
                    onClick={() => setOpenModal(sancion.idSancion)}
                    className="mt-4 bg-[#dabef8] text-black text-sm px-4 py-2 rounded hover:bg-[#c596f8]"
                  >
                    Ver detalles
                  </button>
                </div>
              ))}
            </div>
          )}

          {openModal && sancionSeleccionada && (
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"
                }`}
              onClick={handleClose}
            >
              <div
                className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 ${isAnimating
                  ? "scale-100 translate-y-0 opacity-100"
                  : "scale-95 opacity-0 translate-y-10"
                  }`}
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro del modal
              >
                <h2 className="text-lg font-semibold text-black-600 uppercase">
                  {sancionSeleccionada.titulo}
                </h2>
                <p className="text-[#505050] mt-2">Detalles: {sancionSeleccionada.detalles}</p>
                <p className="text-[#505050] mt-2">Fecha del Prestamo: {sancionSeleccionada.fPrestamo}</p>
                <p className="text-[#505050] mt-2">Fecha Estimada de la Devolucion: {sancionSeleccionada.fDevolucionEsperada}</p>
                <p className="text-[#505050] mt-2">Fecha Real de la Devolucion: {sancionSeleccionada.fDevolucion}</p>
                <p className="text-[#777777] mt-2">
                  Monto De la multa:{" "}
                  <span className="text-[#777777] font-semibold">S/.{sancionSeleccionada.monto}</span>
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 bg-[#dabef8] text-black text-sm px-4 py-2 rounded hover:bg-[#c596f8]"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      }
    ></AuthenticatedLayout>
  )
}

export default Sanciones;
