<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;
    protected $table = 'prestamo';
    protected $primaryKey = 'idPrestamo';
    protected $fillable = [
        'idBibliotecario',
        'idLector',
        'idLibro',
        'fPrestamo',
        'fDevoluciones',
        'estado'
    ];

    public function book()
    {
        return $this->hasOne(Book::class, 'idLibro');
    }

    public function Librarian()
    {
        return $this->hasOne(Librarian::class, 'idBibliotecario');
    }

    public function reader()
    {
        return $this->hasOne(Reader::class, 'idLector');
    }
}
