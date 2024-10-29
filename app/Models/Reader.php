<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reader extends Model
{
    use HasFactory;
    protected $table = 'lector';
    protected $primaryKey = 'idLector';
    protected $fillable = [
        'nombre',
        'APaterno',
        'AMaterno',
        'DNI',
        'codigoLector',
        'semestre',
        'idTipo',
        'idArea'
    ];
}
