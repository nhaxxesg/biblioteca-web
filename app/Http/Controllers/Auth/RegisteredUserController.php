<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Reader;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'APaterno' => 'required|string|max:255',
            'AMaterno' => 'nullable|string|max:255',
            'DNI' => 'required|string|max:8|unique:lector,DNI', // Validación única en la tabla lector
            'idTipo' => 'required|integer|exists:types,idTipo', // Validar que exista en la tabla types
            'idArea' => 'required|integer|exists:areas,idArea', // Validar que exista en la tabla areas
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $reader = Reader::create([
            'nombre' => $request->nombre,
            'APaterno' => $request->APaterno,
            'AMaterno' => $request->AMaterno,
            'DNI' => $request->DNI,
            'idTipo' => $request->idTipo,
            'idArea' => $request->idArea,
        ]);

        // Registrar el evento de registro
        event(new Registered($reader));

        // Opcional: autenticar al lector si lo necesitas
        Auth::login($reader);

        return redirect(route('mainmenu', absolute: false));
    }
}
