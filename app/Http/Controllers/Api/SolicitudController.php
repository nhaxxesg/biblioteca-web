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
        
        $solicitudes = Solicitud::with(['reader', 'reader.Type', 'reader.Area','libro'])->get();

        // Retornar las solicitudes en formato JSON
        return response()->json($solicitudes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $solicitud = Solicitud::create($request->all());
        return back()->with([
            'message' => 'Solicitud guardada'
        ]);
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
