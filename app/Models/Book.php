<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'libro';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'title',
        'isbn',
        'publication_year',
        'stock',
        'category_id'
    ];

    public function autores()
    {
        return $this->belongsToMany(Autor::class, 'libro_autors', 'libro_id', 'autor_id');
    }

    public function loans()
    {
        return $this->hasMany(Loan::class, 'libro_id');
    }

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function isAvailable()
    {
        return $this->stock > 0;
    }
}

