<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categoria';
    protected $primaryKey = 'idCategoria';
    protected $fillable = [ 
        'nombre',
        'abreviatura'
    ];

    public function book()
    {
        return $this->hasOne(Book::class);
    }
}
