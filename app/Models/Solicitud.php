<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'solicitud';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'lector_id',
        'libro_id',
        'status'
    ];

    public function reader()
    {
        return $this->belongsTo(Reader::class, 'lector_id');
    }

    public function libro()
    {
        return $this->belongsTo(Book::class, 'libro_id');
    }
    // Relación con el modelo Lector
    // public function reader()
    // {
    //     return $this->hasMany(Reader::class, 'idLector', 'idLector');
    // }
    // public function libro()
    // {
    //     return $this->belongsTo(Book::class, 'idLibro');
    // }
}