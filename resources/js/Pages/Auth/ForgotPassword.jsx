import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Contraseña" />

            <div className="mb-4 text-sm text-gray-700">
                ¿Olvidaste tu contraseña? No te preocupes. Ingresa tu dirección de correo electrónico y te enviaremos un enlace para que puedas restablecerla.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-700 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        placeholder="Correo electrónico"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2 text-red-500" />
                </div>

                <div className="mt-6 flex items-center justify-end">
                    <PrimaryButton className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md" disabled={processing}>
                        Enviar enlace de restablecimiento
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
