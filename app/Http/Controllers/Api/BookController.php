<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\LibroAutorController;
use App\Models\Autor;
use App\Models\Book;
use App\Models\LibroAutor;
use Illuminate\Http\Client\ResponseSequence;
use Illuminate\Http\Request;

class BookController extends Controller
{
    protected $libroAutorController;
    protected $autorController;
    protected $categoryController;


    /* public function __construct(LibroAutorController $libroAutorController,
                                 AutorController $autorController, 
                                 CategoryController $categoryController)
    {
        $this->libroAutorController = $libroAutorController;
        $this->autorController = $autorController;
        $this->categoryController = $categoryController;

    } */
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        # ESTO ES PARA VER QUE LIBROS PUEDE PRESTARSE
        $autorController = new AutorController();
        $categoryController = new CategoryController();
        $all = LibroAutor::paginate(10);
        $all_data = [];

        foreach($all as $libroautor){
            $response_book_json = $this->show($libroautor->idLibro);
            $response_autor_json = $autorController->show($libroautor->idAutor);
            $response_category_json = $categoryController->show($libroautor->idCategoria);
            $category = $response_category_json->getData();
            $book = $response_book_json->getData();
            $autor = $response_autor_json->getData();
            $data = [
                'libro' => $libroautor->titulo,
                'category' => $category->nombreC,
                'autor' => $autor->nombreAU,
                'disponibilidad' => $book->disponibilidad

            ];
            array_push($all_data, $data);
        };
        return response()->json($all_data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $book = Book::create($request->all());
        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::find($id);
        return response()->json($book);
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