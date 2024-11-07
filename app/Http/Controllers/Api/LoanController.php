<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\LibroAutorController;
use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    protected $bookController;
    protected $libroAutorController;


    public function __construct(BookController $bookController, LibroAutorController $libroAutorController)
    {
        $this->bookController = $bookController;
        $this->libroAutorController = $libroAutorController;
    }

    public function index()
    {

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
    # solo diosito sabee que como funciona este codigo
    public function show(int $user_id)
    {
        $all = Loan::where('idLector', $user_id)->paginate(10);
        $response_data = [];
        foreach($all as $prestamo){
            $response_libro_autor_json = $this->libroAutorController->show($prestamo->idLibro);
            $json_content = $response_libro_autor_json->getData();
            $data = json_decode(json_encode($json_content), true);
            $response_book_json = $this->bookController->show($prestamo->idLibro);
            $book = $response_book_json->getData();
            $data =[
                'libro' => $data['libro'],
                'category' => $data['category'], 
                'autor' => $data['autor'],
                'estado' => $prestamo->estado,
                'disponibilidad' => $book->disponibilidad,
            ];
            array_push($response_data, $data);
        };
        return response()->json($response_data);
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
