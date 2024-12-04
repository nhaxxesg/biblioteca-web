<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Solicitud;
use Illuminate\Http\Request;

class SolicitudController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $solicitudes = Solicitud::all();

        // Retornar las solicitudes en formato JSON
        return response()->json($solicitudes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'idLector' => 'required|integer',
            'idLibro' => 'required|integer',
            'fSolicitud' => 'required|date',
            'estado' => 'required|string|max:255',
        ]);
    
        try {
            $solicitud = Solicitud::create($validatedData);
            Book::where('idLibro', $request->idLibro)->update(['disponibilidad' => '0']); 
            return back()->with('message', 'Solicitud guardada');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'No se pudo guardar la solicitud: ' . $e->getMessage()]);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $idSolicitud)
    {
        $solicitud = Solicitud::find($idSolicitud);
        return response()->json($solicitud);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
