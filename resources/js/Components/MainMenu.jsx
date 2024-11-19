import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function MainMenu() {
  const handleButtonClick = (buttonName) => {
    Inertia.visit(route(buttonName));
  };

  return (
    <AuthenticatedLayout
      header={
        <div >
          <h1 className="text-3xl font-bold text-gray-800 ">Sistema Biblioteca</h1>
        </div>
      }
      children={
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6e6e6]">
          <div className="grid grid-cols-3 gap-32 ">
            <div className="col-start-1 row-start-1  w-72 h-72">

              <button
                className="w-full h-full rounded-lg shadow-md bg-[#d6cadd] flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-[#ffffff] hover:bg-[#c7bacf] hover: duration-300"
                onClick={() => handleButtonClick('menuprestamos')}
              >
                <img src='/assets/libros.png' alt="Imagen 1" className="w-24 h-24" />
                <h1 className="text-center text-2xl font-semibold">Prestados</h1>
              </button>
            </div>

            <div className="col-start-2 row-start-1 w-72 h-72">
              <button
                className="w-full h-full rounded-lg shadow-md bg-[#d6cadd] flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-[#ffffff] hover:bg-[#c7bacf] hover: duration-300"
                onClick={() => handleButtonClick('menucatalogo')}
              >
                <img src='/assets/libro.png' alt="Imagen 2" className="w-24 h-24" />
                <h1 className="text-center text-2xl font-semibold ml-4">Catalogo</h1>
              </button>
            </div>

            <div className="col-start-3 row-start-1 w-72 h-72">
              <button
                className="w-full h-full rounded-lg shadow-md bg-[#d6cadd] flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-[#ffffff] hover:bg-[#c7bacf] hover: duration-300"
                onClick={() => handleButtonClick('menudevolucion')}
              >
                <img src='/assets/devolucion.png' alt="Imagen 2" className="w-24 h-24" />
                <h1 className="text-center text-2xl font-semibold ">Libros Devueltos</h1>
              </button>
            </div>

            <div className="col-start-1 row-start-2 col-span-3 w-72 h-72">
              <button
                className="w-full h-full rounded-lg shadow-md bg-[#d6cadd] flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-[#ffffff] hover:bg-[#c7bacf] hover: duration-300"
                onClick={() => handleButtonClick('Botón 4')}
              >
                <img src='/assets/estadistica.png' alt="Imagen 2" className="w-24 h-24" />
                <h1 className="text-center text-2xl font-semibold ml-2">Informacion del usuario</h1>
              </button>
            </div>

            <div className="col-start-2 row-start-2 w-72 h-72">
              <button
                className="w-full h-full rounded-lg shadow-md bg-[#d6cadd] flex items-center justify-center p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-[#ffffff] hover:bg-[#c7bacf] hover: duration-300"
                onClick={() => handleButtonClick('menusanciones')}
              >
                <img src='/assets/sancion.png' alt="Imagen 2" className="w-24 h-24 object-cover" />
                <h1 className="text-center text-2xl font-semibold ">Sanciones</h1>
              </button>
            </div>
          </div>

        </div>
      }
    >

    </AuthenticatedLayout>


  );
};

export default MainMenu;
