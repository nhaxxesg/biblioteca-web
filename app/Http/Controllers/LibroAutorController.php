<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\AutorController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Models\LibroAutor;
use Illuminate\Http\Request;

class LibroAutorController extends Controller
{
    protected $bookController;
    protected $categoryController;
    protected $autorController;

    public function __construct(BookController $bookController,
                                CategoryController $categoryController,
                                AutorController $autorController)
    {
        $this->bookController = $bookController;
        $this->categoryController = $categoryController;
        $this->autorController = $autorController;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // CATALOGO
        $all = LibroAutor::paginate(10);
        foreach ($all as $libroautor) {
            $response_json = $this->bookController->show($libroautor->idLibro);
            $response_autor_json = $this->autorController->show($libroautor->idAutor);
            $response_category_json = $this->categoryController->show($libroautor->idCategoria);
            $book = $response_json->getData();
            $autor = $response_autor_json->getData();
            $category = $response_category_json->getData();
            $data = [
                'nombrelibro' => $libroautor->titulo,
                'disponibilidad' => $book->disponibilidad,
                'nombreautor' => $autor->nombreAU,
                'categoria' => $category->nombreC
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
        # necesito un autor controller para traer el autor por el id 
        $response_autor_json = $this->autorController->show($libroautor->idAutor);
        $response_category_json = $this->categoryController->show($libroautor->idCategoria);
        $category = $response_category_json->getData();
        $autor = $response_autor_json->getData();
        $data = [
            'libro' => $libroautor->titulo,
            'category' => $category->nombreC,
            'autor' => $autor->nombreAU,

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
