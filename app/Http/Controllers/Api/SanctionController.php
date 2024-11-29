<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sanction;
use App\Models\SanctionReader;
use App\Models\SanctionV;
use Illuminate\Http\Request;

class SanctionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $loan = Sanction::create($request->all());
        return response()->json($loan, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $all =  SanctionReader::where('idLector', $id)->paginate(10)->items();
        return response()->json($all);
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
