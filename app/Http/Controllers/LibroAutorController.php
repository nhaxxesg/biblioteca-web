<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Models\LibroAutor;
use Illuminate\Http\Request;

class LibroAutorController extends Controller
{
    protected $bookController;
    protected $categoryController;

    public function __construct(BookController $bookController, CategoryController $categoryController)
    {
        $this->bookController = $bookController;
        $this->categoryController = $categoryController;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = LibroAutor::paginate(10);
        foreach ($all as $libroautor) {
            $response_json = $this->bookController->show($libroautor->idLibro);
            $book = $response_json->getData();
            $data = [
                'nombre libro' => $libroautor->titulo,
                'disponibilidad' => $book->disponibilidad
            ];  

            $current_data[] = $data;
            
        }

        return response()->json($current_data);
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
    public function show(string $id_libro)
    {
        $libroautor = LibroAutor::where('idLibro', $id_libro)->first();
        $response_json = $this->categoryController->show($libroautor->idCategoria);
        $category = $response_json->getData();
        $data = [
            'libro' => $libroautor->titulo,
            'catogory' => $category->nombreC
        ];
        return response()->json($data);
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
