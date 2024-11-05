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

    public function index(int $user_id)
    {
        /*$all = Loan::where('idLector', $user_id)->paginate(10);
        foreach($all as $prestamo){
            
            $data = []
        }*/
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
    public function show(string $id)
    {
        $loan = Loan::find($id)->book;
        return response()->json($loan);
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
