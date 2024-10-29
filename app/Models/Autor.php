<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autor extends Model
{
    use HasFactory;
    protected $table = 'autor';
    protected $primaryKey = 'idAutor';
    protected $fillable = [
        'nombreAU',
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class);
    }
}
