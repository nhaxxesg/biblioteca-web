<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reader extends Model
{
    use HasFactory;
    protected $table = 'lector';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'idArea',
        'idTipo',
        'nombre',
        'APaterno',
        'AMaterno',
        'DNI',
        'codigoLec',
        'semestre'
    ];

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function sanctions()
    {
        return $this->hasMany(Sanction::class, 'lector_id');
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
    