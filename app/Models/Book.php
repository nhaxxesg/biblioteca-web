<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'libro';
    protected $primaryKey = 'idLibro';
    protected $fillable = [
        'codigo',
        'estado',
        'disponibilidad'
    ];

    public function autors()
    {
        return $this->belongsToMany(Autor::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}

