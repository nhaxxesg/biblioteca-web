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
        $loan = Loan::create($request->all());
        return response()->json($loan, 201);
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
            $data=[
                'titulo' => $data['titulo'],
                'autor' => $data['autor'],
                'categoria' => $data['categoria'],
                'fPrestamo' => $prestamo->fPrestamo,
            ];
            array_push($response_data, $data);
            
        } 
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
