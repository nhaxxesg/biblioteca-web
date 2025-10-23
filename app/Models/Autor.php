<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autor extends Model
{
    use HasFactory;
    protected $table = 'autor';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'name',
        'nationality'
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class, 'libro_autors', 'autor_id', 'libro_id');
    }
}
