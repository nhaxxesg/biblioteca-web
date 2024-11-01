<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Librarian extends Model
{
    use HasFactory;
    protected $table = 'bibliotecario';
    protected $primaryKey = 'idBibliotecario';
    protected $fillable = [
        'nombre',
        'AMaterno',
        'APaterno',
        'titulo',
        'codigoUsuario',
        'contrasenna',
        'estado'
    ];
    
    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}

