<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class LibroAutor extends Model
{
    use HasFactory;
    protected $table = 'libro_autors';
    public $timestamps = true;
    protected $fillable = [
        'libro_id',
        'autor_id',
    ];

    public function autor()
    {
        return $this->belongsTo(Autor::class, 'autor_id');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'libro_id');
    }


}
