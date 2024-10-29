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
        'fPrestamo'
    ];

    public function book()
    {
        return $this->hasOne(Book::class);
    }
}