<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class LibroAutor extends Model
{
    use HasFactory;
    protected $table = 'libro_autor';
    protected $primarykey = 'idLibroAutor';
    protected $fillable = [
        'idAutor',
        'idCategoria',
        'idLibro',
        'titulo',
        'anno'
    ];

    public function phone(): HasOne
    {
        return $this->hasOne(Autor::class);
    }

    public function category(): HasOne
    {
        return $this->hasOne(Category::class);
    }

    public function book(): HasOne
    {
        return $this->hasOne(Book::class);
    }


}
