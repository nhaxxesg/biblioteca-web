<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'solicitud';
    protected $primarykey = 'idSolicitud';
    // public $incrementing = true;
    protected $fillable = [
        'idLector',
        'idlibro',
        'fSolicitud'
    ];
    // Relación con el modelo Lector
    public function reader()
    {
        return $this->hasMany(Reader::class, 'idLector', 'idLector');
    }
    public function libro()
    {
        return $this->belongsTo(Book::class, 'idLibro');
    }
}
