import NavLink from '@/Components/NavLink';

function Asidebar() {
    return (
        <aside id="sidebar" class="bg-[#232d30] text-white w-64 min-h-screen p-6 hidden md:block">
            <h2 class="text-2xl font-bold mb-6">Biblioteca</h2>
            <nav class="space-y-4">

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink
                        href={route('mainmenu')}
                        active={route().current('mainmenu')}
                    >
                        <p className='text-white transition duration-150 ease-in-out hover:text-[#00beac] focus:outline-none'>Menu</p>
                    </NavLink>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink
                        href={route('menuprestamos')}
                        active={route().current('menuprestamos')}
                    >
                        <p className='text-white transition duration-150 ease-in-out hover:text-[#00beac] focus:outline-none'>Prestamos</p>
                    </NavLink>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink
                        href={route('menudevolucion')}
                        active={route().current('menudevolucion')}
                    >
                        <p className='text-white transition duration-150 ease-in-out hover:text-[#00beac] focus:outline-none'>Devoluciones</p>
                    </NavLink>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink
                        href={route('menusanciones')}
                        active={route().current('menusanciones')}
                    >
                        <p className='text-white transition duration-150 ease-in-out hover:text-[#00beac] focus:outline-none'>Sanciones</p>
                    </NavLink>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink
                        href={route('menucatalogo')}
                        active={route().current('menucatalogo')}
                    >
                        <p className='text-white transition duration-150 ease-in-out hover:text-[#00beac] focus:outline-none'>Catalogo</p>
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
};
export default Asidebar;