<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanction extends Model
{
    use HasFactory;
    protected $table = 'sancion';
    protected $primaryKey = 'idSancion';
    protected $fillable = [
        'idDevolucion',
        'monto',
        'detalles',
        'estado'
    ];

    public function devolucion()
    {
        return $this->hasOne(devolucion::class, 'idDevolucion');
    }
}
