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
        'idArea',
        'idTipo',
        'nombre',
        'correo',
        'clave',
        'aPaterno',
        'aMaterno',
        'dni',
        'codigoLector',
        'semestre'
    ];

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function Area()
    {
        return $this->hasOne(Area::class, 'idArea');
    }

    public function Type()
    {
        return $this->belongsTo(Type::class, 'idTipo', 'idTipo');
    }
}
    