<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Devolucion;
use App\Models\DevolucionReader;
use Illuminate\Http\Request;

class DevolucionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = Devolucion::all();
        return response()->json($all);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id = null)
    {
        $all = DevolucionReader::where('idLector', $id)->paginate(10)->items();
        return response()->json($all);
    }

    public function searchByName(string $name)
    {
        $results = Devolucion::where('name', 'LIKE', '%' . $name . '%')->paginate(10)->items();
        return response()->json($results);
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
