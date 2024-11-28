<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'solicitud';
    protected $primarykey = 'idSolicitud';
    protected $fillable = [
        'idLector',
        'idLibro',
        'fSolicitud',
        'estado',
        'updated_at',
        'created_at'
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