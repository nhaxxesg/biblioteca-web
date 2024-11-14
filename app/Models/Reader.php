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

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function Area()
    {
        return $this->hasOne(Area::class, 'idArea');
    }

    public function Sanctions()
    {
        return $this->hasMany(Sanction::class);
    }

    public function Type()
    {
        return $this->hasOne(Type::class, 'idTipo');
    }
}
