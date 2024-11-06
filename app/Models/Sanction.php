<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanction extends Model
{
    use HasFactory;
    protected $table = 'sanciones';
    protected $primaryKey = 'idSanciones';
    protected $fillable = [
        'idLector',
        'monto',
        'detalles',
        'estado'
    ];

    public function reader()
    {
        return $this->hasOne(Reader::class, 'idLector');
    }
}
