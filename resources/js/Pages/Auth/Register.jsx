import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        carrera: '',
        tipo: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Registro de Biblioteca" />

            <form onSubmit={submit} className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto border-t-4 border-green-600">
                <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Registro de Usuario</h2>

                <div>
                    <InputLabel htmlFor="name" value="Nombre Completo" className="font-semibold text-green-900" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2 text-red-500" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="carrera" value="programa de estudios" className="font-semibold text-green-900"/>
                    <select id="carrera" className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="">Seleccione su programa de estudios</option>
                        <option value="electrica">Administracion de servicios de hosteleria y restaurantes</option>
                        <option value="electrica">Contabilidad</option>
                        <option value="informatica">Desarrollo de sistemas de informacion</option>
                        <option value="electrica">Electricidad industrial</option>
                        <option value="electrica">Electronica industrial</option>
                        <option value="electrica">Enfermeria tecnica</option>
                        <option value="electrica">Guia oficial de turismo</option>
                        <option value="mecanica">Laboratori clinico y anatomia patológica</option>
                        <option value="electronica">Mecanica de producción industrial</option>
                        <option value="biomedica">Mecatronica automotriz</option>
                    </select>
                    <InputError message={errors.carrera} className="mt-2 text-red-500" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="tipo" value="Tipo" className="font-semibold text-green-900" />
                    <select id="tipo" className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="">Seleccione un tipo</option>
                        <option value="docente">Docente</option>
                        <option value="estudiante">Estudiante</option>
                    </select>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Correo Electrónico" className="font-semibold text-green-900" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2 text-red-500" />
                </div>
                

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" className="font-semibold text-green-900" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2 text-red-500" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar Contraseña"
                        className="font-semibold text-green-900"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 text-red-500"
                    />
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <Link
                        href={route('login')}
                        className="text-sm text-green-700 underline hover:text-green-900"
                    >
                        ¿Ya estás registrado?
                    </Link>

                    <PrimaryButton className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md" disabled={processing}>
                        Registrarse
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
