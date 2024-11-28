<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devolucion extends Model
{
    use HasFactory;

    protected $table = 'devolucion';
    protected $primaryKey = 'idDevolucion';
    protected $fillable = [ 
        'idPrestamo',
        'fDevolucion',
        'fDevolucionEsperada'
    ];

    public function loans()
    {
        return $this->hasOne(Loan::class);
    }
}
