<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Controllers\Api\AutorController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\LibroAutorController;
use Illuminate\Http\Request;

class CatalogController extends Controller
{

    protected $libroAutorController;
    protected $categoryController;
    protected $autorController;

    public function __construct(
        CategoryController $categoryController,
        AutorController $autorController,
        LibroAutorController $libroAutorController
    ) {
        $this->categoryController = $categoryController;
        $this->autorController = $autorController;
        $this->libroAutorController = $libroAutorController;
    }
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $idCategoria = null)
    {
        $idCategoria = ($idCategoria == null) ? $idCategoria = 1 : $idCategoria = $idCategoria;
        $all = Book::where('idCategoria', $idCategoria)->paginate(20);
        foreach ($all as $libro) {
            $response_autor_json = $this->libroAutorController->show($libro->idLibro);
            $response_category_json = $this->categoryController->show($libro->idCategoria);
            $autor = $response_autor_json->getData();
            $category = $response_category_json->getData();
            $data = [
                'idLibro' => $libro->idLibro,
                'titulo' => $libro->titulo,
                'disponibilidad' => $libro->disponibilidad,
                'autor' => $autor->autor,
                'categoria' => $category->nombre
            ];
            $current_data[] = $data;
        }
        return response()->json($current_data);
    }

    // public function index(string $idCategoria = null)
    // {
    //     // CATALOGO
    //     $idCategoria = ($idCategoria == null) ? $idCategoria = 1 : $idCategoria = $idCategoria;
    //     $all = LibroAutor::where('idCategoria', $idCategoria)->paginate(20);
    //     foreach ($all as $libroautor) {
    //         $response_json = $this->bookController->show($libroautor->idLibro);
    //         $response_autor_json = $this->autorController->show($libroautor->idAutor);
    //         $book = $response_json->getData();
    //         $autor = $response_autor_json->getData();
    //         $response_category_json = $this->categoryController->show($book->idCategoria);
    //         $category = $response_category_json->getData();
    //         $data = [
    //             'idlibro' => $book->idLibro,
    //             'nombrelibro' => $book->titulo,
    //             'disponibilidad' => $book->disponibilidad,
    //             'nombreautor' => $autor->nombre,
    //             'categoria' => $category->nombre
    //         ];

    //         $current_data[] = $data;
    //     }

    //     return response()->json($current_data);
    // }
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
